import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.midblue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 15,
    },
    text: {
        color:colors.white,
        fontSize:15,
        fontWeight:'bold'
    },
    bluebg:{
        backgroundColor: colors.blue,
    }
});
export default styles;