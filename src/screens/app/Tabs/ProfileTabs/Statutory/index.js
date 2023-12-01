import React, { Component } from 'react';
import { View, Text,ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './style';

const StatutoryTab = ()=> {
    return (

        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.sectionTitle}>PF Details</Text>
            {renderInfo('PF Deduction type', ': PF Deduction Upto Ceiling Limit')}
            {renderInfo('PF Applicable', ': Yes')}
            {renderInfo('FPS Applicable', ': No')}
            {renderInfo('UAN no.', ': PKD1651616')}
            {renderInfo('PF Number', ':  165164661654')}
            {renderInfo('PE End Date',': 31-10-2023')}
            {renderInfo('VPF Applicable', ': No')}

            <Text style={styles.sectionTitle}>ESI Details</Text>
            {renderInfo('ESI Applicable', ': Yes')}
            {renderInfo('ESIC Start Date', ': 01-02-2021')}
            {renderInfo('ESIC Number', ': 541984514')}
            {renderInfo('ESCI End Date', ': 01-02-2031 ')}

            <Text style={styles.sectionTitle}>Professional Tax</Text>
            {renderInfo('PT Applicable', ': Yes')}
            {renderInfo('PT Start Date', ': 31-03-2022')}
            {renderInfo('PT End Date', ': 31-03-2023')}
            {renderInfo('Branch', ': Jaipur')}
            {renderInfo('Location', ': Delhi')}
            {renderInfo('Division', ':  Manager')}

            <Text style={styles.sectionTitle}> Labour Welfare Details</Text>
            {renderInfo('LWF Applicable', ': Yes')}
            {renderInfo('LWF Start Date', ': 02/02/2022')}
            {renderInfo('LWF Start Date', ': 02/02/2023')}
            {renderInfo('Branch ', ': Noida')}
            {renderInfo('LOcation ', ': Uttar Pradesh')}
            {renderInfo('Division', ': Niwwa')}

            <Text style={styles.sectionTitle}>OT Setting</Text>
            {renderInfo('Applicable', ': Yes')}
            {renderInfo('Applicable on week Off', ': No')}
            {renderInfo('Applicable On Public Holidays', ': Yes')}
            {renderInfo('Applicable On Working Holidays', ': Yes')}

            <Text style={styles.sectionTitle}> Bonus Setting</Text>
            {renderInfo('Applicable','Yes')}
            {renderInfo('Bonus Category','Depend on Company')}

          </ScrollView>
        </SafeAreaView>

  );
};


    const renderInfo = (label, value) => (
      <View style={styles.infoContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput style={styles.valueText} editable={false}>{value}</TextInput>
      </View>
    );


export default React.memo(StatutoryTab);
