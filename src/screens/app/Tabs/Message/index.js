import * as React from 'react';
import { Text, View } from 'react-native';

const MessageTab=()=>{
    return(
      <View>
        <Text style={{color:"black"}}>Message</Text>
      </View>
    )
  };
  
export default React.memo(MessageTab); 