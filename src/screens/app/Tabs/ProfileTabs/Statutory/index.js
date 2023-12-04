// StatutoryTab.js
import React from 'react';
import { SafeAreaView, FlatList, Text, View, TextInput } from 'react-native';
import styles from './style';

const StatutoryTab = () => {
  const data = [
    { sectionTitle: 'PF Details' },
    { label: 'PF Deduction type', value: ': PF Deduction Upto Ceiling Limit' },
    { label: 'FPS Applicable', value: ': Yes' },
    { label: 'UAN no.', value: ': PKD1651616' },
    { label: 'PF Number', value: '165164661654' },
    { label: 'PE End Date', value: ': 31-10-2023' },
    { label: 'VPF Applicable', value: ': Yes' },

    { sectionTitle: 'ESI Details' },
    { label: 'ESI Applicable', value: ': Yes' },
    { label: 'ESIC Start Date', value: ': 01-02-2021' },
    { label: 'ESIC Number', value: ': 541984514' },
    { label: 'ESCI End Date', value: ': 01-02-2031' },

    { sectionTitle: 'Professional Tax' },
    { label: 'PT Applicable', value: ': Yes' },
    { label: 'PT Start Date', value: ': 31-03-2022' },
    { label: 'PT End Date', value: ': 31-03-2023' },
    { label: 'Branch', value: ': Jaipur' },
    { label: 'Location', value: ': Delhi' },
    { label: 'Division', value: ': Manager' },

    { sectionTitle: 'Labour Welfare Details' },
    { label: 'LWF Applicable', value: ': Yes' },
    { label: 'LWF Start Date', value: ': 02/02/2022' },
    { label: 'LWF Start Date', value: ': 02/02/2023' },
    { label: 'Branch ', value: ': Noida' },
    { label: 'Location ', value: ': Uttar Pradesh' },
    { label: 'Division', value: ': Niwwa' },

    { sectionTitle: 'OT Setting' },
    { label: 'Applicable', value: ': Yes' },
    { label: 'Applicable on week Off', value: ': No' },
    { label: 'Applicable On Public Holidays', value: ': Yes' },
    { label: 'Applicable On Working Holidays', value: ': Yes' },

    { sectionTitle: 'Bonus Setting' },
    { label: 'Applicable', value: 'Yes' },
    { label: 'Bonus Category', value: 'Depend on Company' },
  ];

  const renderInfo = (label, value) => (
    <View style={styles.infoContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput style={styles.valueText} editable={false} value={value} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          if (item.sectionTitle) {
            return (
              <Text style={styles.sectionTitle}>
                {item.sectionTitle}
              </Text>
            );
          } else {
            return renderInfo(item.label, item.value);
          }
        }}
      />
      
    </SafeAreaView>
  );
};

export default React.memo(StatutoryTab);
