import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import ChatScreen from '../screen/app/community/ChatScreen';
import { auth, db } from '../config/firebaseConfig';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';
import DashboardStack from './DashboardStack';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [user, setUser] = useState(null);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        try {
          const snap = await getDoc(doc(db, 'users', u.uid));
          setProfileCompleted(
            snap.exists() && snap.data()?.profileCompleted === true
          );
        } catch (error) {
          console.log('Firestore error:', error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <>
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            initialParams={{ profileCompleted }}
          />
          <Stack.Screen
            name="DashboardStack"
            component={DashboardStack}
          />

          <Stack.Screen 
            name="ChatScreen" 
            component={ChatScreen} 
            options={{ 
                animation: 'slide_from_right'
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
