import React from "react";
import { Text } from "react-native";
import styles from "./styles";

class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'default State Text',
        };
    };

    onTextPress =()=>{
        this.setState({
            text:'Updated'
        })
    }
    render(){
        const { text } =this.props;
        return(
            <Text onPress={this.onTextPress} style={styles.title}>{text}</Text>
        );
    };
};

export default Title;