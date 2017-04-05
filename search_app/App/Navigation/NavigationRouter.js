import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import Search from '../Containers/Search'
import Item from '../Containers/Item'
import TrackedItems from '../Containers/TrackedItems'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
            <Scene key="search" component={Search} title='searchScreen'/>
            <Scene key="item" component={Item} title="singleItem" />
            <Scene key="trackedItems" component={TrackedItems} title="singleItem" />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
