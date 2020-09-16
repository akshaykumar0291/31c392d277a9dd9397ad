import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AsteroidDetails from './src/screens/AsteroidDetails';

const Stack = createStackNavigator();

const RouteNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'Asteroid Details' component = {AsteroidDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouteNavigation;