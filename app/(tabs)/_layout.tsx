
import { StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { Tabs } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: styles.tabBarStyle
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'graisse corporelle'
        }}
      />

      <Tabs.Screen
        name="test"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="saveUser"
        options={{
          title: 'Users'
        }}
      />
      
      <Tabs.Screen
        name="galleryPage"
        options={{
          title: 'gallery'
        }}
      />

      <Tabs.Screen
        name="ImageFilterScreen"
        options={{
          title: 'ImageFilterScreen'
        }}
      />

      <Tabs.Screen
        name="SuiviGraphique"
        options={{
          title: 'SuiviGraphique'
        }}
      />
      
    </Tabs>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth:1,
    borderColor: '#727D73',
    height:60,
  },
  backGround: {
    
    borderRadius:10,
    padding:10,
    margin: 15,
  }
});