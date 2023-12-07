import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, View, Checkbox } from 'react-native';
import styles from './style';
import Input from '../../../../../../Components/Input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';




const FamilyDataInput = ({ navigation }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isSelected, setSelection] = useState(false);

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

          <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
              </View>
              <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
            </View>
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
            <View style={{ gap: 8 }}>
              <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Data')}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.clbtncontainer} onPress={() => navigation.navigate('Data')}>
                <Text style={styles.clbuttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(FamilyDataInput );
