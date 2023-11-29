import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../constants/colors';

const QualificationTab = () => {
  const navigation = useNavigation();

  const qualificationData = [
    { Icon: 'Icon', id: '01', qualification: "Bachelor's Degree", marks: '75%' },
    { Icon: 'Icon', id: '02', qualification: "Master's Degree", marks: '80%' },
  ];

  const handleActionPress = (itemId) => {
    // Handle the action for the specific item (e.g., navigation, API call, etc.)
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
      <Text style={styles.Qcell}>{item.qualification}</Text>
      <Text style={styles.mcell}>{item.marks}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.layout}>
      
      <View style={styles.dropdown}>
      
        <TouchableOpacity style={{ flexDirection: 'row', gap: 40, borderWidth: 2, color: colors.lightgrey,borderColor:'#ddd',}}>
          <Text style={styles.droptext}>All</Text>
          <Icon name='keyboard-arrow-down' size={24} color={colors.black} />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => { navigation.navigate('QualificationData') }} style={styles.addbtn}>
          <Icon name='add' size={24} color={colors.white} />
          <Text style={styles.addbtntext}>Add</Text>
        </TouchableOpacity>
      </View>
      

      <FlatList
        data={qualificationData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.headerlist}>
            <Text style={styles.headerCell}>Action</Text>
            <Text style={styles.sText}>s.No. </Text>
            <Text style={styles.QualiText}>Qualification </Text>
            <Text style={styles.marksText}>Marks(%) </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(QualificationTab);
