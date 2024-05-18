import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstpage from './Firstpage';
import Secondpage from './Secondpage';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="First-Page" component={Firstpage} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Second-Page" component={Secondpage} options={{ headerTitleAlign: 'center' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

