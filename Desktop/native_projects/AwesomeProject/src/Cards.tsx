import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Data } from './data'; // Import the Data array

const Cards = () => {
  return (
    <View>
      <FlatList
        data={Data} // Pass the Data array as the data source
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (    
  <View className=' relative object-cover bg-center w-[146px] mr-4 '>
    <View className=' relative '>
          <Image className=' h-[204px]  w-[146px]  rounded-xl'
              source={{uri: item.img,  }}/>
 
          <View  className=' h-[204px] w-[146px]  absolute bg-[#0f0d0d4d] rounded-xl  '></View>
        
           <View className= '  absolute  justify-end bottom-3  pl-2 h-[204px] w-full '>
                  <Text className=' text-[14px]  z-10 text-[#FFFFFF]  font-bold '>{item.name}</Text>
                  <Text className=' text-[8.32px]  mt-2 text-[#FFFFFF]  font-bold'>{item.diet} | {item.Cuisines} | Meat </Text>
           </View>
     </View>  
  </View>
     
        )}
      />
    </View>
  );
};

export default Cards;
