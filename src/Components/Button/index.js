import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({onpress, children}) =>{
    return(
        <TouchableOpacity onPress={onpress}
         style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
};
 
export default React.memo(Button);