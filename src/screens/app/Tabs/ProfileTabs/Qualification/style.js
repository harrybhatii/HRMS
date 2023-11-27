import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";

const styles = StyleSheet.create({

    layout: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'flexstart',
        gap: 8,
        marginLeft: 15,
        marginRight: 15
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        display: 'flex',
        alignitems: 'center',
        alignself: 'stretch',
        padding: 8,
        gap: 8,
        backgroundColor: colors.lightgrey

    },
    headerText: {
        color: '#6C757D',
        fontSize: 11,
        fontWeight: '500',
        height: 'normal',

    },
    dropdown:
    {
        borderColor: colors.midgrey,
        marginTop: 16,
        marginBottom: 8,
        width: 'auto',
        flexDirection: 'row',
        flex:1,
        gap:190,

    },
    droptext: {
        color: colors.black,
        marginLeft: 10
    },
    addbtn: {
        backgroundColor: colors.skyblue,
        flexDirection: 'row',
        height: 32,
        width:80,
       
        alignItems: 'center',
        alignContent:'center',
        borderRadius: 4,
    },
    addbtntext: {
        color: colors.white,
        
    }
});

export default styles;