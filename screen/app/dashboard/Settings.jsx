import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../../../constants/Color';

const Settings = () => {
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header with Gradient using your new COLORS */}
        <LinearGradient
          colors={[COLORS.green, COLORS.primaryBlue]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View style={styles.brandContainer}>
              <Ionicons name="time" size={wp(5)} color={COLORS.textWhite} />
              <Text style={styles.brandText}>Digital Path</Text>
            </View>
            <TouchableOpacity>
               <Ionicons name="notifications" size={wp(6)} color={COLORS.textWhite} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Admin Settings</Text>
        </LinearGradient>

        {/* Admin Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarBorder}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150' }} 
              style={styles.avatar} 
            />
          </View>
          <Text style={styles.adminName}>K.Aryan</Text>
          <Text style={styles.adminEmail}>karyan4537@gamil.com</Text>
        </View>

        {/* General Settings Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>General Settings</Text>

          {/* Edit Profile - Primary Blue Icon */}
          <TouchableOpacity style={styles.settingItem}>
            <View style={[styles.iconBox, { backgroundColor: COLORS.primaryBlue + '20' }]}>
              <Ionicons name="person" size={wp(5)} color={COLORS.primaryBlue} />
            </View>
            <Text style={styles.settingText}>Edit Profile</Text>
            <Ionicons name="chevron-forward" size={wp(5)} color={COLORS.textLight} />
          </TouchableOpacity>

          {/* Privacy & Security - Orange Icon */}
          <View style={styles.settingItem}>
            <View style={[styles.iconBox, { backgroundColor: COLORS.orange + '20' }]}>
              <Ionicons name="shield-checkmark" size={wp(5)} color={COLORS.orange} />
            </View>
            <Text style={styles.settingText}>Privacy & Security</Text>
            <Switch 
              value={privacyEnabled} 
              onValueChange={setPrivacyEnabled}
              trackColor={{ false: COLORS.borderLight, true: COLORS.green }}
              thumbColor={COLORS.backgroundWhite}
            />
          </View>

          {/* Help Center - Green Icon */}
          <TouchableOpacity style={styles.settingItem}>
            <View style={[styles.iconBox, { backgroundColor: COLORS.green + '20' }]}>
              <Ionicons name="help-buoy" size={wp(5)} color={COLORS.green} />
            </View>
            <Text style={styles.settingText}>Help Center</Text>
            <Ionicons name="chevron-forward" size={wp(5)} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>

        {/* Logout Button - Red Styling */}
        <TouchableOpacity style={styles.logoutBtn}>
          <View style={styles.logoutIconCircle}>
            <MaterialIcons name="logout" size={wp(5)} color="#FF4444" />
          </View>
          <Text style={styles.logoutText}>Logout from Admin Panel</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg, // Using your custom light background
  },
  scrollContent: {
    paddingBottom: hp(5),
  },
  header: {
    height: hp(22),
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    borderBottomLeftRadius: wp(8),
    borderBottomRightRadius: wp(8),
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    color: COLORS.textWhite,
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  headerTitle: {
    color: COLORS.textWhite,
    fontSize: wp(7),
    fontWeight: 'bold',
    marginTop: hp(2),
  },
  profileCard: {
    backgroundColor: COLORS.backgroundWhite,
    marginHorizontal: wp(5),
    marginTop: -hp(6),
    borderRadius: wp(5),
    padding: wp(6),
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  avatarBorder: {
    width: wp(24),
    height: wp(24),
    borderRadius: wp(12),
    borderWidth: 4,
    borderColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  avatar: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
  },
  adminName: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  adminEmail: {
    fontSize: wp(3.5),
    color: COLORS.textMedium, // Using your medium text color
    marginTop: hp(0.5),
  },
  sectionContainer: {
    marginTop: hp(3),
    paddingHorizontal: wp(5),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: hp(2),
  },
  settingItem: {
    backgroundColor: COLORS.backgroundWhite,
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(4),
    borderRadius: wp(4),
    marginBottom: hp(1.5),
    elevation: 1,
  },
  iconBox: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
  },
  settingText: {
    flex: 1,
    fontSize: wp(4),
    fontWeight: '500',
    color: COLORS.textDark,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(5),
    marginTop: hp(4),
    padding: wp(4),
    borderRadius: wp(4),
    borderWidth: 2,
    borderColor: '#FF4444',
    backgroundColor: '#FFF5F5',
  },
  logoutIconCircle: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: '#FF4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
  },
  logoutText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#FF4444',
  },
});