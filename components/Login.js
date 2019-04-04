//import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

// write component
class Login extends Component{
    constructor(){
        super()
        this.state ={
            Email: '',
            Password: ''
        }
    }
    onChangeEmail(e){
        console.log('onChangeEmail', e)
        this.setState({Email: e})
    }
    onChangePassword(e){
        this.setState({Password: e})
    }
    onPress(){
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log('login', response)
        })
    }
    render(){
        return(
            <View>
                    <TextInput
                        style={{ height:40, fontSize: 20 }}
                        placeholder="Email"
                        value={this.state.Email}
                        onChangeText={this.onChangeEmail.bind(this)}
                    />
                    <TextInput
                        secureTextEntry
                        style={{ height:40, fontSize: 20 }}
                        placeholder="Password"
                        value={this.state.Password}
                        onChangeText={this.onChangePassword.bind(this)}
                    />
                    <Button      
                       title="Login"
                        onPress={this.onPress.bind(this)}
                    />
                
            </View>
        )
    }
}

// export
export default Login;