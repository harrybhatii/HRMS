import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:24,
    },
    footerText:{
        color:colors.grey,
        fontSize:15,
        textAlign:'center',
        marginTop:20
    },
    footerLink:{
        paddingLeft:4,
        color:colors.midblue,
        fontWeight:'bold'
    },
    text:{
        marginBottom:30,
        fontSize:20,
        color:colors.midgrey
    },
    textplace:{
        fontSize:15,
        color:colors.black,
        marginBottom:1
    },
    star:{
        color:colors.red
    },
    passwordInput:{
        color:colors.black,
        width:"90%"
    },
    passwordContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth: 2, // Border width
        borderColor:colors.midgrey, // Border color
        borderRadius: 8,
        alignItems:"center",
        paddingHorizontal:8,
        marginBottom:20,
        backgroundColor:colors.lightgrey,
        height:42
    }
});

export default styles;