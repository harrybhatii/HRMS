import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
   container:{
      borderWidth:1,
      borderColor:colors.black,
      borderRadius:4,
      height:16,
      width:16,
      justifyContent:'center',
      alignItems:'center',
      marginVertical:2,
   },
   innerSquare:{
      height:10,
      width:10,
      borderRadius:4,
      backgroundColor:colors.red,
   },
   checkbox:{
      borderWidth:2
   }
});
export default styles;