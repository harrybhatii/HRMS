import React, { useState } from 'react';
import {ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

const QualificationTab = () => {
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [honors, setHonors] = useState('');

  const saveQualificationDetails = () => {
    // Add logic to save the qualification details to the backend/database
    console.log('Qualification Details Saved!');
  };

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Qualification Details</Title>
          <TextInput
            label="Degree"
            value={degree}
            onChangeText={(text) => setDegree(text)}
            style={styles.input}
          />
          <TextInput
            label="Institution"
            value={institution}
            onChangeText={(text) => setInstitution(text)}
            style={styles.input}
          />
          <TextInput
            label="Graduation Date"
            value={graduationDate}
            onChangeText={(text) => setGraduationDate(text)}
            style={styles.input}
          />
          <TextInput
            label="Honors"
            value={honors}
            onChangeText={(text) => setHonors(text)}
            style={styles.input}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={saveQualificationDetails} title="Save Qualification Details" />
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  input: {
    marginVertical: 8,
  },
});
export default React.memo(QualificationTab);
