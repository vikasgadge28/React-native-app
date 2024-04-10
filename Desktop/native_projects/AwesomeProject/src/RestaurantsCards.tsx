import React from "react"
import { Button, Text, TouchableOpacity, View } from "react-native"
import Cards from "./Cards"
import Filters from "./Filters"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Data } from "./data"

const RestaurantsCards = ({navigation}) => {
    return (
    <View className='h-full bg-[#eceae3db] '>
       <View className=' bg-[#FFFFFF] rounded-xl h-[291px] pl-[20px] '>
      
          <View className='flex flex-row justify-between'>
             <View>
                 <Text className=' text-[#122C3E] font-[600] mt-[17px] text-[16px]'>Satisfy your cravings</Text>
                 <Text className='text-[#122C3E] font-[500] text-[10px]'>Restaurants that suits to your palate</Text>
             </View>
          
           <TouchableOpacity onPress={() =>
        navigation.navigate('AllCards', {name: 'Jane'})} >
          <View>
                 <Text className=' text-[13px]  font-[600] text-[#122C3E] mt-[26px] mr-10 '>View All</Text>
           </View>
         </TouchableOpacity>
         </View>

        
         <View className=' mt-4 '>
           <Cards />
         </View>
          
        </View>
    </View>
    )
  }
  
  export default RestaurantsCards;