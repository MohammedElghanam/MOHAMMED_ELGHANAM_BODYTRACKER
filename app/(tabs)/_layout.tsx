
import { StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
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