import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, Alert, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

const ListItem = ({ item }) => {

const { title, price } = item;

const {
  thumbnailStyle,
  headerContentStyle,
  thumbnailContainerStyle,
  headerTextStyle,
  imageStyle
} = styles;

    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Simple Search'} />
        <Card>
          <CardSection>
            <DisplayContainer>
              <View style={styles.thumbnailContainerStyle}>
                <Image
                  style={styles.thumbnailStyle}
                  //source={{ uri: thumbnail_image }}
                  source={{
                    uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn  :ANd9GcTj5O6oWftXNLTQiZIwRUe4lrsoVn0CcJyhp9oX_ZYIJvKHOAEbu538ylvOihKZwfkzU  ZQgAKAo&usqp=CAE',
                  }}
                />
              </View>
              <DisplayTextContainer>
                <Text style={styles.storeTextStyle}>Amazon.com</Text>
                <Text>{title}</Text>
                <Text>{price}</Text>
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
        </Card>
      </View>
    );
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
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  storeTextStyle: {
    fontSize: 18,
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
  }
};
