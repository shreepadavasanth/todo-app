import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';

const FabButtonComponent = props => {
    return (
        <TouchableOpacity onPress={props.onPressFab} style={Styles.fabStyle}>
            <Foundation name='clipboard-pencil' size={25} color='#fff' />
        </TouchableOpacity>
    )
}

export default FabButtonComponent
const Styles = StyleSheet.create({
fabStyle:{ 
    height: 65, 
    width: 65, 
    borderRadius: 65 / 2, 
    backgroundColor: '#505F79', 
    position: 'absolute', 
    bottom: 30, 
    right: 20, 
    elevation: 3, 
    alignItems: 'center', 
    justifyContent: 'center' 
}
})