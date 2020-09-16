import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

const CustomButton = (props) => {
    const {isDisable, title, onSubmit} = props;
    return(
        <View style = {styles.container}>
            <TouchableHighlight
            style = {[styles.button, {backgroundColor : isDisable ? '#ececec' : 'orange'}]}
            disabled = {isDisable}
            onPress = {onSubmit}>
                <Text
            style = {[styles.button, {color : isDisable ? '#000000' : '#FFFFFF'}]}
                >{title}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
         width: '100%',
         height: 40,
         marginTop: 10,
         borderRadius: 10,
         justifyContent: 'center',
         paddingHorizontal: 20
    },
    textStyle:{
        fontSize : 14,
        fontWeight: 'bold'
    }
})

export default CustomButton;