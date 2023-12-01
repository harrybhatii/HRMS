import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, PermissionsAndroid } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './style';

const selfie = () => {


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <View style={styles.statusbar}>

            <Text style={styles.cameratxt}> Take A Selfie </Text>
            <View style={styles.camera}>
                <TouchableOpacity
                    onPress={() => {
                       requestCameraPermission();
                    }}
                    style={styles.taOpasity} />
            </View>
        </View>
    );
};


export default React.memo(selfie);
