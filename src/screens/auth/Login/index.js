import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../../../Components/Button";
import styles from "./style";
import Title from "../../../Components/Title";
import Input from "../../../Components/Input";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';


const Login = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                <View style={styles.passwordContainer}>
                    <Input
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        style={styles.passwordInput}
                    />
                    <TouchableOpacity onPress={toggleShowPassword}>
                        <Icon
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="#7f8c8d"
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Button onpress={() => navigation.navigate('User')}> Login</Button>

                <Text style={styles.footerText}>
                    Forget your password?
                    <Text style={styles.footerLink}> Reset here</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Login);
