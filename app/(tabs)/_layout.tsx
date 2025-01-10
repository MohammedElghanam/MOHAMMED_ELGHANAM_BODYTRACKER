
import { StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { Tabs } from 'expo-router';

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
          title: 'Home'
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
          title: 'Camera'
        }}
      />

      <Tabs.Screen
        name="saveUser"
        options={{
          title: 'Users'
        }}
      />

      <Tabs.Screen
        name="cameraPage"
        options={{
          title: 'cameraPage'
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