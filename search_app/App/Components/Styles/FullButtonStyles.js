import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 0,
    borderTopColor: Colors.fire,
    borderBottomColor: Colors.bloodOrange,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: Colors.coal
  },
  buttonText: {
    margin: 70,

    textAlign: 'center',
    color: '#FF4500',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
