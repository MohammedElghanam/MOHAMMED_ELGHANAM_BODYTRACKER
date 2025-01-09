// import { Tabs } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
    // <Tabs
    //   screenOptions={{
    //     // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,

    //     tabBarStyle: styles.backGround
    //   }}
    //   >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Explore',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="portfolio"
    //     options={{
    //       title: 'portfolio',
    //       tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
    //     }}
    //   />
    // </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     backgroundColor: 'blue', 
//     height: 60, 
//   },
//   backGround: {
//     backgroundColor: 'yellow',
//     borderWidth:3,
//     borderRadius:10,
//     padding:10,
//     margin: 15,
//     borderColor: 'red'
//   }
// });

import { Tabs } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './index';
import ProfileScreen from './explore';
import TestScreen from './test';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Profile" component={ProfileScreen} />
    //     <Tab.Screen name="Test" component={TestScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>


    <Tabs
    screenOptions={{
      // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,

      tabBarStyle: styles.backGround
    }}
    >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home'
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore'
      }}
    />
    <Tabs.Screen
      name="portfolio"
      options={{
        title: 'portfolio'
      }}
    />
  </Tabs>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'blue', 
    height: 60, 
  },
  backGround: {
    backgroundColor: 'yellow',
    borderWidth:3,
    borderRadius:10,
    padding:10,
    margin: 15,
    borderColor: 'red'
  }
});