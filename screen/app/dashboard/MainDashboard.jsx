import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../../constants/Color';

const MainDashboard = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                style={styles.brandName}
                source={require('../../../assets/icons.png')}
              />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Welcome, K.Aryan!</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={wp(6)} color="white" />
            </TouchableOpacity>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.profileImg}
            />
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: '#E0F7F1' }]}>
            <Text style={styles.statLabel}>Total Students</Text>
            <Text style={styles.statValue}>1,250</Text>
            <Ionicons name="trending-up" size={wp(8)} color={COLORS.green} style={styles.statIcon} />
          </View>

          <View style={[styles.statCard, { backgroundColor: '#F0FFF4' }]}>
            <Text style={styles.statLabel}>Active Courses</Text>
            <Text style={styles.statValue}>18</Text>
            <Ionicons name="book-outline" size={wp(8)} color={COLORS.darkGreen} style={styles.statIcon} />
          </View>

          <View style={styles.revenueCard}>
            <View>
              <Text style={styles.statLabel}>Total Revenue</Text>
              <Text style={styles.statValue}>$45,300</Text>
            </View>
            <MaterialCommunityIcons name="sack" size={wp(10)} color={COLORS.green} />
          </View>
        </View>

        {/* Recent Activity Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity><Text style={{ color: COLORS.green }}>See All</Text></TouchableOpacity>
        </View>

        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.activityCard}>
            <Image source={{ uri: `https://i.pravatar.cc/150?u=${item}` }} style={styles.userAvatar} />
            <View style={styles.activityInfo}>
              <Text style={styles.userName}>User Name {item}</Text>
              <Text style={styles.userAction}>Enrolled in Python Course</Text>
            </View>
            <Ionicons name="chevron-forward" size={wp(5)} color={COLORS.textGray} />
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default MainDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  header: {
    backgroundColor: COLORS.green,
    height: hp(22),
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandName: {
    width: wp(30),
    height: hp(8),
    resizeMode: 'contain',
  },
  welcomeText: {
    color: 'white',
    fontSize: wp(6.5),
    fontWeight: 'bold',
    marginTop: hp(0.5),
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    marginLeft: wp(3),
    borderWidth: 2,
    borderColor: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: -hp(5),
  },
  statCard: {
    width: wp(43),
    height: hp(18),
    borderRadius: wp(5),
    padding: wp(4),
    marginBottom: hp(2),
    elevation: 3,
    justifyContent: 'center',
  },
  revenueCard: {
    width: wp(90),
    backgroundColor: 'white',
    borderRadius: wp(5),
    padding: wp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    marginBottom: hp(3),
  },
  statLabel: {
    fontSize: wp(3.5),
    color: COLORS.textGray,
  },
  statValue: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginTop: hp(1),
  },
  statIcon: {
    position: 'absolute',
    bottom: wp(3),
    right: wp(3),
    opacity: 0.6,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: hp(2),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  activityCard: {
    backgroundColor: 'white',
    marginHorizontal: wp(5),
    marginBottom: hp(1.5),
    padding: wp(4),
    borderRadius: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  userAvatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
  },
  activityInfo: {
    flex: 1,
    marginLeft: wp(4),
  },
  userName: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  userAction: {
    fontSize: wp(3.2),
    color: COLORS.textGray,
  },
});