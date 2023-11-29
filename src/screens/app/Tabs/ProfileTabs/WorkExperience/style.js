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
        borderColor: '#ddd',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 8,
        backgroundColor: colors.lightgrey,
    },

    textAction: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginRight: 8
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
        marginRight: 8,
        marginLeft: 8
    },
    frText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 8,
        marginRight: 24,
    },
    toText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 35,
        marginRight: 35,
    },
    salText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 35,
        marginRight: 10,
    },
    desText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 31,
    },
    supText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 31,
    },
    expText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 31,
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
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginRight: 16,
        marginLeft: 20,
    },

    nameText: {
        marginLeft: 20,
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginRight: 1,
        width: 75
    },

    fText: {
        marginLeft: 25,
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        marginRight: 10,
        width: 65
    },
    tText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        width: 75,
        paddingLeft: 10,
        paddingRight:5,
    },
    saText: {
        marginLeft: 12,
        marginRight: 5,
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        width: 60
    },
    docText: {
        marginLeft: 10,
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        width: 70
    },
    desiText: {
        marginLeft: 10,
        marginRight:10,
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        width: 70
    },
    exText : {
        marginLeft: 30,
        marginRight:25,
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        width: 50
    },

    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default styles;