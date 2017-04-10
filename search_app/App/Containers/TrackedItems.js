import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity, TextInput, Alert, AsyncStorage } from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'
// import axios from 'axios'
import {Item} from './Item'
// Styles
// import Searcher from 'react-native-search-box';
// import styles from './Styles/LaunchScreenStyles'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'
// import ModalPicker from 'react-native-modal-picker'


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: '', results: [], searchType: undefined};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('HERe');
    AsyncStorage.getAllKeys((error, keys) => {
      console.log(`errors are ${error}`);
      console.log(keys);
      if (error === null) {
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] !== "reduxPersist:github" && keys[i] !== "reducerVersion") {
            AsyncStorage.getItem(keys[i], (error1, results1) => {
              if (error1 === null) {
                console.log(this.state.results);
                let tmp_item = this.state.results.concat([JSON.parse(results1)]);
                this.setState({results: tmp_item});
              } else {
                console.log('Can\'t get Item');
              }
            });
          }
        }
      }
    });
  }

  handleSubmit(e) {
    // console.log('hande submit');
    // let url = 'https://craigslist-simple-search.herokuapp.com/craigslist' + '?search=' + this.state.search;
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', url);
    // xhr.responseType = 'json';
    // let that = this;
    // xhr.onload = function() {
    //   that.setState({results: xhr.response});
    // };
    //
    // xhr.onerror = function() {
    //   console.log("Booo");
    // };
    //
    // xhr.send();
  }

  // <input type=checkbox
  render () {
    console.log(this.state.results);
    if (this.state.results) {
      return (
         <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
           <Header headerText={'Simple Search'} />


           <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[0]}>



           {this.state.results.map( (listing) => (
             <CardSection key={listing.url} style={{backgroundColor: '#f5f5f5'}}>
               <TouchableOpacity
                  style={{flex: 1}}
                  key={listing.url}
                  onPress={() => Actions.item({listing}
                  )}>
               <DisplayContainer>
                 <View style={styles.thumbnailContainerStyle} >
                   <Text>{listing.title}</Text>
                  <Image style={styles.thumbnailStyle} source={{uri: listing.image_url}} />
                 </View>

                 <DisplayTextContainer>
                  <Text
                    key={listing.url}
                    onPress={() => Actions.item({listing})}
                    item={listing}
                    style={{fontSize: 20,
                      color: '#03af1f',
                      fontWeight: 'bold'}}
                  >
                    {listing.price}
                  </Text>
                 </DisplayTextContainer>
               </DisplayContainer>
              </TouchableOpacity>
             </CardSection>

         ))}
         </ScrollView>

         </View>
      )}
     else {
       console.log('here');
      return (
        <View>
          <Header headerText={'Simple Search'} />

          <InputContainer>
            <TextInput
              value={this.state.search}
              style={{height: 31, textAlign: 'center'}}
              placeholder='Search'
              onChangeText={(value) => this.setState({search: value})}
              onSubmitEditing={this.handleSubmit}
            />
          </InputContainer>

        </View>
    )}
  }
}


const Header = (props) => {
  const { headerTextStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity style={styles.backButtonStyle} onPress={Actions.launchScreen}>
        {/* onPress={Actions.launchScreen} */}
        <Text style={{color: 'white'}}>Back</Text>
      </TouchableOpacity>
      <Text style={headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const DisplayContainer = (props) => {
  return (
    <View style={styles.displayContainerStyle}>
      {props.children}
    </View>
  );
};

const DisplayTextContainer = (props) => {
  return (
    <View style={styles.displayTextContainerStyle}>
      {props.children}
    </View>
  );
};

const InputContainer = (props) => {
  return (
    <View style={styles.inputContainerStyle}>
      {props.children}
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  containerStyle: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  displayContainerStyle: {
    backgroundColor: "#fbfbfb",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingRight: 40,
  },
  displayTextContainerStyle: {
    marginRight: 5,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#5294d6',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  backButtonStyle: {
    position: 'absolute',
    top: 25,
    left: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
  },
};
