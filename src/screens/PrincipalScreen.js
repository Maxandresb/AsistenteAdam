import { View, Text,Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GiftedChat } from 'react-native-gifted-chat'
import { dummyMessages } from "../constants";
export default function PrincipalScreen() {
  const [mensajes, setMensajes]= useState([])
  useEffect(()=> setMensajes(dummyMessages))
  return (
    <View className="flex-1 bg-green-100">
     <SafeAreaView className="flex-1 justify-center">
     <View className="flex-row justify-center">
      <Image 
      source={require('../../assets/images/iron-adam.png')}
      style={{height:hp(8), width:wp(12)}}
      />
      
     </View>
     <View><Text>Chat ADAM</Text></View>
     <View className="flex-1 flex-row justify-center">
      
      <View style={{height:hp(80), width:wp(90)}}  className= " bg-neutral-200 rounded-3xl p-4">
     <GiftedChat 
     messages={mensajes}
     />
     </View>
     </View>
     </SafeAreaView>
    </View>
  )
}


// axios instalado, navigation instalado, tailwindcss instalado
