import React from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import styles from './style';

const MasterDetailsTab = () => {
  const data = [
    { label: 'Emp Code', value: ': 12345' },
    { label: 'Name', value: ': Mr. Puneet Kumar' },
    { label: "Father's Name", value: ': Virender Kumar' },
    { label: "Mother's Name", value: ': Rekha' },
    { label: 'Spouse Name', value: ': Virender Kumar' },
    { sectionTitle: 'Identity Card Details' },
    { label: 'Pan', value: ': JSDFG4573G' },
    { label: 'Aadhar Card no.', value: ': 215451654545' },
    { label: 'Voter ID', value: ': 5G3FHB4G9B4T' },
    { sectionTitle: 'Bank Details' },
    { label: 'Payment Mode', value: ': UPI' },
    { label: 'Bank Name', value: ': SBI' },
    { label: 'Account Number', value: ': 6241651845' },
    { label: 'IFSC Code', value: ': SBI0001845' },
    { label: 'Account Name', value: ': Puneet Kumar' },
    { sectionTitle: 'Joining Details' },
    { label: 'Date Of Birth', value: ': 02/02/2002' },
    { label: 'Date Of Joining', value: ': 02/02/2022' },
    { label: 'Confirmation', value: ': Yes/No' },
    { label: 'Date of Confirmation', value: ': 02/03/2022' },
    { sectionTitle: 'Employee Work Details' },
    { label: 'Branch', value: ': Noida' },
    { label: 'Grade', value: ': Sales' },
    { label: 'Designation', value: ': Manager' },
    { label: 'Division', value: ': Niwwla' },
    { label: 'Project', value: ': Paysence' },
    { label: 'Cost Center', value: ': Ware House' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.sectionTitle) {
            return (
              <Text style={styles.sectionTitle}>
                {item.sectionTitle}
              </Text>
            );
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

export default React.memo(MasterDetailsTab);
