import React from 'react'
import { ScrollView, Text, Image, View, ListView, StyleSheet, Button, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

// Styles
import styles from './Styles/LaunchScreenStyles'
import stylesbtn from '../Components/Styles/RoundedButtonStyles'
import Row from './Row'
import SectionHeader from './SectionHeader'
import demoData from './data'
import Header from './Header'
import SearchBar from 'react-native-material-design-searchbar'

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});


export default class TrackedItems extends React.Component {

  constructor(props) {
    super(props)

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    }
  }

  formatData(data) {
    // We're sorting by alphabetically so we need the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a letter in the alphabet so we loop over the alphabet
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      // Get the character we're currently looking for
      const currentChar = alphabet[sectionId];

      // Get users whose first name starts with the current letter
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

      // If there are any users who have a first name starting with the current letter then we'll
      // add a new section otherwise we just skip over it
      if (users.length > 0) {
        // Add a section id to our array so the listview knows that we've got a new section
        sectionIds.push(sectionId);

        // Store any data we would want to display in the section header. In our case we want to show
        // the current character
        dataBlob[sectionId] = { character: currentChar };

        // Setup a new array that we can store the row ids for this section
        rowIds.push([]);

        // Loop over the valid users for this section
        for (let i = 0; i < users.length; i++) {
          // Create a unique row id for the data blob that the listview can use for reference
          const rowId = `${sectionId}:${i}`;

          // Push the row id to the row ids array. This is what listview will reference to pull
          // data from our data blob
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for this row
          dataBlob[rowId] = users[i];
        }
      }
    }

    return { dataBlob, sectionIds, rowIds };
  }

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


        <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}


      />


      </View>
    )
  }
}

// renderHeader={() => <Header />}   search bar
// renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}   Letter seperator like phone book







// import React, {Component, PropTypes} from 'react';
// import {
//     View,
//     Text,
//     StyleSheet
// } from 'react-native';
// import { Select, SelectTextBox, Option, OptionList } from 'react-native-multi-select';
//
//
// export default class LocationDropDown extends Component {
//     static propTypes = {};
//
//     cities = [
//         'Babolsar',
//         'Sari',
//         'Babol',
//         'Qaemshahr',
//         'Gorgan',
//         'Tehran',
//         'ali abad',
//         'gonbad',
//         'mashhad',
//         'esfehan',
//         'shiraz',
//         'kerman',
//         'ilam',
//         'sanandaj',
//         'mahshahr',
//         'behshar',
//         'tonekabon'
//     ];
//
//     state = {
//         selectedItem: [],
//         text: "",
//         displayOptionList: false
//     };
//
//     updateText = text => {
//         this.setState({text});
//     };
//
//     addItem = item => {
//         this.setState({selectedItem: [...this.state.selectedItem, item]})
//     };
//
//     removeItem = removedItem => {
//         this.setState({
//             selectedItem: this.state.selectedItem.filter(item => {
//                 if (item._id !== removedItem._id)
//                     return item;
//             })
//         });
//     };
//
//     render() {
//         return (
//             <Select style={styles.select}>
//                 <SelectTextBox
//                     selectedItem={this.state.selectedItem}
//                     placeholder={"شهر خود را انتخاب کنید."}
//                     onPressOut={(removedItem) => this.setState({
//                         selectedItem: this.state.selectedItem.filter(text => {
//                             if (text !== removedItem)
//                                 return text;
//                         })
//                     })}
//                     onTextInputFocus={() => this.setState({displayOptionList: true})}
//                     onTextInputLoosFocus={() => this.setState({displayOptionList: false})}
//                     onSelectTextBoxChanged={event => this.updateText(event.nativeEvent.text)}
//                 />
//                 <OptionList
//                     text={this.state.text}
//                     items={this.cities}
//                     display={this.state.displayOptionList}
//                     onAnItemSelected={item => this.addItem(item)}
//                     removeItem={item => this.removeItem(item)}>
//                     {this.cities.map((city, index) => <Option
//                         onPress={item => this.setState({selectedItem: [...this.state.selectedItem, item]})}
//                         key={index}
//                         value={{_id: Math.random()}}>
//                         {city}
//                     </Option>)}
//                 </OptionList>
//             </Select>
//         );
//     }
// }
//  
// const styles = StyleSheet.create({
//     select: {
//         backgroundColor: '#6A85B1',
//         width: 300,
//     }
// });
//
