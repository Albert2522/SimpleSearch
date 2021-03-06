import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'
import {Item} from './Item'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'
import ModalDropdown from 'react-native-modal-dropdown'
import item from './Item'
import Spinner from 'react-native-loading-spinner-overlay'

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: '', results: [], searchType: undefined, visible: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest(source) {
    let url = 'https://craigslist-simple-search.herokuapp.com/' + source + '?search=' + this.state.search;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    let that = this;
    xhr.onload = function() {
      let tmp_results = that.state.results.concat(xhr.response)
      that.setState({results: tmp_results});
    };
    xhr.onerror = function() {
      console.log(`Error with ${source}`);
    };
    xhr.send();
  }

  handleSubmit(e) {

    this.setState({
      visible: !this.state.visible
    });

    let that = this;
    setTimeout(function () {
      that.setState({
        visible: !that.state.visible
      });
    }, 8000);

    if (this.state.searchType === undefined) {
      this.makeRequest('craigslist');
      this.makeRequest('ebay');
      this.makeRequest('amazon');
    }
    else {
      let that= this;
      this.state.searchType.forEach( (source) => that.makeRequest(source));
    }
  }

  // <input type=checkbox
  render () {
    if (this.state.results) {
      return (
         <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
           <Header headerText={'Simple Search'} />
           <TextInput
             onChangeText={this.update} onSubmitEditing={this.handleSubmit}>
           </TextInput>
           <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[0]}>

           <InputContainer>
             <TextInput
               value={this.state.search}
               style={{height: 31, textAlign: 'center'}}
               placeholder='Search'
               onChangeText={(value) => this.setState({search: value})}
               onSubmitEditing={this.handleSubmit}
             />
           </InputContainer>
           <ModalDropdown options={['Amazon', 'Ebay', 'Craigslist', 'Lowest Price', 'Highest Prices']}/>

             <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />


           {this.state.results.map( (listing) => (
               <CardSection key={listing.url} style={{backgroundColor: '#f5f5f5'}}>
                 <TouchableOpacity
                    style={{flex: 1}}
                    key={listing.url}
                    onPress={() => Actions.item({listing}
                    )}>
                 <DisplayContainer>
                   <View style={styles.thumbnailContainerStyle} >
                     <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FF4500'}}>{(listing.url.match(/\w+?\.(.*?)(\.com|\.org)/)[1]).toUpperCase()}</Text>
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
          <ModalDropdown options={['Amazon', 'Ebay', 'Craigslist', 'Lowest Price', 'Highest Prices']}/>

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
    marginTop: 5,
    width: 200,
    height: 113,
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: 10
  },
  backButtonStyle: {
    backgroundColor: '#FF3500',
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
