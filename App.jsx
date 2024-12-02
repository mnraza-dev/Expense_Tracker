import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import AddExpenses from './screens/AddExpenses';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddExpenses' component={AddExpenses} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})