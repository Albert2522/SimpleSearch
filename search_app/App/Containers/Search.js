import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Search extends React.Component {

  render () {
    return (
      <View>
        <SearchBar
          onSearchChange={() => console.log('On Focus')}
          height={25}
          onFocus={() => console.log('On Focus')}
          onBlur={() => console.log('On Blur')}
          placeholder={'Find what you are looking for!'}
          autoCorrect={false}
          padding={2}
          returnKeyType={'search'}
        />
        <View style={styles.centered}>
          <Text>Here is Search Component</Text>
          <Button
            onPress={Actions.launchScreen}
            title="Back"
            color="#841584"
            accessibilityLabel="Should be item component"
            />
        </View>
      </View>
    )
  }
}
