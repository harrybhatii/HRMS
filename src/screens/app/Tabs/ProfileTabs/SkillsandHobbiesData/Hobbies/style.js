import { StyleSheet } from 'react-native';
import colors from '../../../../../../constants/colors';
const styles = StyleSheet.create({

    layout: {
        flexdirection: 'column',
        alignitems: 'flexstart',
        marginLeft: 15,
        marginRight: 15,
    },
    headerlist: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:'#ddd',
        display: 'flex',
        alignitems: 'center',
        alignself: 'stretch',
        padding: 8,
        backgroundColor: colors.lightgrey,
    },
    actionbtn:{
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginRight: 10,
    },
    sText: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 20,
        marginRight: 10,
    },

    NameText: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 15,
        marginRight: 15,
    },
    RemarksText: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 25,
        marginRight:20,
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
    codecell: {
        color:'#554E56',
        marginLeft:40,
        width:130,
    },
    Remarkscell: {
        color:'#554E56',
        marginLeft:10,
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles;
