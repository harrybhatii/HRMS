import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import colors from '../../../../../constants/colors';

const QualificationData = () => {
  const [qualification, setQualification] = useState('');
  const [institution, setInstitution] = useState('');
  const [year, setYear] = useState('');


  const qualificationOptions = [
    { label: 'High School', value: 'High School' },
    { label: 'Bachelor\'s Degree', value: 'Bachelor\'s Degree' },
    { label: 'Master\'s Degree', value: 'Master\'s Degree' },
    
  ];


  const handleSave = () => {
    // Add logic to save the qualification details
    console.log('Saving Qualification Details:', { qualification, institution, year });
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Qualification Details Entry</Text>

        <Text style={styles.label}>Qualification</Text>
        <PickerSelect
          style={pickerSelectStyles}
          value={qualification}
          placeholder={{ label: 'Select Qualification', value: null }}
          onValueChange={(value) => setQualification(value)}
          items={qualificationOptions}
        />

        <Text style={styles.label}>Institution</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Institution"
          value={institution}
          onChangeText={(text) => setInstitution(text)}
        />

        <Text style={styles.label}>Year</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Year"
          value={year}
          onChangeText={(text) => setYear(text)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: colors.white,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: colors.blue,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
  
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  inputAndroid: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export default React.memo(QualificationData);