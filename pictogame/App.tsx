import React from 'react'
import { View } from 'react-native'
import { Gamepage } from './gamepage';
import { Home } from './home'; 
import Gamelevels from './levelpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack'; import { Winpage } from './winpage'; 
import Loss from './loss';
    const Stack = createNativeStackNavigator();
function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator> 
                    <Stack.Screen name='home' component={Home}></Stack.Screen> 

                    <Stack.Screen name='game' component={Gamepage}></Stack.Screen>
                    <Stack.Screen name="Level" component={Gamelevels} />


                    <Stack.Screen name='win' component={Winpage} ></Stack.Screen>
                     <Stack.Screen name="loss" component={Loss} />

                </Stack.Navigator> 
                </NavigationContainer>
            {/*<Home></Home>
<Pictoword></Pictoword> <Level></Level> */}
            {/* <Winpage></Winpage> */}
        </>
    )
}
export default App;