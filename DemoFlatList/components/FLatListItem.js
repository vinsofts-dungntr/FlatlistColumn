import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';


const {height, width} =Dimensions.get('window')
export default class FlatListItem extends Component {
    render(){
        console.log(this.props.item);
        return(
            <View style = {{
                width: width/2.3,
                height: height/3.5,
                backgroundColor: 'yellow',
                margin: 10,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Image source = {{uri: this.props.item.image}} style = {{width: 70, height: 70, borderRadius: 100}}></Image>
            <Text>{this.props.item.name}</Text>
            </View>
        )
    }
}