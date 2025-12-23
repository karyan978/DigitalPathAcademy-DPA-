import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import COLORS from '../../../constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.green, COLORS.darkGreen]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Ionicons name="menu-outline" size={hp('3%')} color="#fff" />

        <Text style={styles.headerTitle}>Courses</Text>

        <View style={styles.whiteCircle}>
          <EvilIcons name="user" size={hp('4.5%')} color={COLORS.darkGreen} />
        </View>
      </LinearGradient>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('5%') }}
        showsVerticalScrollIndicator={false}
      >

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.courcesContainer}
          contentContainerStyle={styles.coursesContent}
        >
          <TouchableOpacity style={styles.courcesBtn}>
            <Text>All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.courcesBtn}>
            <Text>Discussions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.courcesBtn}>
            <Text>Mentors</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.courcesBtn}>
            <Text>Trending</Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollWrapper}
          contentContainerStyle={{
            paddingHorizontal: wp('5%'),
            gap: wp('5%')
          }}>
          <View style={styles.courcesCard}>
            <Image
              source={require('../../../assets/courcesImage/2.jpg')}
              style={styles.courcesImage}
              resizeMode="contain"
            />
            <View style={styles.courcesInfo}>
              <Text style={styles.courseTitle}>Full Stack Developer</Text>
              <Text style={styles.courseSub}>Expert in MERN Stack</Text>
              <Text style={styles.courseTech}>React, Node.js, MongoDB</Text>
            </View>

          </View>

          <View style={styles.courcesCard}>
            <Image
              source={require('../../../assets/courcesImage/2.jpg')}
              style={styles.courcesImage}
              resizeMode="contain"
            />
            <View style={styles.courcesInfo}>
              <Text style={styles.courseTitle}>Full Stack Developer</Text>
              <Text style={styles.courseSub}>Expert in MERN Stack</Text>
              <Text style={styles.courseTech}>React, Node.js, MongoDB</Text>
            </View>

          </View>
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollWrapper}
          contentContainerStyle={{
            paddingHorizontal: wp('5%'),
            gap: wp('5%')
          }}>
          <View style={styles.courcesCard}>
            <Image
              source={require('../../../assets/courcesImage/2.jpg')}
              style={styles.courcesImage}
              resizeMode="contain"
            />
            <View style={styles.courcesInfo}>
              <Text style={styles.courseTitle}>Full Stack Developer</Text>
              <Text style={styles.courseSub}>Expert in MERN Stack</Text>
              <Text style={styles.courseTech}>React, Node.js, MongoDB</Text>
            </View>

          </View>

          <View style={styles.courcesCard}>
            <Image
              source={require('../../../assets/courcesImage/2.jpg')}
              style={styles.courcesImage}
              resizeMode="contain"
            />
            <View style={styles.courcesInfo}>
              <Text style={styles.courseTitle}>Full Stack Developer</Text>
              <Text style={styles.courseSub}>Expert in MERN Stack</Text>
              <Text style={styles.courseTech}>React, Node.js, MongoDB</Text>
            </View>

          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default CourseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite || '#fff',
  },
  header: {
    paddingHorizontal: wp('5%'),
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: RFValue(18),
    fontWeight: '600',
  },
  whiteCircle: {
    padding: wp('1%'),
    backgroundColor: '#fff',
    borderRadius: wp('50%'),
  },
  courcesContainer: {
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    elevation: 8,
  },
  courcesBtn: {
    backgroundColor: COLORS.backgroundWhite,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('3%'),
    elevation: 4,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    marginHorizontal: wp('2%'),
  },
  coursesContent: {
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  courcesImage: {
    width: wp('75%'),
    height: hp('19%'),
    borderRadius: wp('5%'),
  },
  horizontalScrollWrapper: {
    marginTop: hp('2%'),
    flexGrow: 0,
    paddingHorizontal: wp('5%'),
  },
  courcesCard: {
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: wp('5%'),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: wp('75%'),
    overflow: 'hidden',
    marginBottom: hp('2%'),
  },
  courcesInfo: {
    padding: wp('4%'),
  },
  courseTitle: {
    fontSize: RFValue(16),
    fontWeight: '600',
    marginTop: hp('1%'),
  },

  courseSub: {
    fontSize: RFValue(13),
    color: '#555',
    marginTop: hp('0.5%'),
  },

  courseTech: {
    fontSize: RFValue(12),
    color: '#777',
  },

});
