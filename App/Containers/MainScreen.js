import React, { Component } from 'react'
import { View, ScrollView, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  static navigationOptions = function(props) {
    return {
      title: 'Characters',
      headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
    }
  };
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Characters</Text>
        </View>
        <View style={styles.scrollContainer}>

        </View>
        {/* <View style={styles.footer}>
          <Text
            style={styles.textInput}> 
          </Text>
        </View> */}

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
