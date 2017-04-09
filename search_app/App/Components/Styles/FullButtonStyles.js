import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 0,
    borderTopColor: Colors.fire,
    borderBottomColor: Colors.bloodOrange,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: Colors.coal
  },
  buttonText: {
    margin: 70,
    fontSize: 26,
    textAlign: 'center',
    color: '#FF4500',

    fontFamily: Fonts.type.bold
  }
})
