import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/TabNavigator';
import HomeScreen from './src/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filters from './src/Filters';
import AllCards from './src/AllCards';

const Stack = createNativeStackNavigator();

function App() {
  return (
 <NavigationContainer >
   
   <Stack.Navigator initialRouteName="Home"
  
   >
       <Stack.Screen   name="Home" component={HomeScreen} options={{ headerShown: false }} />

       <Stack.Screen name="Filters" component={Filters}
        options={{ headerShadowVisible:true, }}/>

       <Stack.Screen  name="AllCards" component={AllCards}
       options={{
        title:'Satisfy your Cravings'
       }}
        />
   </Stack.Navigator>
  </NavigationContainer>
   
  );
}


export default App;