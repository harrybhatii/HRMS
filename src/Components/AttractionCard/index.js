import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../constants/colors";

const AttractionCard = ({ title, onPress, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {/* Add the Icon component with the specified name */}
        <Icon style={styles.icon} name={iconName} size={30} color={colors.midblue} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCard);
