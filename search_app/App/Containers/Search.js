import React from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity, TextInput } from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'
import axios from 'axios';
// import fetch from 'fetch';

// Styles
import styles from './Styles/LaunchScreenStyles'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'
import ModalPicker from 'react-native-modal-picker'


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: '', results: undefined, searchType: undefined};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('hande submit');
    let url = 'https://craigslist-simple-search.herokuapp.com/craigslist' + '?search=' + this.state.search;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    let that = this;
    xhr.onload = function() {
      that.setState({results: xhr.response});
    };

    xhr.onerror = function() {
      console.log("Booo");
    };

    xhr.send();
  }

  // <input type=checkbox
  render () {
    console.log(this.state.results);
    if (this.state.results) {
      return (
        <View>
          <TextInput onChangeText={this.update} onSubmitEditing={this.handleSubmit}>

          </TextInput>
          {this.state.results.map( (listing) => (
            <Text key={listing.url}>{listing.title}</Text>
          ))}
          <View style={styles.centered}>
            <Text>Here is Search Component</Text>
          </View>
        </View>)
      }
     else {
      console.log('here');
      return (
        <View>
          <TextInput value={this.state.search} style={{paddingTop: 30, height: 30, width: 100}} placeholder='SOMETHING' onChangeText={(value) => this.setState({search: value})} onSubmitEditing={this.handleSubmit}>

          </TextInput>
          <View style={styles.centered}>
            <Text>Here is Search Component</Text>
          </View>
        </View>)
    }
  }
}
