import React from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
import {Actions} from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'
import stylesbtn from '../Components/Styles/FullButtonStyles'

export default class LaunchScreen extends React.Component {


  render () {
    return (
      <View style={styles.mainContainer}>

        <Header headerText={'Simple Search'} />

        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <TouchableOpacity style={stylesbtn.button} onPress={Actions.search}>
              <Text style={stylesbtn.buttonText}>Search for Something</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section} >
              <TouchableOpacity style={stylesbtn.button} onPress={Actions.trackedItems}>
                <Text style={stylesbtn.buttonText}>Watched List</Text>
              </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    )
  }
}


const Header = (props) => {
  const { headerTextStyle, viewStyle } = styles1;

  return (
    <View style={viewStyle}>

      <Text style={headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles1 = {
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
    flexDirection: 'row',
    paddingBottom: 10,
  },
  displayTextContainerStyle: {
    marginRight: 5,
    fontSize: 20,
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
    width: 150,
    height: 150,
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    paddingLeft: '8%',
    paddingRight: '8%',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  backButtonStyle: {
    position: 'absolute',
    top: 25,
    left: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'white',
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
  },
};


// <View style={styles.section} >
//   <TouchableOpacity style={stylesbtn.button} onPress={Actions.item}>
//     <Text style={stylesbtn.buttonText}>Item Component</Text>
//   </TouchableOpacity>
//
// </View>
