import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';


const Button = ({onpress, children, style}) =>{
    return(
        <TouchableOpacity onPress={onpress}
         style={style}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>{children}</Text>
        </TouchableOpacity>
    )
};
 
export default React.memo(Button);