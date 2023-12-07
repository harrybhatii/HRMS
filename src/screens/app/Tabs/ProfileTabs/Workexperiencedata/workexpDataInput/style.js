import { StyleSheet } from 'react-native';
import colors from '../../../../../../constants/colors';


const styles = StyleSheet.create({
    safeareacontainer:{
        flex:1,
        backgroundColor:colors.white
    },
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginTop: 30,
        backgroundColor:colors.white,
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
        borderWidth: 1,
        borderColor: '#S343A40',
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 8,
        marginBottom: 20,
        
        height: 42,
        color:'#6C757D',
    },

    documentInputContainer: {
        backgroundColor: colors.lightgrey,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#343A40',
        marginBottom: 20,
    },
    documentInput: {
        flex: 1,
        backgroundColor:colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderLeftWidth: 2,
        borderColor: '#9199A5',
        
    },
    documentName: {
        flex: 1,
        color: '#9199A5',
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
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: '#E9E9E9',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
    },
    btncontainer: {
        backgroundColor: colors.skyblue,
        color: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 8,
    },
    buttonText: {

        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
    },

    clbtncontainer: {
        backgroundColor: colors.white,
        color: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 8,
        borderWidth: 2,
        borderColor: colors.skyblue
    },
    clbuttonText: {

        color: colors.skyblue,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
    },
    textinputview: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'flexstart',
        alignself: 'stretch',
    },
    dtextinputview: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'flexstart',
        alignself: 'stretch',
    },
      checkboxContainer: {
        flex:1,
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
        color:colors.black
      },
});

export default styles;
