import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, View,  } from 'react-native';
import styles from './style';
import Input from '../../../../../../Components/Input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import { Checkbox } from 'react-native-paper';




const FamilyDataInput = ({ navigation }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const [graduityNominee, setGraduityNominee] = useState(false);
  const [pfNominee, setPFNominator] = useState(false);
  const [pensionNominee, setPensionNominee] = useState(false);
  const [esicNominee, setESICNominee] = useState(false);
  const [medicalInsurance, setMedicalInsurance] = useState(false);
  const [medicalInsuranceNominee, setMedicalInsuranceNominee] = useState(false);

  const SelectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true
      });
      console.log(doc)
      setSelectedDocument(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log("User cancelled the upload", err);
      else
        console.log(err);
    }

  }

  return (
    <SafeAreaView style={styles.safeareacontainer}>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.textinputview}>
            <Text style={styles.textplace}>
              Name
              <Text style={styles.star} > *</Text>
            </Text>
            <Input placeholder="Enter Name" style={styles.passwordContainer} />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', gap: 5, }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Aadhar no.
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="123456789"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Relation
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="Brother"
                style={styles.passwordContainer}
              />
            </View>

          </View>

          <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Date of Birth
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="Enter Date"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Age
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="25"
                style={styles.passwordContainer}
              />
            </View>
          </View>


          <View style={styles.textinputview}>
            <Text style={styles.textplace}>
              Address
              <Text style={styles.star} > *</Text>
            </Text>
            <Input placeholder=" Enter Details..." style={styles.passwordContainer} />
          </View>

          <View style={styles.textinputview}>
            <Text style={styles.textplace}>
              Phone no.
              <Text style={styles.star} > *</Text>
            </Text>
            <Input
              placeholder="9999999999"
              style={styles.passwordContainer}
            />
          </View>

          <View>
            <Text style={styles.textplace}>
              Document
              <Text style={styles.star} > *</Text>
            </Text>
            <View style={styles.documentInputContainer}>
              <Text style={styles.Doctext}>Choose file</Text>
              <TouchableWithoutFeedback onPress={SelectDoc}>
                <View style={styles.documentInput}>
                  {selectedDocument ? (
                    <Text style={styles.documentName}>{selectedDocument.name}</Text>
                  ) : (
                    <Text style={styles.placeholder}>Select Document</Text>
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
            </View>

          <View style={{ flex: 1, flexDirection: 'row', }}>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={graduityNominee ? 'checked' : 'unchecked'}
              onPress={() => setGraduityNominee(!graduityNominee)}
              color="#1976D2" 
            />
            <Text style={styles.label}>Graduity Nominee</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={pfNominee ? 'checked' : 'unchecked'}
              onPress={() => setPFNominator(!pfNominee)}
              color="#1976D2"
            />
            <Text style={styles.label}>PF Nominee</Text>
          </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', }}>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={pensionNominee ? 'checked' : 'unchecked'}
              onPress={() => setPensionNominee(!pensionNominee)}
              color="#1976D2" 
               />
            <Text style={styles.label}>Pension Nominee</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={esicNominee ? 'checked' : 'unchecked'}
              onPress={() =>setESICNominee (!esicNominee)}
              color="#1976D2"
            />
            <Text style={styles.label}>ESIC Nominee</Text>
          </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', }}>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={medicalInsurance ? 'checked' : 'unchecked'}
              onPress={() => setMedicalInsurance(!medicalInsurance)}
              color="#1976D2" 
            />
            <Text style={styles.label}>Medical Insurance</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={medicalInsuranceNominee ? 'checked' : 'unchecked'}
              onPress={() => setMedicalInsuranceNominee(!medicalInsuranceNominee)}
              color="#1976D2"
            />
            <Text style={styles.label}>Medical Insurance Nominee</Text>
          </View>
          </View>


            <View style={{ gap: 8 }}>
              <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Data')}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.clbtncontainer} onPress={() => navigation.navigate('Data')}>
                <Text style={styles.clbuttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(FamilyDataInput);
