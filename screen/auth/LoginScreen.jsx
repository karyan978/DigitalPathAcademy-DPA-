import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebaseConfig';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import COLORS from '../../constants/Color';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email & Password required');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const snap = await getDoc(doc(db, 'users', userCredential.user.uid));

      if (snap.exists() && snap.data().profileCompleted) {
        navigation.replace('Home');
      } else {
        navigation.replace('Profile');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.secondaryOrange} barStyle="light-content" />

      <View style={styles.header}>
        <Image source={require('../../assets/icons.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Welcome Back</Text>
        <Text style={styles.subTitle}>Login to continue</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={userLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Don’t have an account?{' '}
              <Text
                style={styles.footerLink}
                onPress={() => navigation.navigate('SignUp')}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.backgroundWhite },

  header: {
    height: hp('28%'),
    backgroundColor: COLORS.secondaryOrange,
    borderBottomLeftRadius: wp('12%'),
    borderBottomRightRadius: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: wp('45%'),
    height: hp('7%'),
    marginBottom: hp('1.5%'),
  },

  headerTitle: {
    fontSize: RFValue(22),
    color: COLORS.textWhite,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: RFValue(13),
    color: '#fff',
    marginTop: 4,
  },

  card: {
    marginTop: -hp('1%'),
    backgroundColor: '#fff',
    marginHorizontal: wp('6%'),
    borderRadius: wp('5%'),
    padding: wp('6%'),
    elevation: 6,
  },

  input: {
    height: hp('6.5%'),
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    fontSize: RFValue(14),
    backgroundColor: '#fafafa',
  },

  button: {
    backgroundColor: COLORS.secondaryOrange,
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
    marginTop: hp('1%'),
  },

  buttonText: {
    color: COLORS.textWhite,
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },

  footerText: {
    marginTop: hp('3%'),
    textAlign: 'center',
    fontSize: RFValue(13),
  },

  footerLink: {
    fontWeight: 'bold',
    color: COLORS.primaryBlue,
  },
});
