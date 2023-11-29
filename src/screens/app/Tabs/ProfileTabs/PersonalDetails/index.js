import React from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList, ScrollView } from 'react-native';
import styles from './style';

const PersonalDetailsTab = () => {
  const data = [
    { sectionTitle: 'Present Address' },
    { label: 'Address 1', value: ': H-15, BSI Building, 2nd floor' },
    { label: 'Address 2', value: ': Sector 16' },
    { label: 'District/city', value: ': Noida' },
    { label: 'State', value: ': Uttar Pradesh' },
    { label: 'Country', value: ': India' },
    { label: 'Pin Code', value: ': 110023' },
    { sectionTitle: 'Permanent Address' },
    { label: 'Address 1', value: ': H-15, BSI Building, 2nd floor' },
    { label: 'Address 2', value: ': Sector 16' },
    { label: 'District/city', value: ': Noida' },
    { label: 'State', value: ': Uttar Pradesh' },
    { label: 'Country', value: ': India' },
    { label: 'Pin Code', value: ': 110023' },
    { sectionTitle: 'Contact Details' },
    { label: 'Landline no.', value: ': 1241581854' },
    { label: 'Personal no.', value: ': 8778484841' },
    { label: 'Office Mobile no.', value: ': 6241651845' },
    { sectionTitle: 'Email Address' },
    { label: 'Email Personal', value: ': bddyb@gmail.com' },
    { label: 'Email Official', value: ': cuhfeb@gmail.com' },
    { sectionTitle: 'Emergency Details' },
    { label: 'Contact Name', value: ': Harsh Bhati' },
    { label: 'Contact no.', value: ': 874548841' },
    { label: 'ESIC Dispensary', value: ': 158484KFJBVH4' },
    { sectionTitle: 'Passport Details' },
    { label: 'Passport no', value: ': IN54DD4333' },
    { label: 'Issue Date ', value: ': 01-03-2021' },
    { label: 'Expiry Date', value: ': 30-10-2028' },
    { label: 'Country Issue', value: ': India' },
    { sectionTitle: 'Driving License Details' },
    { label: 'License no', value: ': IN54DD4333' },
    { label: 'Issue Date ', value: ': 01-03-2021' },
    { label: 'Expiry Date', value: ': 30-10-2028' },
    { label: 'License', value: ': Both' },
    { label: 'Country Issue', value: ': India' },
    { sectionTitle: 'Personal Details' },
    { label: 'Marital Status', value: ': Married' },
    { label: 'Marriage Date ', value: ': 01-03-2011' },
    { label: 'No. of Children', value: ': 02' },
    { label: 'Blood Group', value: ': A+' },
    { label: 'Height', value: ': 170cm' },
    { label: 'Weight', value: ': 70kg' },
    { label: 'Mode of Recruitment', value: ': Online' },
    { label: 'Referenced By', value: ': Archana' },
  ];

  return (
    <SafeAreaView style={styles.container}>
    
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.sectionTitle) {
            return <Text style={styles.sectionTitle}>{item.sectionTitle}</Text>;
          } else {
            return renderInfo(item.label, item.value);
          }
        }}
      />
    </SafeAreaView>
  );
};

const renderInfo = (label, value) => (
  <View style={styles.infoContainer}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput style={styles.valueText} editable={false}>
      {value}
    </TextInput>
  </View>
);



export default React.memo(PersonalDetailsTab);
