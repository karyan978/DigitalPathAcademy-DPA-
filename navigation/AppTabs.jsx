import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screen/app/home/HomeScreen';
import ProfileScreen from '../screen/app/profile/ProfileScreen';
import CourcesScreen from '../screen/app/cources/CourseListScreen';
import CommunityFeed from '../screen/app/community/CommunityFeed';

const Tab = createBottomTabNavigator();

export default function AppTabs({ profileCompleted }) {
  return (
    <Tab.Navigator
      initialRouteName={profileCompleted ? 'Home' : 'Profile'}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#15673fff',
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cources') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cources" component={CourcesScreen} />
      <Tab.Screen name="Community" component={CommunityFeed} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
