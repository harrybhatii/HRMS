import React from "react";
import { SafeAreaView, Text } from "react-native";
import Button from "../../../Components/Button";
import styles from "./style";
import Title from "../../../Components/Title";
import Input from "../../../Components/Input";
import { ScrollView } from "react-native-gesture-handler";


const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Title>Welcome! </Title>
            <Text style={styles.text}>Login and get started</Text>

            
            <Text style={styles.textplace}>
                Email 
                <Text style={styles.star} > *</Text>
                </Text>
            <Input placeholder="Email" keyboardType="email-address" /> 

            <Text style={styles.textplace}>
                Client ID 
                <Text style={styles.star} > *</Text>
                </Text>
            <Input placeholder="Client ID"/>
            
            <Text style={styles.textplace}>
                Password 
                <Text style={styles.star} > *</Text>
                </Text>
            <Input placeholder="Password" secureTextEntry/>

            <Button onpress={()=> navigation.navigate('User')}> Login</Button>

            <Text style={styles.footerText}>
                Forget your password?
                <Text style={styles.footerLink}> Reset here</Text>
            </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Login);