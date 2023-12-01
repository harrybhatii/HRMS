import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../constants/colors';

const Family = () => {
  const navigation = useNavigation();

  const familyMembersData = [
    { id: '01', name: 'Aditya', relation: 'Brother', dob: '1980-05-15', phone: '1234567890', document: 'NA' },
    { id: '02', name: 'Harsh', relation: 'Brother', dob: '1982-08-20', phone: '9876543210', document: 'NA' },
  ];

  const handleActionPress = (itemId) => {
    // Handle the action for the specific item (e.g., navigation, API call, etc.)
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
      <Text style={styles.rText}>{item.relation}</Text>
      <Text style={styles.dText}>{item.dob}</Text>
      <Text style={styles.pText}>{item.phone}</Text>
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

        <TouchableOpacity onPress={() => { navigation.navigate('QualificationData'); }} style={styles.addbtn}>
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
              <Text style={styles.nText}>Name </Text>
              <Text style={styles.relationText}>Relation </Text>
              <Text style={styles.DOBText}>D.O.B</Text>
              <Text style={styles.phoneText}>Phone no.</Text>
              <Text style={styles.documentText}>Document</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Family);
