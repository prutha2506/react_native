import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

import Lockpage from './Lockpage';
import { DetailScreen } from './DetailScreen';
import Winpage from './Winpage';
import Loss from './Loss';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Lockpage" component={Lockpage} />
        <Stack.Screen name="Winpage" component={Winpage} />
        <Stack.Screen name="Losspage" component={Loss} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App