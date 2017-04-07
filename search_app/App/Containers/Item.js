import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, Alert, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'
import { Fonts, Colors, Metrics } from '../Themes/'

export default class Item extends React.Component {
  _onPressButton = () => {
    Alert.alert('This will link later!');
  };

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Simple Search'} />
        <View>
          <TouchableOpacity onPress={Actions.launchScreen}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
        </View>
        <Card>
          <CardSection>
            <DisplayContainer>
              <View style={styles.thumbnailContainerStyle}>
                <Image
                  style={styles.thumbnailStyle}

                  source={{
                    uri: 'https://images.craigslist.org/00P0P_uQe40trExX_600x450.jpg',
                  }}
                />
              </View>
              <DisplayTextContainer>
                <Text style={styles.storeTextStyle}>Amazon.com</Text>
                <Text>Apple iPhone 7</Text>
                <Text>$179.99</Text>
              </DisplayTextContainer>
            </DisplayContainer>
          </CardSection>
          <CardSection>
            <Text>
              Full description of the product goes here.  This is just some placeholder text until we get this all linked up to a database or figure out how to use local storage or persistant state.
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              If this is Craigslist, location information and date posted goes here.
            </Text>
          </CardSection>

          <ButtonContainer>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.button}>
                Buy Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.button}>
                Save
              </Text>
            </TouchableOpacity>
          </ButtonContainer>
        </Card>

      </View>

    );
  };
};

const Header = (props) => {
  const { headerTextStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
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
      {console.log(props)}
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

// const InputContainer = (props) => {
//   return (
//     <View style={styles.inputContainerStyle}>
//       {props.children}
//     </View>
//   );
// };

const ButtonContainer = (props) => {
  return (
    <View style={styles.buttonContainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#5294d6',
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
    borderWidth: 1,
    borderRadius: 2,
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
  },
  displayContainerStyle: {
    flexDirection: 'row',
  },
  displayTextContainerStyle: {
    marginRight: 5,
    fontSize: 20,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  // inputContainerStyle: {
  //   flex: 1,
  // },
  buttonContainerStyle: {
    flex: 1,
    marginTop: 5,
    // paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: null
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  storeTextStyle: {
    fontSize: 18,
  },
  // thumbnailStyle: {
  //   width: 150,
  //   height: 150,
  // },
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
  button: {
    height: 40,
    backgroundColor: '#5294d6',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  backButton: {
    height: 10,
    width: 34,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginTop: 30,
  }
};
