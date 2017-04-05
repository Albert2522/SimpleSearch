import React from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import {Actions} from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Search extends React.Component {

  render () {
    return (
      <View style={styles.centered}>
        <Text>Here is Search Component</Text>
        <Button
          onPress={Actions.launchScreen}
          title="Back"
          color="#841584"
          accessibilityLabel="Should be item component"
          />
      </View>
    )
  }
}
