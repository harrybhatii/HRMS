import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../../constants/colors';

const Achievement = () => {
  const navigation = useNavigation();

  const Achievement = [
    { Icon: 'Icon', id: '01', Name: 'Golden Award', Date: '14-02-2023', Documents:'NA', Remarks:'Demo' },
    { Icon: 'Icon', id: '02', Name: 'Fifa Award', Date: '14-02-2022', Documents:'NA', Remarks:'Demo' },
  
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
      <Text style={styles.namecell}>{item.Name}</Text>
      <Text style={styles.Datecell}>{item.Date}</Text>
      <Text style={styles.Doccell}>{item.Documents}</Text>
      <Text style={styles.remarkcell}>{item.Remarks}</Text>
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
        data={Achievement}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.headerlist}>
            <Text style={styles.headerCell}>Action</Text>
            <Text style={styles.sText}>s.No. </Text>
            <Text style={styles.NameText}>Name </Text>
            <Text style={styles.DataText}>Date </Text>
            <Text style={styles.DocText}>Documents</Text>
            <Text style={styles.remarksText}>Remarks</Text>
          </View>
        )}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Achievement);
