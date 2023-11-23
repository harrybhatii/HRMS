import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MasterDetailsTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text>Name: Harsh bhati </Text>
        <Text>Gender: Male</Text>
        <Text>Date of Birth: 2/february/2002</Text>
        {/* Add more personal information fields as needed */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text>Email: Harshbhati012@gmail.com</Text>
        <Text>Phone: +1 123-456-7890</Text>
        {/* Add more contact information fields as needed */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text>Street: Local</Text>
        <Text>City: Gr. Noida</Text>
        <Text>State: UP</Text>
        <Text>Zip Code: 123456</Text>
        {/* Add more address fields as needed */}
      </View>

      {/* Add more sections for additional details */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});



export default React.memo(MasterDetailsTab);
