import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../../constants/colors';

const Skills = () => {
  const navigation = useNavigation();

  const MedicalInsuranceData = [
    { Icon: 'Icon', id: '01', SkillsName: 'Hr', EmployeeScore: '50', Remarks:'Demo', Documents:'NA' },
    { Icon: 'Icon', id: '02', SkillsName: 'IT', EmployeeScore: '90', Remarks:'Demo', Documents:'NA' },
  ];

  const handleActionPress = (itemId) => {
    console.log(`Action pressed for item with id ${itemId}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.actionbtn}
        onPress={() => handleActionPress(item.id)}
      >
        <Icon name="more-vert" size={25} color="#554E56" />
      </TouchableOpacity>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.skicell}>{item.SkillsName}</Text>
      <Text style={styles.empcell}>{item.EmployeeScore}</Text>
      <Text style={styles.remarkcell}>{item.Remarks}</Text>
      <Text style={styles.Doccell}>{item.Documents}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.layout}>

      <View style={styles.dropdown}>

        <TouchableOpacity style={{ flexDirection: 'row', gap: 40, borderWidth: 2, color: colors.lightgrey,borderColor:'#ddd'}}>
          <Text style={styles.droptext}>All</Text>
          <Icon name="keyboard-arrow-down" size={24} color={colors.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('QualificationData'); }} style={styles.addbtn}>
          <Icon name="add" size={24} color={colors.white} />
          <Text style={styles.addbtntext}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal>
      <FlatList
        data={MedicalInsuranceData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.headerlist}>
            <Text style={styles.headerCell}>Action</Text>
            <Text style={styles.sText}>s.No. </Text>
            <Text style={styles.skiText}>Skills Name </Text>
            <Text style={styles.empText}>Employee Score </Text>
            <Text style={styles.remarksText}>Remarks</Text>
            <Text style={styles.DocText}>Documents</Text>
          </View>
        )}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Skills);