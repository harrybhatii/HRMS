import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback, View,Button } from 'react-native';
import styles from './style';
import Input from '../../../../../../Components/Input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker'




const workexpDataInput = ({ navigation }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


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
              Employer Name
              <Text style={styles.star} > *</Text>
            </Text>
            <Input placeholder="Enter Name" style={styles.passwordContainer} />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', gap: 5, }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                From
                <Text style={styles.star} > *</Text>
              </Text>
              <Button title="Open" onPress={() => setOpen(true)} />
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                To
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

          <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Supervisor
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="Akash"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Basic Salary
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="25000"
                style={styles.passwordContainer}
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Total salary
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="32000"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Currency
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="INR"
                style={styles.passwordContainer}
              />
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Reasion for Leaving
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="Personal Reasion"
                style={styles.passwordContainer}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.textplace}>
                Place
                <Text style={styles.star} > *</Text>
              </Text>
              <Input
                placeholder="Noida"
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

export default React.memo(workexpDataInput);
