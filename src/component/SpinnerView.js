import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const SpinnerView = () => {
    return(
        <View style= {styles.container}>
            <ActivityIndicator size = 'large' color = 'blue'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SpinnerView;