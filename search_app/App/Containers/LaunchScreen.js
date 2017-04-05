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
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <TouchableOpacity style={stylesbtn.button} onPress={Actions.search}>
              <Text style={stylesbtn.buttonText}>Search for Something</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section} >
            <TouchableOpacity style={stylesbtn.button} onPress={Actions.item}>
              <Text style={stylesbtn.buttonText}>Item Component</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.section} >
              <TouchableOpacity style={stylesbtn.button} onPress={Actions.trackedItems}>
                <Text style={stylesbtn.buttonText}>Tracked Items Component</Text>
              </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    )
  }
}
