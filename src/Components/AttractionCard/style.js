import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    card: {
       
        flexWrap: 'wrap',
        flexDirection:'row',
        marginBottom: 10,
        borderWidth:2,
        borderRadius:15,
        alignContent:'center',
        width: 100,
        height: 100,
        marginLeft:10,
        borderWidth:1,
        backgroundColor:colors.white,
        borderColor:colors.lightgrey,
    },
    title: {
        color: '#000000',
        fontSize: 10,
        borderRadius:10,
        width:90,
        fontWeight: 'bold',
        textAlign:'center',
        marginRight:10,
        
        
    },
    icon: {
        width: 40,
        height:40,
       marginLeft:30,
       marginRight:20,
       marginTop:5,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 4
    },

});

export default styles;