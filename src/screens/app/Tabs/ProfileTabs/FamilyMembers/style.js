import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

const styles = StyleSheet.create({

    layout: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 15,
    },

    headerlist: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor:'#ddd',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 8,
        backgroundColor: colors.lightgrey,
    },

    textAction: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginRight:8
    },
    actionbtn: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '400',
        marginRight: 19
        
    },
    sText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 8,
        marginRight: 8
    },

    nText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginRight:11,
    },
    relationText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 11,
        marginRight: 8,
    },
    DOBText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 8,
        marginRight: 23
    },
    phoneText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 25,
    },
    documentText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 35, 
    },
    dropdown: {
        borderColor: colors.lightgrey,
        marginTop: 16,
        marginBottom: 8,
        width: 'auto',
        flexDirection: 'row',
        gap: 190,
        alignItems: 'center',
    },

    droptext: {
        color: colors.midgrey,
        marginLeft: 10,
        fontSize: 16,
        alignSelf: 'center',
    },

    addbtn: {
        backgroundColor: colors.skyblue,
        flexDirection: 'row',
        height: 32,
        width: 75,
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 4,
    },

    addbtntext: {
        color: colors.white,
    },

    container: {
        flex: 1,
        padding: 5,
        backgroundColor: colors.lightgrey,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },

    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        color: colors.midgrey,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
    },

    cell: {
        color: colors.black,
        color: '#554E56',
        fontStyle:'normal',
        fontSize: 11,
        fontWeight: '400',
        marginRight:11,
        marginLeft: 18,
    },

    nameText: {
        marginLeft: 20,
        color: '#554E56',
        fontStyle:'normal',
        fontSize: 11,
        fontWeight: '400',
        marginRight:10,
        width:35
    },

    rText: {
        marginLeft: 10,
        color: '#554E56',
        fontStyle:'normal',
        fontSize: 11,
        fontWeight: '400',
        marginRight:10,
        width:50
    },
    dText: {
        color: '#554E56',
        fontStyle:'normal',
        fontSize: 11,
        fontWeight: '400',
        width:70
    },
    pText: {
        marginLeft: 5,
        marginRight:10,
        color: '#554E56',
        fontStyle:'normal',
        fontSize: 11,
        fontWeight: '400',
        width:70
    },
    docText: {
        marginLeft: 10,
        color: '#554E56',
        fontStyle:'normal',
        fontSize: 11,
        fontWeight: '400',
        width:70
    },

    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default styles;