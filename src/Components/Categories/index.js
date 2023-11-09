import React from "react";
import { Text,FlatList, TouchableOpacity } from "react-native";
import styles from "./style";

const Categories = ({ categories ,selectedCategory, onCategoryPress})=>{
return(
    <FlatList
    horizontal 
     data={categories}
     style={{ borderWidth:1,borderColor:'green',marginRight:-15}}
     showsVerticalScrollIndicator={false}
     renderItem={({item}) => {
        const selected = selectedCategory === item 

        return (
            <TouchableOpacity onPress={()=> onCategoryPress (item)} style={[styles.itemContainer, selected ? styles.selectedItemContainer :{}]}>
                 <Text style={[styles.item, selected ? styles.selectedItem :{}]}>{item}</Text>
            </TouchableOpacity>
        )
     }
}
    /> 
);
};
export default React.memo(Categories);








