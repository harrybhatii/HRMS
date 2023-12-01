import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.black,
    },
    subtitle: {
        fontSize: 15,
        color: colors.grey,
        textAlign: 'center',
        marginVertical: 16,
    },
    content: {
        padding: 46,
        paddingTop: 0,
        backgroundColor: colors.skyblue,


    },
    footer: {
        backgroundColor: colors.skyblue,
        height: 60,
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        bottom: 0,
    },
    text: {
        textAlign: 'center',
        color:colors.midgrey,
        fontWeight:'900',
        backgroundColor:colors.skyblue
    },
    head: {
        color: colors.green,
        fontSize: 25,
    },

});

export default styles;