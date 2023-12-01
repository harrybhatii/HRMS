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
    textAction: {
        color: '#6C757D',
        fontSize: 13,
        fontWeight: '500',
        marginRight: 6,
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
    headerCell: {
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
        marginLeft:40,
        marginRight:15,
    },
    namecell: {
        color:'#554E56',
        marginLeft:20,
        marginRight:15,
        width:100,
    },
    Datecell: {
        color:'#554E56',
        marginLeft:5,
        marginRight:10,
    },
    remarkcell: {
        color:'#554E56',
        marginLeft:10,
    },
    Doccell: {
        color:'#554E56',
        marginLeft:25,
        marginRight:10,
        width:120
    },
    NameText: {
        color:'#554E56',
        marginLeft:10,
        marginRight:35,
        width:60,
    },
    DataText: {
        color:'#554E56',
        marginLeft:25,
        marginRight:25,
    },
    remarksText: {
        color:'#554E56',
        marginLeft:35,
        marginRight:20,
    },
    DocText: {
        color:'#554E56',
        marginLeft:45,
        marginRight:30,
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles;
