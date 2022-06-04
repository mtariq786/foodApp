import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';

import { useFonts } from 'expo-font';
import Details from './components/Details';


const Stack = createNativeStackNavigator();

function App() {

  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
         options={{
           headerShown:false
         }} />

        <Stack.Screen name="Details" component={Details}
          options={{
            headerShown:false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;