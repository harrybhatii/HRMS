import { StyleSheet } from "react-native";
import colors from "../../../../../constants/colors";
import { useState } from "react";

const styles = StyleSheet.create({
    header: {
        paddingTop: 16,
        paddingRight: 0,
        paddingBottom: 8,
        paddingLeft: 0,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        alignself: 'stretch',
        borderBottomWidth:4,
        borderBottomColor:colors.green
    },
    text: {
        borderRadius: 40,
        width: 110,
        height: 22,
        marginTop: 10,
        gap: 8,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: '#00ACEE',
        fontStyle:'normal',
        lineHeight:21,
    },

    touch: {
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 16,
        paddingTop: 16,
        justifycontent: 'center',
        alignitems: 'center',
        gap: 8,
        flex: 1,
        display: 'flex'

    }
});

export default styles;