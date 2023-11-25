import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './style'

const MasterDetailsTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        {renderInfo('Emp Code', ': 12345')}
        {renderInfo('Name', ': Mr. Puneet Kumar')}
        {renderInfo("Father's Name", ': Virender Kumar')}
        {renderInfo("Mother's Name", ': Rekha')}
        {renderInfo('Spouse Name', ': Virender Kumar')}

        <Text style={styles.sectionTitle}>Identity Card Details</Text>
        {renderInfo('Pan', ': JSDFG4573G')}
        {renderInfo('Aadhar Card no.', ': 215451654545')}
        {renderInfo('Voter ID', ': 5G3FHB4G9B4T')}
        {renderInfo('Driving Licence no.', ': 6241651845')}

        <Text style={styles.sectionTitle}>Bank Details</Text>
        {renderInfo('Payment Mode', ': UPI')}
        {renderInfo('Bank Name', ': SBI')}
        {renderInfo('Account Number', ': 6241651845')}
        {renderInfo('IFSC Code', ': SBI0001845')}
        {renderInfo('Account Name', ': Puneet Kumar')}

        <Text style={styles.sectionTitle}>Joining Details</Text>
        {renderInfo('Date Of Birth', ': 02/02/2002')}
        {renderInfo('Date Of Joining', ': 02/02/2022')}
        {renderInfo('Confirmation', ': Yes/No')}
        {renderInfo('Date of Confirmation', ': 02/03/2022')}

        <Text style={styles.sectionTitle}>Employee Work Details</Text>
        {renderInfo('Branch', ': Noida')}
        {renderInfo('Grade', ': Sales')}
        {renderInfo('Designation', ': Manager')}
        {renderInfo('Division', ': Niwwla')}
        {renderInfo('Project', ': Paysence')}
        {renderInfo('Cost Center', ': Ware House')}
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

export default React.memo(MasterDetailsTab);
