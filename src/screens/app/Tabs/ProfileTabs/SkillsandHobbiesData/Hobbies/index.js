import { View, Text } from 'react-native';
import React from 'react';
import colors from '../../../../../../constants/colors';

const Hobbies = () => {
  return (
    <View>
      <Text style={{color:colors.black}}>HobbyData</Text>
    </View>
  );
};

export default React.memo(Hobbies);
