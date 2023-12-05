import { StyleSheet } from 'react-native';
import colors from '../../../../../../constants/colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginTop: 30
    },
    footerText: {
        color: colors.grey,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
    },
    footerLink: {
        paddingLeft: 4,
        color: colors.midblue,
        fontWeight: 'bold',
    },
    text: {
        marginBottom: 30,
        fontSize: 20,
        color: colors.midgrey,
    },
    textplace: {
        fontSize: 15,
        color: colors.black,
        marginBottom: 1,
    },
    star: {
        color: colors.red,
    },
    passwordInput: {
        color: colors.black,
        width: '90%',
    },
    passwordContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor:'#343A40',
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 8,
        marginBottom: 20,
        backgroundColor: colors.lightgrey,
        height: 42,
        
    },

    documentInputContainer: {
        backgroundColor: colors.lightgrey,
        flexDirection: 'row',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#343A40',
        marginBottom:90,
    },
    documentInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderLeftWidth: 2,
        borderColor: '#9199A5',
    },
    documentName: {
        flex: 1,
        marginRight: 10,
    },
    placeholder: {
        fontSize: 14,
        color: '#9199A5',
    },
    Doctext: {
        fontSize: 14,
        color: '#9199A5',
        width: 75,
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'#E9E9E9',
        fontFamily:'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
    }
});

export default styles;
