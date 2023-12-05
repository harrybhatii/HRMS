import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        height: 570,
        backgroundColor: colors.lightgrey,
    },

    profileData: {
        fontSize: 30,
        paddingLeft: 5,
        marginLeft:10,
    },
    
    profileimage: {
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: colors.white,
        height: 70,
        width: 70,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        paddingLeft: 25,
        paddingTop: 50,

    },
    profiletab: {
        paddingTop: 0,
        paddingRight: 30,
        paddingLeft: 30,
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 40,
        backgroundColor: colors.skyblue,

    },
    userInfo: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.white,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    text: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        color: colors.white,

    },

    topbar: {
        backgroundColor: colors.skyblue,
        verticalAlign: 'middle',
        height: 0,
        flex: 1,
        flexDirection: 'row',
    },

});
export default styles;
