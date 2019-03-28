//import library
import React, {Component } from 'react';
import { View, Text } from 'react-native';

//creat component
class Header extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
//export
export default Header;