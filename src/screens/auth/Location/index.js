import React from "react";
import {View,Text} from 'react-native';
import Geolocation from "@react-native-community/geolocation";
const Location=()=>{
    Geolocation.getCurrentPosition(data=>console.log(data))
    return(
        <View>
            <Text>location</Text>
        </View>
    );
};

export default React.memo(Location);