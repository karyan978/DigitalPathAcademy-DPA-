import {StyleSheet,Text,View,TouchableOpacity,StatusBar,Image,Dimensions,} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../constants/Color';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');

const WelcomeScreen = () => {

  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.backgroundWhite} />
      
      <View style={styles.logoContainer}>
        
        <Image
          source={require('../../assets/favicon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Unlock Your Digital Potential</Text>
        <Text style={styles.subtitle}>
          Master computer courses for any career path
        </Text>


        <Image
          source={require('../../assets/loginscreen.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

   
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>I already have an account</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our 
          <Text style={styles.termsLink}> Terms & Conditions</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
    paddingHorizontal: RFValue(25),
    justifyContent: 'space-between', 
  },
  
  logoContainer: {
    paddingTop: RFValue(40),
    alignItems: 'center',
  },
  logo: {
    width: 60, 
    height: 60, 
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: RFValue(20),
  },
  title: {
    fontSize: RFValue(28),
    fontWeight: 'bold',
    color: COLORS.textDark,
    textAlign: 'center',
    marginBottom: RFValue(5),
    maxWidth: width * 0.7,
    lineHeight: RFValue(35),
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textMedium,
    textAlign: 'center',
    marginBottom: RFValue(40),
    maxWidth: width * 0.8,
  },
  illustration: {
    width: width * 0.9,
    height: width * 0.6,
    marginBottom: RFValue(40),
  },

  buttonContainer: {
    paddingBottom: RFValue(40),
    width: '100%',
  },
  getStartedButton: {
    backgroundColor: COLORS.primaryGreen || '#0E8043',
    paddingVertical: RFValue(18),
    borderRadius: RFValue(30), 
    alignItems: 'center',
    marginBottom: RFValue(15),
  },
  getStartedButtonText: {
    color: COLORS.textWhite,
    fontSize: RFValue(18),
    fontWeight: RFValue(700),
  },
  loginButton: {
    backgroundColor: COLORS.backgroundWhite,
    paddingVertical: RFValue(18),
    borderRadius: RFValue(30), 
    alignItems: 'center',
    marginBottom: RFValue(15),
    borderWidth: RFValue(1),
    borderColor: COLORS.textLight,
  },
  loginButtonText: {
    color: COLORS.textDark,
    fontSize: RFValue(18),
    fontWeight: RFValue(700),
  },

  termsText: {
    fontSize: RFValue(12),
    color: COLORS.textMedium,
    textAlign: 'center',
    marginTop: RFValue(10),
  },
  termsLink: {
    color: COLORS.textDark,
    fontWeight: RFValue(600),
  },
});