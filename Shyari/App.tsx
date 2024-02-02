import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home'
import Alone_shyari from './Alone_shyari'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alone_shyari" component={Alone_shyari} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}