//import library
import React from 'react';
import { View, Text} from'react-native';
//write component
class App extends React.Component{
    CanvasRenderingContext2D(){
        return(
                //component about
                <view>
                    <Text>
                        Hello World
                    </Text>
                </view>
        );
    }
}

//export
export default App;