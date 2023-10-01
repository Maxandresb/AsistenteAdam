import { View, Text,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GiftedChat } from 'react-native-gifted-chat'
import { dummyMessages } from "../constants";
export default function PrincipalScreen() {
  const [mensajes, setMensajes]= useState([])
  const [cargando, setCargando] =useState(false)
  const [hablando, setHablando] =useState(false)
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
      
      <View style={{height:hp(80), width:wp(90)}}  className= " bg-blue-100 rounded-3xl p-4">
     <GiftedChat 
     messages={mensajes}
     renderUsernameOnMessage={false}
     />
     </View>
      {/* recording, clear and stop buttons */}
      
     </View>
     <View className="flex justify-center items-center">
          {
            cargando? (
              <Image 
                source={require('../../assets/images/loading.gif')}
                style={{width: hp(10), height: hp(10)}}
              />
            ):
              hablando ? (
                <TouchableOpacity className="space-y-2">
                  {/* recording stop button */}
                  <Image 
                    className="rounded-full" 
                    source={require('../../assets/images/voiceLoading.gif')}
                    style={{width: hp(10), height: hp(10)}}
                  />
                </TouchableOpacity>
                
              ) : (
                <TouchableOpacity >
                  {/* recording start button */}
                  <Image 
                    className="rounded-full" 
                    source={require('../../assets/images/recordingIcon.png')}
                    style={{width: hp(10), height: hp(10)}}
                  />
                </TouchableOpacity>
              )
          }
          {
            mensajes.length>0 && (
              <TouchableOpacity 
               // onPress={clear} 
                className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
              >
                <Text className="text-white font-semibold">Clear</Text>
              </TouchableOpacity>
            )
          }
          {/* {
            speaking && (
              <TouchableOpacity 
                //onPress={stopSpeaking} 
                className="bg-red-400 rounded-3xl p-2 absolute left-10"
              >
                <Text className="text-white font-semibold">Stop</Text>
              </TouchableOpacity>
            )
          } */}
            
            
          
        </View>
     </SafeAreaView>
    </View>
  )
}


// axios instalado, navigation instalado, tailwindcss instalado
