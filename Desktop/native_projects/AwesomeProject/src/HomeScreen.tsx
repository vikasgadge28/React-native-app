import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TabNavigator from './TabNavigator'
import RestaurantsCards from './RestaurantsCards'


const HomeScreen = ({navigation}) => {
  return (
   <View>
   
     <View className=' p-4 pt-12 pb-6 bg-[#eceae3db]' >

       <Text className=' text-xl font-medium text-black'>Good Morning</Text>
       <Text className=' text-xl font-medium text-black'>Mr Joe!</Text>

   <View className=' bg-white shadow h-14 shadow-black rounded-xl pr-4 pl-2 mt-6 w-full flex flex-row items-center justify-between'>

           <View>
               <Image className=' w-[18px] h-[18px] ml-2'
                source={require('./icon/search-normal.png')}
                />
           </View>

         <View>
            <TextInput className=' w-72 text-lg ' 
             placeholder="Search"
             placeholderTextColor="#B5B5B5" />
         </View>

        <TouchableOpacity onPress={() =>
        navigation.navigate('Filters', {name: 'Jane'})} >
           <Image className=' w-[16px] h-[18px]'
            source={require('./icon/Vector.png')}
             />
         </TouchableOpacity>
   </View>
   
</View>
    
        <View className=' w-full h-full pl-4  bg-[#eceae3db]'>
             <TabNavigator/>
        </View>

   </View>
  )
}

export default HomeScreen;
