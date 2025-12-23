import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashboard from '../screen/app/dashboard/MainDashboard';
import AddCourse from '../screen/app/dashboard/AddCource/AddCourseHome';
import Analytics from '../screen/app/dashboard/Analytics';
import Settings from '../screen/app/dashboard/Settings';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function DashboardStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2f95dc', // Active icon ka color
        tabBarInactiveTintColor: 'gray',   // Inactive icon ka color
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // 2. Logic: Har route ke liye alag icon set karein
          if (route.name === 'Dashboard') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'AddCourse') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={MainDashboard} />
      <Tab.Screen name="AddCourse" component={AddCourse} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
