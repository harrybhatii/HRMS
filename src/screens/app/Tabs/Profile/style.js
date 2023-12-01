import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';



const styles = StyleSheet.create({
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.skyblue,
        height: 'auto',
        width: '100%',
        paddingLeft: 20,
    },
    tab: {
        flexDirection: 'row',
        flex: 0,
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth:3,
        borderColor:'#ddd',
    },
    text: {
        marginRight: 18,
    },
    tabText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 21,
    },
    arrowButton: {
        marginRight: 10,
        height: 24,
        width: 24,
    },




});
export default styles;
