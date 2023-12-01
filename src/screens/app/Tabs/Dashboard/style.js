import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        height: 570,
        backgroundColor: colors.lightgrey,
    },

    profileData: {
        fontSize: 30,
        color: '#000000',
        marginTop: 10,
        paddingLeft: 15,
        marginLeft: 10,


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
        marginBottom: 70,
        marginTop: 70,
        backgroundColor:colors.skyblue,

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
        textAlign:'center',
        color:colors.white,

    },

    topbar: {
        backgroundColor: colors.skyblue,
        verticalAlign: 'middle',
        height:0,
        flex:1,
        flexDirection:'row',
    },

});
export default styles;
