//import library
import React, {Component } from 'react';
import { View, Text } from 'react-native';

//creat component
class Header extends Component {
    render(){
        return(
            <View style={styles.header}> 
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}
const styles = {
    header: {
        padding: 50
    },
    text:{
        fontSize: 25
    }
}


//export
export default Header;