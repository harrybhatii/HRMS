import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import colors from '../../../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


const MiscDocumentsTab = ()=> {
  const navigation = useNavigation();

  const MiscData = [
    {Icon: ('Icon'), id:('1') , Document:('Aadhar Card'), DocumentType:('2')},
    {Icon:('Icon'), id:('2'), Document:('Pan Card'), DocumentType:('1')},
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
    <Text style={styles.Doccell}>{item.Document}</Text>
    <Text style={styles.doctcell}>{item.DocumentType}</Text>
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


    <FlatList
      data={MiscData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <View style={styles.headerlist}>
          <Text style={styles.headerCell}>Action</Text>
          <Text style={styles.sText}>s.No.</Text>
          <Text style={styles.docText}>Document</Text>
          <Text style={styles.doctText}>DocumentType</Text>
        </View>
      )}
    />
  </SafeAreaView>
);
};

export default React.memo(MiscDocumentsTab);
