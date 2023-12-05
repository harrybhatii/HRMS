import React, { useCallback, useState } from 'react';
import { View, Button, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from './style';

const Selfie = () => {
    const [isCameraOpen, setCameraOpen] = useState(false);

    const requestCameraPermission = useCallback(async () => {
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
    }, []);

    const toggleCamera = () => {
        setCameraOpen(prevState => !prevState);
        if (!isCameraOpen) {
            requestCameraPermission();
        }
    };

    const openCamera = () => {
        if (isCameraOpen) {
            launchCamera({ mediaType: 'photo' }, () => {
                // Handle the result if needed
            });
        }
    };

    return (
        <View style={styles.statusbar}>
            <View style={styles.camera}>
                <TouchableOpacity
                    onPress={() => {
                        toggleCamera();
                        openCamera();
                    }}
                    style={styles.taOpasity}
                />
            </View>
            <Button
                title={isCameraOpen ? 'Turn Off Camera' : 'Turn On Camera'}
                onPress={toggleCamera}
            />
            <Button title="Punch Attendance" onPress={() => { /* Handle punch attendance */ }} />
        </View>
    );
};

export default React.memo(Selfie);
