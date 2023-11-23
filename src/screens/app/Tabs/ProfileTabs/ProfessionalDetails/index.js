import React, { useState } from 'react';
import { ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import styles from './style';

const ProfessionalDetailsTab = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  const saveProfessionalDetails = () => {
    // Add logic to save the professional details to the backend/database
    console.log('Professional Details Saved!');
  };

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Professional Details</Title>
          <TextInput
            label="Job Title"
            value={jobTitle}
            onChangeText={(text) => setJobTitle(text)}
            style={styles.input}
          />
          <TextInput
            label="Company"
            value={company}
            onChangeText={(text) => setCompany(text)}
            style={styles.input}
          />
          <TextInput
            label="Start Date"
            value={startDate}
            onChangeText={(text) => setStartDate(text)}
            style={styles.input}
          />
          <TextInput
            label="End Date"
            value={endDate}
            onChangeText={(text) => setEndDate(text)}
            style={styles.input}
          />
          <TextInput
            label="Responsibilities"
            multiline
            numberOfLines={4}
            value={responsibilities}
            onChangeText={(text) => setResponsibilities(text)}
            style={styles.input}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={saveProfessionalDetails} title="Save Professional Details" />
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default React.memo(ProfessionalDetailsTab);
