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

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebaseConfig';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import COLORS from '../../constants/Color';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields required');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        email,
        profileCompleted: false,
        createdAt: Date.now(),
      });

      navigation.replace('Profile');
    } catch (error) {
      Alert.alert('Signup Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.secondaryOrange} barStyle="light-content" />

      <View style={styles.header}>
        <Image source={require('../../assets/icons.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.subTitle}>Sign up to get started</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={createUser}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.footerLink} onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

/* SAME styles as LoginScreen */
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
  logo: { width: wp('45%'), height: hp('7%'), marginBottom: hp('1.5%') },
  headerTitle: { fontSize: RFValue(22), color: COLORS.textWhite, fontWeight: 'bold' },
  subTitle: { fontSize: RFValue(13), color: '#fff', marginTop: 4 },
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
  },
  buttonText: { color: COLORS.textWhite, fontSize: RFValue(16), fontWeight: 'bold' },
  footerText: { marginTop: hp('3%'), textAlign: 'center', fontSize: RFValue(13) },
  footerLink: { fontWeight: 'bold', color: COLORS.primaryBlue },
});
