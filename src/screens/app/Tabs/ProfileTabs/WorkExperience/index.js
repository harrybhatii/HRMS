import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../constants/colors';

const WorkExperienceTab = () => {
  const navigation = useNavigation();

  const familyMembersData = [
    { id: '01', name: 'Harsh', From:'03-11-2021', To: '06-12-2021', Salary: '120000',Designation:'Developer', Supervisor:'Aditya',Experience:'2' ,document: 'NA' },
    { id: '02', name: 'Sunita', From:'08-11-2021', To: '11-12-2021', Salary: '130000',Designation:' web Developer', Supervisor:'Aadi',Experience:'2' ,document: 'N/A' },

  ];

  const handleActionPress = (itemId) => {
    
    console.log(`Action pressed for item with id ${itemId}`);
  };

  const renderFamilyMember = ({ item }) => (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.actionbtn}
        onPress={() => handleActionPress(item.id)}
      >
        <Icon name="more-vert" size={21} color="#554E56" />
      </TouchableOpacity>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.fText}>{item.From}</Text>
      <Text style={styles.tText}>{item.To}</Text>
      <Text style={styles.saText}>{item.Salary}</Text>
      <Text style={styles.desiText}>{item.Designation}</Text>
      <Text style={styles.docText}>{item.Supervisor}</Text>
      <Text style={styles.exText}>{item.Experience}</Text>
      <Text style={styles.docText}>{item.document}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.layout}>

      <View style={styles.dropdown}>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 40, borderWidth: 2, borderColor: '#ddd', color: colors.lightgrey }}>
          <Text style={styles.droptext}>All</Text>
          <Icon name="keyboard-arrow-down" size={24} color={colors.black} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('WorkExpData'); }} style={styles.addbtn}>
          <Icon name="add" size={24} color={colors.white} />
          <Text style={styles.addbtntext}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <FlatList
          style={{ borderWidth: 1, borderColor: '#ddd' }}
          data={familyMembersData}
          keyExtractor={(item) => item.id}
          renderItem={renderFamilyMember}
          ListHeaderComponent={() => (
            <View style={styles.headerlist}>
              <Text style={styles.textAction}>Action</Text>
              <Text style={styles.sText}>s.No. </Text>
              <Text style={styles.nText}> Employer Name </Text>
              <Text style={styles.frText}>From </Text>
              <Text style={styles.toText}>To</Text>
              <Text style={styles.salText}>Salary</Text>
              <Text style={styles.desText}>Designation</Text>
              <Text style={styles.supText}>Supervisor</Text>
              <Text style={styles.expText}>Experience</Text>
              <Text style={styles.documentText}>Documents</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(WorkExperienceTab);
