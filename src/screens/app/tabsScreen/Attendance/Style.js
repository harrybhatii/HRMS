import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.lightgrey,
      justifyContent: 'center',
      alignItems:'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 30,
      borderWidth:2,
      color:colors.black,
      backgroundColor:colors.lightgrey,

    },
    button: {
      backgroundColor: '#3498db',
      padding: 15,
      borderRadius: 8,
      margin: 10,
      width: 200,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    box:{

      backgroundColor:colors.yellow,
      height:'50%',
      width:'80%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:2,
      borderRadius:50,
    },
    Text:{
      fontSize:45,
      color:colors.black,
      marginBottom:60,
      backgroundColor:colors.yellow,
    },
  });

export default styles;
