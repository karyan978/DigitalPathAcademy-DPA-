import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import COLORS from '../../../constants/Color';
import { EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const completeProfile = async () => {
    try {
      // currentUser check for safety
      if (auth.currentUser) {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
          profileCompleted: true,
        });
        navigation.replace('Home');
      }
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('5%') }} 
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={[COLORS.lightBg || '#f0f0f0', COLORS.darkGreen || '#006400']}
          style={styles.headerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.contentCenter}>
            <Image
              source={require('../../../assets/icons.png')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.profileIconBox}>
            <View style={styles.whiteCircle}>
              <EvilIcons name="user" size={hp('4.5%')} color={COLORS.darkGreen} />
            </View>
          </View>
        </LinearGradient>

        <View style={styles.contentCenter}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* User Profile Avatar */}
        <View style={styles.contentCenter}>
          <View style={styles.profileIconContainer}>
            <EvilIcons name="user" size={hp('18%')} color={COLORS.darkGreen} />
          </View>
          <Text style={styles.name}>K.aryan</Text>
        </View>

        {/* Facilities Section */}
        <View style={styles.facilityContainer}>
          {/* Row 1 */}
          <View style={styles.facilityRow}>
            <View style={styles.itemBox}>
                <Ionicons name="school-outline" size={hp('3.5%')} color={COLORS.darkGreen} />
                <Text style={styles.facilityText}>My Courses</Text>
            </View>
            <View style={styles.itemBox}>
                <EvilIcons name="comment" size={hp('3.5%')} color={COLORS.darkGreen} />
                <Text style={styles.facilityText}>Comments</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.facilityRow}>
            <View style={styles.itemBox}>
                <MaterialCommunityIcons name="certificate" size={hp('3.5%')} color={COLORS.darkGreen} />
                <Text style={styles.facilityText}>Certificates</Text>
            </View>
            <View style={styles.itemBox}>
                <Ionicons name="settings-outline" size={hp('3.2%')} color={COLORS.darkGreen} />
                <Text style={styles.facilityText}>Settings</Text>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.facilityRow}>
            <View style={styles.itemBox}>
                <Ionicons name="log-in-outline" size={hp('3.5%')} color={COLORS.darkGreen} />
                <Text style={styles.facilityText}>Log Out</Text>
            </View>
            <View style={styles.itemBox}>
                <Ionicons name="help-circle-outline" size={hp('3.5%')} color={COLORS.darkGreen} />
                <Text style={styles.facilityText}>Help & Support</Text>
            </View>
          </View>
        </View>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.floatingButton} onPress={completeProfile}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.backgroundWhite || '#fff',
  },
  contentCenter: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  headerGradient: {
    paddingHorizontal: wp('5%'),
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  iconImage: {
    width: wp('35%'),
    height: hp('6%'),
    resizeMode: 'contain',
  },
  profileIconBox: {
    alignItems: 'center',
  },
  whiteCircle: {
    backgroundColor: '#fff',
    padding: wp('1%'),
    borderRadius: wp('10%'),
    elevation: 5,
  },
  title: {
    fontSize: RFValue(22),
    color: COLORS.textDark,
    fontWeight: 'bold',
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: hp('1.5%'),
    elevation: 3,
    width: wp('100%'),
    textAlign: 'center',
  },
  profileIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundLight,
    padding: wp('4%'),
    marginTop: hp('4%'),
    elevation: 5,
    borderRadius: wp('25%'), // Responsive Circle
    width: hp('22%'),
    height: hp('22%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
  },
  name: {
    fontSize: RFValue(20),
    color: COLORS.textDark,
    fontWeight: 'bold',
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  facilityContainer: {
    backgroundColor: COLORS.backgroundLight,
    marginHorizontal: wp('4%'),
    marginTop: hp('4%'),
    paddingVertical: hp('3%'),
    borderRadius: wp('4%'),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  facilityRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: hp('3%'),
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('40%'), // Fixed width for alignment
    paddingLeft: wp('2%'),
  },
  facilityText: {
    fontSize: RFValue(14),
    color: COLORS.textDark,
    fontWeight: '600',
    marginLeft: wp('2%'),
  },
  floatingButton: {
    backgroundColor: COLORS.tertiaryGreen || '#28a745',
    width: hp('8%'),
    height: hp('8%'),
    borderRadius: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: wp('8%'),
    marginTop: hp('2%'),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: RFValue(30),
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});