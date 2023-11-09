import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        height: 600,
        backgroundColor:colors.lightgrey
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
        paddingTop: 100,


    },
    profiletab: {
        paddingTop: 0,
        paddingRight: 30,
        paddingLeft: 30,
        flexDirection: 'row',
        marginBottom: 70,
        marginTop: 70,
        borderBottomLeftRadius:10
        
    },


    userInfo: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.black,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

});
export default styles;