import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';


const Attendance = () => {
  const [isPresent, setIsPresent] = useState(false);

  const handleAttendance = () => {
    // In a real app, you'd send a request to the backend to mark attendance.
    setIsPresent(!isPresent);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        Status: {isPresent ? 'Present' : 'Absent'}
      </Text>
      <Button
        title={isPresent ? 'Mark Absent' : 'Mark Present'}
        onPress={handleAttendance}
        style={styles.button}
        color="#3498db" // You can change the color according to your design
      />
    </View>
  );
};

export default React.memo(Attendance);
