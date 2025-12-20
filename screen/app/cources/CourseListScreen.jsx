import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../../../constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('5%') }}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={[COLORS.green, COLORS.darkGreen]}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Ionicons name="menu-outline" size={hp('4%')} color="#fff" />

          <Text style={styles.headerTitle}>Courses</Text>

          <View style={styles.whiteCircle}>
            <EvilIcons name="user" size={hp('4.5%')} color={COLORS.darkGreen} />
          </View>
        </LinearGradient>

        <ScrollView style={styles.courcesContainer} horizontal showsHorizontalScrollIndicator={false} justifyContent="space-between">
          <TouchableOpacity style={styles.courcesBtn}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Discussions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Mentors</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Tranding</Text>
          </TouchableOpacity>
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
    padding: wp('2%'),
    backgroundColor: '#fff',
    borderRadius: wp('50%'),
  },
  courcesContainer:{
    paddingHorizontal: wp('5%'),
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row', 
    elevation: 8,
  },
  courcesBtn:{
    backgroundColor: COLORS.backgroundWhite,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('6%'),
    borderRadius: wp('3%'),
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  }
});
