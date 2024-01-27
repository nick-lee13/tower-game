import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';

/***************
 *   SCREENS   *
 ***************/

/* LOGIN SCREEN x
 *  displays for unauthorized users. 
 *  user must log in, or choose anonymous.
 */

/* OFFLINE GAME
 *  user vs a friend on the same device 
 */

/******************************
 *   DECLARE AND RUN ROUTER   *
 ******************************/
const Stack = createStackNavigator();

const App = () => {
  StatusBar.setHidden(true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PlayOffline" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;