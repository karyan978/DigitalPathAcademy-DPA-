import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screen/app/home/HomeScreen';
import ProfileScreen from '../screen/app/profile/ProfileScreen';
import CourcesScreen from '../screen/app/cources/CourseListScreen';
import CommunityFeed from '../screen/app/community/CommunityFeed';
const Tab = createBottomTabNavigator();

export default function AppTabs({ route }) {
  const profileCompleted = route?.params?.profileCompleted ?? false;

  return (
    <Tab.Navigator
      initialRouteName={profileCompleted ? 'Home' : 'Profile'}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === 'Home') icon = focused ? 'home' : 'home-outline';
          else if (route.name === 'Courses') icon = focused ? 'book' : 'book-outline';
          else if (route.name === 'Community') icon = focused ? 'people' : 'people-outline';
          else if (route.name === 'Profile') icon = focused ? 'person' : 'person-outline';

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CourcesScreen} />
      <Tab.Screen name="Community" component={CommunityFeed} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
