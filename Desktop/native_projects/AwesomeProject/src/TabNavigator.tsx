import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RestaurantsCards from './RestaurantsCards';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();


const TabNavigator = () => {
  return (
  
    <Tab.Navigator 
    
    >
         <Tab.Screen name="Restaurants"  component ={RestaurantsCards} 
         options={{
          tabBarStyle:{ backgroundColor: '#eceae3db', elevation:0, },
          tabBarLabelStyle:{ fontWeight: '600', fontSize: 14}
          
        }}/>
        
         <Tab.Screen   options={{
          tabBarStyle:{ backgroundColor: '#eceae3db', elevation:0},
          tabBarLabelStyle:{ fontWeight: '600', fontSize: 14}
        }}
         name="Settings" component={SettingsScreen} />

   </Tab.Navigator>
     
  )
}

const SettingsScreen = () =>{
  return <View  className='h-full bg-[#eceae3db]  '>

    <View className=' bg-white rounded-xl h-60 '>
    
    </View>

  </View>
}


export default TabNavigator;
