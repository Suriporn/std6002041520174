import React, {Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection.js';

class Card extends Component {
    render(){
        return(
            <View >
                  <CardSection>
                        <View style={{flexDirection: 'row' , margin: 10}}>
                            <Image 
                                style={{ width: 80, height: 80}}
                                source={{ uri: 'https://bit.ly/2WqNDi1'}}>
                            </Image>

                        <View style={{marginTop: 20, matginLeftt: 10}}>  
                            <Text> Cat </Text> 
                            <Text> Cat </Text>  
                        </View >  

                        </View > 
                    </CardSection>
               
                    <CardSection>
                        <Image 
                                style={{ height: 300, margin: 10 }}
                                source={{ uri:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}}>
                        </Image>
                    </CardSection>
           
                    <CardSection>
                        <View style={styles.button}> 
                            <View style = {{ width: 150 }}>
                            <Button title="Click" />
                        </View>
                    </View>
                    </CardSection>
            </View>
        );
    }
}
//style
const styles = {
    button: {
        aligmItems: 'center',
        justtifyContent: 'center',
        margin: 10
    }
}
export default Card;