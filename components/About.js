// import libray
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

// write component 
class About extends Component {
    
    static navigationOptions = {
        title: "Profile",
        headerStyle: {
            backgroundColor: "#8B5927",
        },
        headerTintColor: "white",
    };
    
    constructor() {
        super();
        this.state ={
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        const url = 'http://128.199.240.120:9999/api/auth/me';
        const config = {
            headers: {
                accept: '*/*',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2E1YWZiYjE5OGUwMDA4NDcyZGRlMzQiLCJpYXQiOjE1NTQ5NzA5OTJ9.yrKxDE_uQMuPP_jAUQbcUtyNZOsVt5c3lvvwHXr2VSg'
            }
        }

        axios.get(url, config)
            .then(async response => {
                console.log(response.data.data);
                this.setState({
                    email: response.data.data.email,
                    name: response.data.data.name
                })
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    

    render() {
        if (this.state.name == '') {
            return <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (
            <View>
                <Text style={styles.text}>Name: {this.state.name}</Text>
                <Text style={styles.text}>Email: {this.state.email}</Text>

                <Button title="Logout" color = "#8B5927" onPress={() => this.props.navigation.push('Login')} /> 
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 20
    }
}

// export 
export default About;