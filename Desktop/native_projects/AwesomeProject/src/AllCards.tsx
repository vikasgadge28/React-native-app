import React, { JSXElementConstructor, ReactElement } from 'react'
import { FlatList, Image, ListRenderItemInfo, Text, View } from 'react-native'
import { Data } from './data'

const AllCards = () => {
  function renderItem(info: ListRenderItemInfo<{ id: string; name: string; Cuisines: string; diet: string; img: string }>): ReactElement<any, string | JSXElementConstructor<any>> | null {
    throw new Error('Function not implemented.')
  }

  return (
    <View className=' flex-1 '>
       <FlatList
        data={Data} // Pass the Data array as the data source
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
  <View className='flex-1  p-[20px] '>
     <View className=' relative object-cover bg-center w-[146px] '>
        <View className=' flex-1 relative'>
            <Image className=' h-[225px]  w-[161px] p-[20px] rounded-xl'
              source={{uri: item.img,  }}/>
             <View  className=' absolute h-[225px]  w-[161px]  bg-[#0f0d0d4d] rounded-xl  '></View>
             <View className= ' bottom-3 p-2 absolute  '>
                  <Text className=' text-[14px]  text-[#FFFFFF]  font-bold '>{item.name}</Text>
                  <Text className=' text-[8.32px]  text-[#FFFFFF]  font-bold'>{item.diet} | {item.Cuisines} | Meat </Text>
            </View>
            </View>
     </View>
  </View>
        )}
      />
    </View>
  )
}

export default AllCards
