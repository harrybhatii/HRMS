import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './style';


const Checkbox = ({ checked, onPress}) => {

    return (
        <Pressable onPress={onPress} style={[styles.container, checked ? styles.checkbox: {}]}>
            {checked ? (
                <View style={styles.innerSquare}/>
            ) :null}
        </Pressable>
    )
}
export default React.memo(Checkbox);