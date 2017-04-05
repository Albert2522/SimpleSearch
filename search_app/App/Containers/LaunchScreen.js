import React from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
import {Actions} from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {


  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
              <Button
                onPress={Actions.search}
                title="Search Component"
                color="#841584"
                accessibilityLabel="Should be search component"
                />
          </View>
          <View style={styles.section} >
            <Button
              onPress={Actions.item}
              title="Item Component"
              color="#841584"
              accessibilityLabel="Should be item component"
              />
          </View>
          <View style={styles.section} >
            <Button
              onPress={Actions.trackedItems}
              title="Tracked Items"
              color="#841584"
              accessibilityLabel="Should be item component"
              />
          </View>

        </ScrollView>
      </View>
    )
  }
}
