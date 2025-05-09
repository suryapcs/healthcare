import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './HomeScreen';
import Diagnostics from './Diagnostics';
import Doctor from './Doctor';
import Covid from './Covid';
import Medicals from './Medicals';
import Ambulance from './Ambulance';
import Nursing from './Nursing';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Diagnostics" component={Diagnostics}options={{ headerShown: false }} />
          <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }}/>
          <Stack.Screen name="Covid" component={Covid} options={{ headerShown: false }}/>
          <Stack.Screen name="Ambulance" component={Ambulance} options={{ headerShown: false }}/>
          <Stack.Screen name="Medicals" component={Medicals} options={{ headerShown: false }}/>
          <Stack.Screen name="Nursing" component={Nursing} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
