import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex:1
  },
  header : {
    backgroundColor: '#336E7B',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#22313F'
  },
  headerText : {
    color: 'white',
    fontSize: 18,
    padding: 18,
  },
  scrollContainer : {
    flex: 1,
    marginBottom: 100
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput : {
    alignSelf : 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }
  ,
  addButton : {
    position: 'relative',
    alignSelf: 'flex-end',
    zIndex: 11,
    right: 10,
    bottom: 10,
    backgroundColor: '#22313F',
    width: 90,
    height: 90,
    borderRadius : 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation : 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }


})
