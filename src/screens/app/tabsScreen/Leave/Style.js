import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor:colors.lightgrey,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color:colors.black,
    },
    leaveItem: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 12,
    },
    leaveEmployee: {
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor:colors.grey,

    },
    leaveDates: {
      color: '#555',
    },
  });
  export default styles;
