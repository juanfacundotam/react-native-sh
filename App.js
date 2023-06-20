import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { ProfileScreen } from './components/ProfileScreen/ProfileScreen';
import { ExtraScreen } from './components/ExtraScreen/ExtraScreen';
const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ fromChild: 'Facundo' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Extra" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;