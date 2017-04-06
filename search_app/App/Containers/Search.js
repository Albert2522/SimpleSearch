import React, { Component, PropTypes } from 'react'
import { ScrollView, Text, Image, View, Button, TouchableOpacity, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'
import SearchBar from 'react-native-material-design-searchbar'

// Styles
import styles from './Styles/LaunchScreenStyles'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'
import { Select, SelectTextBox, Option, OptionList } from 'react-native-multi-select'



export default class Search extends React.Component {

  cities = [
      'Babolsar',
      'Sari',
      'Babol',
      'Qaemshahr',
      'Gorgan',
      'Tehran',
      'ali abad',
      'gonbad',
      'mashhad',
      'esfehan',
      'shiraz',
      'kerman',
      'ilam',
      'sanandaj',
      'mahshahr',
      'behshar',
      'tonekabon'
  ];

  state = {
      selectedItem: [],
      text: "",
      displayOptionList: false
  };

  updateText = text => {
      this.setState({text});
  };

  addItem = item => {
      this.setState({selectedItem: [...this.state.selectedItem, item]})
  };

  removeItem = removedItem => {
      this.setState({
          selectedItem: this.state.selectedItem.filter(item => {
              if (item._id !== removedItem._id)
                  return item;
          })
      });
  };

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

        <Select style={styles.select}>
            <SelectTextBox
                selectedItem={this.state.selectedItem}
                placeholder={"شهر خود را انتخاب کنید."}
                onPressOut={(removedItem) => this.setState({
                    selectedItem: this.state.selectedItem.filter(text => {
                        if (text !== removedItem)
                            return text;
                    })
                })}
                onTextInputFocus={() => this.setState({displayOptionList: true})}
                onTextInputLoosFocus={() => this.setState({displayOptionList: false})}
                onSelectTextBoxChanged={event => this.updateText(event.nativeEvent.text)}
            />
            <OptionList
                text={this.state.text}
                items={this.cities}
                display={this.state.displayOptionList}
                onAnItemSelected={item => this.addItem(item)}
                removeItem={item => this.removeItem(item)}>
                {this.cities.map((city, index) => <Option
                    onPress={item => this.setState({selectedItem: [...this.state.selectedItem, item]})}
                    key={index}
                    value={{_id: Math.random()}}>
                    {city}
                </Option>)}
            </OptionList>
        </Select>
        <View style={styles.centered}>
          <Text>Here is Search Component</Text>
        </View>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//     select: {
//         backgroundColor: '#6A85B1',
//         width: 300,
//     }
// });
