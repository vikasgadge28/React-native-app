import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import TabNavigator from './TabNavigator'

const Filters = () => {
  return (
    <View className=' w-full h-full bg-[#FFFFFF] '>
      <View className='pl-[20px]'>
      <View className='mt-[80px]'>
        <Text className=' font-[600] text-[18px] text-[#000000]'>Diet</Text>
        <View className=' flex-row ml-1  mt-[15px] '>
          <TouchableOpacity className='border p-3 rounded-3xl mr-[10px]'>
              <Text className='font-[500] text-[#122C3E] text-[13px]'>Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border p-3 rounded-3xl mr-[10px]'>
               <Text  className='font-[500] text-[#122C3E] text-[13px]'>Non-Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border p-3 rounded-3xl '>
              <Text  className='font-[500] text-[#122C3E] text-[13px]'>Vegan</Text>
          </TouchableOpacity>
        </View>
      </View>
   
      <View className='mt-[15px]'>
        <Text className='  font-[600] text-[18px] text-[#000000]'>Cuisines</Text>
        <View className=' flex-row ml-1  mt-[20px] '>
          <TouchableOpacity className='border p-3 rounded-3xl mr-[10px]'>
              <Text className='font-[500] text-[#122C3E] text-[13px]'>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border p-3 rounded-3xl mr-[10px]'>
               <Text  className='font-[500] text-[#122C3E] text-[13px]'>Mediterranean</Text>
          </TouchableOpacity>
         
        </View>
      </View>

      <View className='mt-[80px]'>
        <Text className='  font-[600] text-[18px] text-[#000000]'>Proteins</Text>
        <View className=' flex-row ml-1  mt-[15px] '>
          <TouchableOpacity className='border p-3 rounded-3xl mr-[10px]'>
              <Text className='font-[500] text-[#122C3E] text-[13px]'>Chicken</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border p-3 rounded-3xl mr-[10px]'>
               <Text  className='font-[500] text-[#122C3E] text-[13px]'>Beef</Text>
          </TouchableOpacity>
         
        </View>
      </View>
      </View>

      <View className=' flex-1 flex-row mt-48 border border-t-[0.3px] items-center   justify-around '>
        <View>
             <Text className=' text-[18px] text-[#000000] font-[600]'>Cancel</Text>
        </View>
        <TouchableOpacity className='border p-3 rounded-3xl h-[61px] w-[209px] bg-[#122C3E]  '>
               <Text  className=' flex text-center font-[400] mt-1 text-[18px] text-[#FFFFFF] '>Apply Filters</Text>
          </TouchableOpacity>
      </View>
  
  </View>
  )
}

export default Filters
