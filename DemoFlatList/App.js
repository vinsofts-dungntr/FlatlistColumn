/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import FlatListItem from './components/FLatListItem';
import {data} from './data/Data';
import {first} from './data/First';

const {height, width} =Dimensions.get('window')
export default class App extends Component {

  constructor(props){
    super(props)
    this.state = ({
      first: [0,...data]
    })
  }


  addImage = () => {
    data.unshift({'id': +1, 'image': 'https://imgix.ranker.com/user_node_img/50081/1001612310/original/i-am-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces', 'name':'goku'},)
    this.setState({first: [0,...data]})
  }

  renderHeader(){
    return(
      <TouchableHighlight onPress={this.addImage}>
          <View style = {{
            width: width/2.3,
            height: height/3.5,
            backgroundColor: 'yellow',
            margin: 10,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Image source = {require('./icon/add.png')} style = {{width: 70, height: 70, borderRadius: 100}}></Image>
        <Text>Add Service</Text>
        </View>
      </TouchableHighlight>

    )
  }
 
  render() {
    
    return (
      <View style={styles.container}>
        <FlatList
          data ={this.state.first}
          renderItem = {this._renderItem}
          numColumns = {2}
          showsVerticalScrollIndicator={false}
          keyExtractor ={(item,id) => id.toString()}
          >

        </FlatList>
      </View>
    );
  }

  _renderItem = ({item, index}) =>{
    if(item === 0){
      return this.renderHeader();
    }else{
      return (
        <View>
          <FlatListItem  item = {item}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    
  },
  
});
