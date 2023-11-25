import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    picon: { 
    borderRadius:100,
    borderWidth:1, 
    fontSize:50,
    marginBottom:20, 
    paddingLeft:8,
    paddingRight:8 , 
    backgroundColor:colors.white
},
icon:{
    backgroundColor:colors.white,
    borderWidth:1,
    borderColor:colors.midgrey,
    borderRadius:100,
    fontSize:25,
    paddingLeft:6,
    paddingRight:6,
    paddingBottom:3,
    paddingTop:3

}
});
export default styles;