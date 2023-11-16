import React ,{ useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const WorkFromHome = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const submitRequest = () => {
    if (selectedDate) {
      // Here, you would typically send the request to the server
      // For this example, we'll just show an alert
      Alert.alert('Request Submitted', 'Your work from home request has been submitted successfully.');
    } else {
      Alert.alert('Error', 'Please select a date for work from home.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work from Home Request</Text>

      <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>

      {selectedDate && (
        <Text style={styles.selectedDate}>Selected Date: {selectedDate.toDateString()}</Text>
      )}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity style={styles.submitButton} onPress={submitRequest}>
        <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datePickerButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 16,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default React.memo(WorkFromHome);
