import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';
import colors from '../../constants/colors';


const Input = ({...props }) => {

    return (
        <TextInput 
        placeholderTextColor={colors.midgrey} 
        style={styles.input}  {...props} />
    )
}
export default React.memo(Input);