import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style';

const Attendance = ({ navigation }) => {
  const handleRegularAttendance = () => {
    // Navigate to the regular attendance page
    navigation.navigate('PunchAttendance');
  };

  const handleSelfieAttendance = () => {
    // Navigate to the selfie attendance page
    navigation.navigate('PhotoAttendance');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Attendance</Text>

      <View style={styles.box}>
        <Text style={styles.title}>Choose Attendance Type</Text>

        <TouchableOpacity
          style={styles.button}
          onpress={handleRegularAttendance}
        >
          <Text style={styles.buttonText}>Regular Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onpress={handleSelfieAttendance}
        >
          <Text style={styles.buttonText}>Selfie Attendance</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default React.memo(Attendance);
