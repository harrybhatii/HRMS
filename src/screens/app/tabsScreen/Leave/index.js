import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from './Style';

const Leave = () => {
  const leaveData = [
    { id: '1', employee: 'Harsh bhati', startDate: '2023-11-15', endDate: '2023-11-20' },
    { id: '2', employee: 'Aditya Bhatt', startDate: '2023-12-01', endDate: '2023-12-05' },

    { id: '3', employee: 'Harsh bhati', startDate: '2023-11-15', endDate: '2023-11-20' },
    { id: '4', employee: 'Aditya Bhatt', startDate: '2023-12-01', endDate: '2023-12-05' },
  
    { id: '5', employee: 'Harsh bhati', startDate: '2023-11-15', endDate: '2023-11-20' },
    { id: '6', employee: 'Aditya Bhatt', startDate: '2023-12-01', endDate: '2023-12-05' },
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leave Management</Text>
      <FlatList
        data={leaveData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.leaveItem}>
            <Text style={styles.leaveEmployee}>{item.employee}</Text>
            <Text style={styles.leaveDates}>
              {`Leave Dates: ${item.startDate} to ${item.endDate}`}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default React.memo(Leave);
