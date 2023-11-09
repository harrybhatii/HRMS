import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';


  const Attendance = () => {
    return (
      <View style={styles.attandance}>
        <TouchableOpacity>
            <Text>Punch Attendance</Text>
        </TouchableOpacity>
      </View>
    );
  };
export default React.memo(Attendance);
