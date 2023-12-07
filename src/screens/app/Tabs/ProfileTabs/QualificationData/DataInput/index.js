import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, View, Button } from 'react-native';
import styles from './style';
import Input from '../../../../../../Components/Input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import colors from '../../../../../../constants/colors';


const QualificationData = ({ navigation }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

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
              Qualification
              <Text style={styles.star} > *</Text>
            </Text>
            <Input placeholder="Qualification" style={styles.passwordContainer} />
          </View>

          <View style={styles.textinputview}>
            <Text style={styles.textplace}>
              Institute
              <Text style={styles.star} > *</Text>
            </Text>
            <Input placeholder="Enter Insititute" style={styles.passwordContainer} />
          </View>

          <View style={styles.textinputview}>
            <Text style={styles.textplace}>
              Board University
              <Text style={styles.star} > *</Text>
            </Text>
            <Input
              placeholder="University"
              style={styles.passwordContainer}
            />
          </View>

          <View style={styles.textinputview}>
            <Text style={styles.textplace}>
              Main Subject
              <Text style={styles.star} > *</Text>
            </Text>
            <Input
              placeholder="University"
              style={styles.passwordContainer}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', gap: 5, }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Division
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="first"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Marks (%)
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="78"
                style={styles.passwordContainer}
              />
            </View>

          </View>
          <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Passing year
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="Enter Year"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Weightage
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="50"
                style={styles.passwordContainer}
              />
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

export default React.memo(QualificationData);
