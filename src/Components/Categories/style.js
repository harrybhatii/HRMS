import  { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

 const styles = StyleSheet.create({
    item:{
        fontSize: 15,
        
        color:'rgba(0,0,0,0.5)',
        paddingVertical:2,
    },
    selectedItem:{
        color:'#000000'
    } ,
    itemContainer:{
        marginRight:10,
        marginVertical:10,
        
    },
    selectedItemContainer:{
        borderBottomColor:colors.midgrey,
        borderBottomWidth:4,
    }
});

    export default styles;