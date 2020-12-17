import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const ButtonComponent = ({ label, onPressButton }) => {
    return(
        <TouchableOpacity onPress={onPressButton} style={Styles.buttonWrapper}>
        <Text style={Styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
    )
    
}

export default ButtonComponent

const Styles = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#505F79',
        marginHorizontal: 80
    },
    labelStyle: {
        fontWeight: 'bold',
        color: 'white'
    }
})