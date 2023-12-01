import { View, Text } from 'react-native';
import React from 'react';
import colors from '../../../../../../constants/colors';

const Skills = () => {
  return (
    <View>
      <Text style={{color:colors.black}}>SkillData</Text>
    </View>
  );
};

export default React.memo(Skills);