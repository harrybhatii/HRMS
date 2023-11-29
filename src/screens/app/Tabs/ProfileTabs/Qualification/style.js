import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

const styles = StyleSheet.create({

    layout: {
        flexdirection: 'column',
        alignitems: 'flexstart',
        marginLeft: 15,
        marginRight: 15
    },

    headerlist: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:'#ddd',
        display: 'flex',
        alignitems: 'center',
        alignself: 'stretch',
        padding: 8,
        backgroundColor: colors.lightgrey

    },
    textAction: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginRight: 6
    },
    actionbtn:{
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginRight: 10
    },
    sText: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 5,
        marginRight: 10
    },
    
    QualiText: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 8,
        marginRight: 30
    },
    marksText: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 30,
        marginRight: 10
    },
    dropdown:
    {
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
        backgroundColor: colors.lightgrey
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
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
    },
    cell: {
        color:'#554E56',
        marginLeft:50,
    },
    Qcell: {
        color:'#554E56',
        marginLeft:40,
        width:130
    },
    mcell: {
        color:'#554E56',
        marginLeft:10,
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles;