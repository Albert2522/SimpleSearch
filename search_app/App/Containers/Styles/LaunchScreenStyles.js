import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    padding: 0,
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'snow',
  },
  card: {
     borderColor: '#d6d7da'
  }
})
