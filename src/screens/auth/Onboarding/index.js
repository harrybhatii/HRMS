import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../Components/Button';


const Onboarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/neadlogo.svg')}
                style={{ width: 100, height: 100, borderWidth:2}} // Adjust the dimensions as needed
            />
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/LPAst.png')}
                />
                <View style={styles.footer} />
            </View>



            <View style={styles.content}>
                <Text style={styles.title}> Welcome to keyman HR! </Text>
                <Text style={styles.subtitle}>
                    This is simple dummy text for testing
                </Text>

                <Button onpress={() => navigation.navigate('Login')}>Log in</Button>
            </View>
            <Text style={styles.text}>Powered by Nead IT Solutions </Text>
        </View>
    );
};

export default React.memo(Onboarding); 