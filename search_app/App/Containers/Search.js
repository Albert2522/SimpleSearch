import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'

// Styles
import styles from './Styles/LaunchScreenStyles'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'


export default class Search extends React.Component {

  render () {
    return (
      <View>
        <TouchableOpacity style={stylesbtn.button} onPress={Actions.launchScreen}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <SearchBar
          onSearchChange={() => console.log('On Focus')}
          height={25}
          onFocus={() => console.log('On Focus')}
          onBlur={() => console.log('On Blur')}
          placeholder={'Find what you are looking for!'}
          autoCorrect={false}
          padding={5}
          returnKeyType={'search'}
        />
        <View style={styles.centered}>
          <Text>Here is Search Component</Text>
        </View>
      </View>
    )
  }
}
