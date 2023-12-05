import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';
const styles = StyleSheet.create({
    statusbar: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    cameratxt: {
        fontSize: 20,
        textAlign: 'left',
        color: colors.black,
        fontWeight: '300',
        textDecorationLine: 'underline',
    },
    camera: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius:50,
        paddingVertical: 20,
    },
    taOpasity: {
        borderRadius:250,
        height:350,
        width:350,
        backgroundColor: colors.lightgrey,
        alignContent:'center',
        margin:1.5
    },
});
export default styles;
