import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
const styles = StyleSheet.create({
    statusbar:{
    backgroundColor:colors.white,
    paddingHorizontal:20,
    },
    cameratxt:{
        fontSize:20,
        textAlign:'left',
        color:colors.black,
        fontWeight:'300',
        textDecorationLine:'underline',
    },
    camera:{
        backgroundColor:colors.red,
        flex:1,
        paddingVertical:10,
    },
    taOpasity:{
        backgroundColor:colors.midgrey,
        flex:0.5,
        
    }
});
export default styles;