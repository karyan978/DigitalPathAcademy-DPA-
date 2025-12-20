import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../../constants/Color';

const HomeScreen = () => {
  // Dummy data for Popular Courses
  const popularCourses = [
    { id: '1', title: 'Advanced Python Programming', instructor: 'Mantra. K, kinciales', sub: '16 dom natu Bau adanse tyest', price: '480 RI PH8', image: require('../../../assets/icons.png') },
    { id: '2', title: 'Relp it! React Hook!', instructor: 'Digital Path Academy', sub: 'Learn modern react development', price: 'Free', image: require('../../../assets/icons.png') },
  ];

  const renderCourseCard = ({ item }) => (
    <View style={styles.courseCard}>
      <View style={styles.courseImageContainer}>
        <Image source={item.image} style={styles.courseIcon} />
      </View>
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.instructorText}>{item.instructor}</Text>
        <Text style={styles.subText}>{item.sub}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <LinearGradient
        colors={[COLORS.lightBg || '#f0f0f0', COLORS.darkGreen || '#006400']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <Image source={require('../../../assets/icons.png')} style={styles.logo} />
          <TouchableOpacity>
            <Ionicons name="menu" size={hp('3.5%')} color={COLORS.textWhite} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp('12%') }}>
        
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Home</Text>
        </View>

        <LinearGradient
          colors={['#20B2AA', '#18A558']}
          style={styles.bannerCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Unlock Your{"\n"}Potential</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>New AI Course</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.activeFilter}>
            <Text style={styles.activeFilterText}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveFilter}>
            <Text style={styles.inactiveFilterText}>New Releases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveFilter}>
            <Text style={styles.inactiveFilterText}>Groups</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Courses</Text>
        </View>

        <FlatList
          data={popularCourses}
          keyExtractor={(item) => item.id}
          renderItem={renderCourseCard}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: wp('5%') }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  
  header: {
    paddingTop: hp('5%'),
    paddingBottom: hp('1.5%'),
    paddingHorizontal: wp('5%'),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { width: wp('40%'), height: hp('6%'), resizeMode: 'contain' },

  welcomeSection: { paddingHorizontal: wp('5%'), marginVertical: hp('2%') },
  welcomeTitle: { fontSize: RFValue(20), fontWeight: 'bold', color: COLORS.textDark },

  bannerCard: {
    marginHorizontal: wp('5%'),
    borderRadius: wp('6%'),
    height: hp('22%'),
    padding: wp('6%'),
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: RFValue(24),
    fontWeight: 'bold',
    color: COLORS.textWhite,
    lineHeight: hp('4%'),
  },
  bannerButton: {
    backgroundColor: COLORS.backgroundWhite,
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('3%'),
    alignSelf: 'flex-end',
    marginTop: -hp('2%'),
  },
  bannerButtonText: { color: COLORS.primaryBlue, fontWeight: 'bold', fontSize: RFValue(12) },

  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    marginVertical: hp('3%'),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  activeFilter: {
    backgroundColor: COLORS.backgroundWhite,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('6%'),
    borderRadius: wp('3%'),
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  activeFilterText: { color: COLORS.primaryBlue, fontWeight: 'bold', fontSize: RFValue(14) },
  inactiveFilterText: { color: COLORS.textGray, fontSize: RFValue(14) },

  sectionHeader: { paddingHorizontal: wp('5%'), marginBottom: hp('2%') },
  sectionTitle: { fontSize: RFValue(18), fontWeight: 'bold', color: COLORS.textDark },

  courseCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: wp('4%'),
    padding: wp('3%'),
    marginBottom: hp('2%'),
    elevation: 2,
  },
  courseImageContainer: {
    width: wp('22%'),
    height: wp('22%'),
    backgroundColor: '#EBF5FB',
    borderRadius: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseIcon: { width: '70%', height: '70%', resizeMode: 'contain' },
  courseInfo: { flex: 1, marginLeft: wp('4%') },
  courseTitle: { fontSize: RFValue(14), fontWeight: 'bold', color: COLORS.textDark },
  instructorText: { fontSize: RFValue(11), color: COLORS.textLight, marginTop: 2 },
  subText: { fontSize: RFValue(10), color: COLORS.textLight },
  priceText: { fontSize: RFValue(11), color: COLORS.textMedium, marginTop: 4 },

});