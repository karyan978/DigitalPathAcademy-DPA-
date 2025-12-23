import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Install: npx expo install expo-linear-gradient
import COLORS from '../../../constants/Color';

const Analytics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header with Gradient */}
        <LinearGradient
          colors={[COLORS.green, COLORS.primaryBlue]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View style={styles.brandContainer}>
              <Ionicons name="time" size={wp(5)} color="white" />
              <Text style={styles.brandText}>Digital Path</Text>
            </View>
            <View style={styles.headerIcons}>
              <Ionicons name="notifications" size={wp(6)} color="white" style={{ marginRight: wp(3) }} />
              <Image 
                source={{ uri: 'https://i.pravatar.cc/100' }} 
                style={styles.profileImg} 
              />
            </View>
          </View>
          <Text style={styles.headerTitle}>Analytics Overview</Text>
        </LinearGradient>

        {/* Weekly Revenue Card */}
        <View style={styles.revenueCard}>
          <Text style={styles.cardHeading}>Weekly Revenue</Text>
          <View style={styles.graphSection}>
            <View style={styles.chartIconContainer}>
               <Ionicons name="eye-outline" size={wp(6)} color={COLORS.primaryBlue} />
               <MaterialCommunityIcons name="trending-up" size={wp(25)} color={COLORS.green} style={styles.mainGraph} />
               <Ionicons name="people-outline" size={wp(6)} color={COLORS.purple} />
            </View>
            <Text style={styles.revenueSubText}>Sales are up by <Text style={{fontWeight: 'bold', color: COLORS.green}}>15%</Text> week</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.miniCard}>
            <Text style={styles.miniLabel}>Views</Text>
            <Text style={styles.miniValue}>2.5k</Text>
            <Text style={styles.miniSub}>240 Sales • $4,500</Text>
          </View>

          <View style={styles.miniCard}>
            <Text style={styles.miniLabel}>Enrolled</Text>
            <Text style={styles.miniValue}>850</Text>
            <Text style={styles.miniSub}>240 Sales • $4,500</Text>
          </View>
        </View>

        {/* Top Performing Courses */}
        <Text style={styles.sectionTitle}>Top Performing Courses</Text>
        
        {[1, 2, 3].map((item) => (
          <TouchableOpacity key={item} style={styles.courseItem}>
            <View style={styles.courseIconContainer}>
              <FontAwesome5 name="medal" size={wp(4)} color={COLORS.orange} />
            </View>
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>Full-Stack Web Dev</Text>
              <Text style={styles.courseDetail}>(120 Sales • $4,000)</Text>
            </View>
            <Ionicons name="chevron-forward" size={wp(5)} color={COLORS.textLight} />
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
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
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  profileImg: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    borderWidth: 2,
    borderColor: 'white',
  },
  headerTitle: {
    color: 'white',
    fontSize: wp(7),
    fontWeight: 'bold',
    marginTop: hp(2),
  },
  revenueCard: {
    backgroundColor: 'white',
    marginHorizontal: wp(5),
    marginTop: -hp(5),
    borderRadius: wp(5),
    padding: wp(4),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardHeading: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  graphSection: {
    alignItems: 'center',
    marginTop: hp(1),
  },
  chartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  mainGraph: {
    opacity: 0.8,
  },
  revenueSubText: {
    color: COLORS.textGray,
    fontSize: wp(3.5),
    marginTop: hp(1),
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },
  miniCard: {
    backgroundColor: 'white',
    width: wp(43),
    padding: wp(4),
    borderRadius: wp(4),
    alignItems: 'center',
    elevation: 2,
  },
  miniLabel: {
    color: COLORS.textGray,
    fontSize: wp(3.5),
  },
  miniValue: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginVertical: hp(0.5),
  },
  miniSub: {
    fontSize: wp(2.8),
    color: COLORS.textLight,
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginHorizontal: wp(5),
    marginTop: hp(4),
    marginBottom: hp(2),
  },
  courseItem: {
    backgroundColor: 'white',
    marginHorizontal: wp(5),
    marginBottom: hp(1.5),
    padding: wp(4),
    borderRadius: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  courseIconContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(3),
    backgroundColor: COLORS.lightBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseInfo: {
    flex: 1,
    marginLeft: wp(4),
  },
  courseName: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  courseDetail: {
    fontSize: wp(3.2),
    color: COLORS.textGray,
  },
});