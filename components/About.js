//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// write component
class About extends Component{
    onstructor(){
        super()
        this.state ={
            name: '',
            email: ''
            
        };
    }
    render(){
        return(
            <View>

            <Text>Name: {this.state.name}</Text>
            <Text>Email: {this.state.email}</Text>

            </View>
        );
    }
}

//export