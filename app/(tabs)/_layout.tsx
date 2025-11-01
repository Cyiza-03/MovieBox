import React from "react";
import { Image} from "expo-image";
import { Text } from "react-native"
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import {ImageBackground} from "expo-image";
import saved from "@/app/(tabs)/saved";

const  _layout = () => {
    return (
       <Tabs>
           <Tabs.Screen
           name = "index"
           options = {{
               title :'Home' ,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                   <>
                       <ImageBackground
                           source = { images.highlight }
                       >
                           <Image

                           />
                           <Text>Home</Text>
                       </ImageBackground>
                   </>
               )
           }}
           />
           <Tabs.Screen
               name = "saved"
               options = {{
                   title :'Saved' ,
                   headerShown: false,
                   tabBarIcon : ({ focused}) => (
                      <>
                      <ImageBackground
                      source = { images.highlight }
                      className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center
                       rounded-full overflow-hidden"/>
                      </>
                   )
               }}
           />
           <Tabs.Screen
               name = "profile"
               options = {{
                   title :'Profile' ,
                   headerShown: false,
               }}
           />
           <Tabs.Screen
               name = "search"
               options = {{
                   title :'Search' ,
                   headerShown: false,
               }}
           />


       </Tabs>
    )
}

export default _layout;