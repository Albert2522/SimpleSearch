import React, { Component } from 'react'
import { Text, Image, View, Button, Alert, TouchableOpacity, TextInput, Linking, ScrollView } from 'react-native'
import {Actions} from 'react-native-router-flux'
// import stylesbtn from '../Components/Styles/RoundedButtonStyles'
// import { Fonts, Colors, Metrics } from '../Themes/'
export default class Item extends Component {
  _onPressButton = () => {
    Alert.alert('This will link later!');
  };

constructor(props){
  super(props);
}
// alert(this.props);

render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
        <Header headerText={'Simple Search'} />

        <ScrollView style={{ flex: 1 }}>
        <Card>
          <CardSection>
            <SearchResultHeader>
              <Text style={{fontSize: 18, color: '#031eff'}}>searchType</Text>
              <Text style={{fontSize: 20, color: '#03af1f', fontWeight: 'bold'}}>{this.props.price}</Text>
            </SearchResultHeader>
          </CardSection>
          <CardSection>
            <DisplayContainer>
              <View style={styles.thumbnailContainerStyle}>
                <Text style={{fontSize: 18}}>{this.props.title}</Text>
                <Image
                  style={styles.thumbnailStyle}
                  source={{uri: this.props.image}}
                />
              </View>
            </DisplayContainer>
          </CardSection>
          <CardSection style={{backgroundColor: '#f5f5f5'}}>
            <Text>description</Text>
          </CardSection>
          <CardSection style={{backgroundColor: '#f5f5f5'}}>
            <Text>Location: {this.props.location}</Text>
            <Text>Date Posted: {this.props.date}</Text>
          </CardSection>
        </Card>

        </ScrollView>
        <View>
          <ButtonContainer>
            <TouchableOpacity onPress={() => {Linking.openURL(this.props.url)}}>
              <Text style={styles.buttonText}>
                Buy Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.buttonText}>
                Save
              </Text>
            </TouchableOpacity>
          </ButtonContainer>
        </View>
      </View>
    );
  }
}

const Header = (props) => {
  const { headerTextStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity style={styles.backButtonStyle} onPress={() => Actions.pop()}>
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

const SearchResultHeader = (props) => {
  return (
    <View style={styles.searchResultHeaderStyle}>
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

const ButtonContainer = (props) => {
  return (
    <View style={styles.buttonContainerStyle}>
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
    marginBottom: 10,
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
    backgroundColor: '#fbfbfb',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  searchResultHeaderStyle: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
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
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#FF4500',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    marginTop: 5,
    width: 335,
    height: 188,
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingLeft: '8%',
    paddingRight: '8%',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  backButtonStyle: {
    backgroundColor: '#FF3400',
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
