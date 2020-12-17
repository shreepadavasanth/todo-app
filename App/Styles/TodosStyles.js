/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  dateTimePickerWrapper:{ 
    flexDirection: 'row' 
  },
  datePickerComp:{
    flex: 0.6, paddingVertical: 15, borderColor: '#B7DEEB', paddingHorizontal: 10,
    backgroundColor: '#EEF6F9',
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center'
  },
  timePickerComp:{
    flex: 0.4, paddingVertical: 15, borderColor: '#B7DEEB', paddingHorizontal: 10,
    backgroundColor: '#EEF6F9',
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center'
  },
  dateTimePickerLabel:{
    color: '#505F79',
    paddingLeft: 2,
    paddingBottom: 10,
    paddingTop: 25,
    fontSize: 16,
  },
  errorLabel:{
    color: '#ff0000',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
  },
  listHeaderWrapper:{ 
    flexDirection: 'row', 
    alignItems: 'center',
    borderColor:'#505F79',
    borderWidth:1,
    marginBottom:10,
    borderRadius:7,
    overflow:'hidden'
  },
  headerTabs:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical:10 
  },
  headerSeperator:{
    width:1,
    backgroundColor:'#505F79',
    height:40
  }
});
export default Styles;