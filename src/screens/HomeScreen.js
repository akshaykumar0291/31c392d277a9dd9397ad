import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native'
import SpinnerView from '../component/SpinnerView';
import CustomButton from '../component/CustomButton';
import {getGetRandomAsteroidId} from '../utils/Api'

const HomeScreen = (props) => {

    const {navigation} = props;
    const [asteroidId, setAsteroidId] = useState('');
    const [showSpinner, setSpinner] = useState(false);

    const onTextChange = (text) => {
        setAsteroidId(text);
    }

    const submitClicked = () => {
        navigateToAsteroidDetails(asteroidId);
    }

    const navigateToAsteroidDetails = (asteroidId) => {
        navigation.navigate('Asteroid Details', {asteroidId : asteroidId})
    }

    const randomButtonClicked = async () => {
        setSpinner(true);
        const result = await getGetRandomAsteroidId();
        let object = result.near_earth_objects;
        let firstAsteroidId = object[0].id;
        setSpinner(false);
        navigateToAsteroidDetails(firstAsteroidId);
    }

    return(
        <View style = {styles.container}>

            <TextInput style={styles.textInputStyle} placeholder = "Enter Asteroid ID"
            value = {asteroidId}
            onChangeText = {(text) => {onTextChange(text)}}/>

            <CustomButton
            isDisable = {!asteroidId}
            title = "Submit"
            onSubmit = {submitClicked}/>

            <CustomButton
            isDisable = {false}
            title = "Random Asteroid"
            onSubmit = {randomButtonClicked}/>

            {showSpinner ? <SpinnerView/> : null}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        borderColor: '#ececec',
        borderWidth: 2,
        borderRadius: 10, 
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF'
    }
});

export default HomeScreen;