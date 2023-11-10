import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../../../../constants/colors';

const Asset = () => {
  // Dummy data for assets
  const assetsData = [
    { id: '1', name: 'Laptop', quantity: 20 },
    { id: '2', name: 'Desk Chair', quantity: 30 },
    // Add more assets as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Asset Management</Text>
      <FlatList
        data={assetsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.assetItem}>
            <Text style={styles.assetName}>{item.name}</Text>
            <Text style={styles.assetQuantity}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:colors.black
  },
  assetItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
   
  },
  assetName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:colors.black
  },
  assetQuantity: {
    color: '#555',
    
    
  },
});

export default React.memo(Asset);

