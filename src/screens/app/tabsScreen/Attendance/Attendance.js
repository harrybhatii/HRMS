import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';

const Attendance=()=> {
    return (
      <View style={styles.container}>
        <Text> Attendance </Text>
      </View>
    );
  }

export default React.memo(Attendance);
