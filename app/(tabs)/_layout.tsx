import React from "react";
import { Image} from "expo-image";
import { Text } from "react-native"
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import {ImageBackground} from "expo-image";
import saved from "@/app/(tabs)/saved";
import { icons } from "@/constants/icons";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const TabIcon = ({ focused, icon, title} : any) => {

    if(focused){
        return (
        <ImageBackground
                source = { images.highlight }
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 
                justify-center items-center rounded-full overflow-hidden"
        >
            <Image source = {icons.home } tintColor= "#151312"  className="size-5" 
        />
        <Text className="text-secondary text-base 
            font-semibold ml-5">Home</Text>
        </ImageBackground>  
    )
    }

    return (
        <View>
            
        </View>
    )
    
     
}

const  _layout = () => {
    return (
       <Tabs>
           <Tabs.Screen
           name = "index"
           options = {{
               title :'Home' ,
               headerShown: false,
               tabBarIcon: ({ focused }) => (
                   <TabIcon
                        focused = {focused}
                        icon = {icons.home}
                        title = "Home"
                   />
               )
           }}
           />
           <Tabs.Screen
               name = "search"
               options = {{
                   title :'Search' ,
                   headerShown: false,
                   tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused = {focused}
                            icon = {icons.search}
                            title = "Search"

                        />
                   )
                    
                   }
               }
           />
           <Tabs.Screen
               name = "saved"
               options = {{
                   title :'Saved' ,
                   headerShown: false,
                   tabBarIcon : ({ focused}) => (
                        <TabIcon
                            focused = {focused}
                            icon = {icons.save}
                            title = "Saved"
                        />
                   )
               }}
           />
           <Tabs.Screen
               name = "profile"
               options = {{
                   title :'Profile' ,
                   headerShown: false,
                   tabBarIcon : ({ focused }) => (
                        <TabIcon
                            focused = {focused}
                            icon = {icons.person}
                            title = "Profile"
                        />
                   )
               }}
           />
           


       </Tabs>
    )
}

export default _layout;