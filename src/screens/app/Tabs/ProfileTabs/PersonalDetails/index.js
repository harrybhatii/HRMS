import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './style'

const PersonalDetailsTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Present Address</Text>
        {renderInfo('Address 1', ': H-15,BSI Building, 2nd floor')}
        {renderInfo('Address 2', ': Sector 16')}
        {renderInfo("District/city", ': Noida')}
        {renderInfo("State", ': Uttar pradesh')}
        {renderInfo('Country', ': India')}
        {renderInfo('Pin Code', ': 110023')}

        <Text style={styles.sectionTitle}>Permanent Address</Text>
        {renderInfo('Address 1', ': H-15,BSI Building, 2nd floor')}
        {renderInfo('Address 2', ': Sector 16')}
        {renderInfo("District/city", ': Noida')}
        {renderInfo("State", ': Uttar pradesh')}
        {renderInfo('Country', ': India')}
        {renderInfo('Pin Code', ': 110023')}

        <Text style={styles.sectionTitle}>Contact Details</Text>
        {renderInfo('Landline no.', ': 1241581854')}
        {renderInfo('Personal no.', ': 8778484841')}
        {renderInfo('Office Mobile no.', ': 6241651845')}
       

        <Text style={styles.sectionTitle}>Email Address</Text>
        {renderInfo('Email Personal', ': bddyb@gmail.com')}
        {renderInfo('Email Official', ': cuhfeb@gmail.com')}

        <Text style={styles.sectionTitle}>Emergency Details</Text>
        {renderInfo('Contact Name', ': Harsh Bhati')}
        {renderInfo('Contact no.', ': 874548841')}
        {renderInfo('ESIC Dispensary', ': 158484KFJBVH4')}

        <Text style={styles.sectionTitle}>Passport Details</Text>
        {renderInfo('Passport no', ': IN54DD4333')}
        {renderInfo('Issue Date ', ': 01-03-2021')}
        {renderInfo('Expiry Date', ': 30-10-2028')}
        {renderInfo('Country Issue', ': India')}


        
        <Text style={styles.sectionTitle}>Driving License Details</Text>
        {renderInfo('License no', ': IN54DD4333')}
        {renderInfo('Issue Date ', ': 01-03-2021')}
        {renderInfo('Expiry Date', ': 30-10-2028')}
        {renderInfo('License', ': Both')}
        {renderInfo('Country Issue', ': India')}

        <Text style={styles.sectionTitle}>Personal Details</Text>
        {renderInfo('Merital Status', ': Married')}
        {renderInfo('Marrage Date ', ': 01-03-2011')}
        {renderInfo('No. on Children', ': 02')}
        {renderInfo('Blood Group', ': A+')}
        {renderInfo('Height', ': 170cm')}
        {renderInfo('Weight', ': 70kg')}
        {renderInfo('Mode of Recruitment', ': Online')}
        {renderInfo('Refrenced By', ': Archana')}

        
      </ScrollView>
    </SafeAreaView>
  );
};

const renderInfo = (label, value) => (
  <View style={styles.infoContainer}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput style={styles.valueText} editable={false}>{value}</TextInput>
  </View>
);


export default React.memo(PersonalDetailsTab);
