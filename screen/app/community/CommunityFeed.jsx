import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../../../constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const CommunityFeed = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* ================= HEADER ================= */}
      <LinearGradient
        colors={[COLORS.green, COLORS.darkGreen]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Ionicons name="menu-outline" size={hp('3.5%')} color="#fff" />

        <Text style={styles.headerTitle}>Community</Text>

        <View style={styles.whiteCircle}>
          <EvilIcons name="user" size={hp('4%')} color={COLORS.darkGreen} />
        </View>
      </LinearGradient>
      <ScrollView style={styles.container}>

        {/* ================= CATEGORY TABS ================= */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.courcesContainer}
          contentContainerStyle={styles.communityContent}
        >
          <TouchableOpacity style={styles.communityBtn}>
            <Text style={styles.btnText}>Discussion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.communityBtn}>
            <Text style={styles.btnText}>People</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* ================= POST CARD ================= */}
        <View style={styles.communityCardContainer}>
          <View style={styles.communityCard}>
            <Text
              numberOfLines={2}
              style={styles.cardTitle}
            >
              Problem With React Hero-Hooks – Need Help!
            </Text>

            <Text
              numberOfLines={1}
              style={styles.cardSubTitle}
            >
              Stuck on a small component implementation...
            </Text>
          </View>

          <View style={styles.likeContainer}>
            <EvilIcons name="like" size={hp('4%')} color={COLORS.textLight} />
            <Text style={styles.likeText}>12 Likes</Text>
          </View>
        </View>

        {/* ================= POST CARD ================= */}
        <View style={styles.communityCardContainer}>
          <View style={styles.communityCard}>
            <Text
              numberOfLines={2}
              style={styles.cardTitle}
            >
              Problem With React Hero-Hooks – Need Help!
            </Text>

            <Text
              numberOfLines={1}
              style={styles.cardSubTitle}
            >
              Stuck on a small component implementation...
            </Text>
          </View>

          <View style={styles.likeContainer}>
            <EvilIcons name="like" size={hp('4%')} color={COLORS.textLight} />
            <Text style={styles.likeText}>12 Likes</Text>
          </View>
        </View>

        {/* ================= POST CARD ================= */}
        <View style={styles.communityCardContainer}>
          <View style={styles.communityCard}>
            <Text
              numberOfLines={2}
              style={styles.cardTitle}
            >
              Problem With React Hero-Hooks – Need Help!
            </Text>

            <Text
              numberOfLines={1}
              style={styles.cardSubTitle}
            >
              Stuck on a small component implementation...
            </Text>
          </View>

          <View style={styles.likeContainer}>
            <EvilIcons name="like" size={hp('4%')} color={COLORS.textLight} />
            <Text style={styles.likeText}>12 Likes</Text>
          </View>
        </View>

        {/* ================= POST CARD ================= */}
        <View style={styles.communityCardContainer}>
          <View style={styles.communityCard}>
            <Text
              numberOfLines={2}
              style={styles.cardTitle}
            >
              Problem With React Hero-Hooks – Need Help!
            </Text>

            <Text
              numberOfLines={1}
              style={styles.cardSubTitle}
            >
              Stuck on a small component implementation...
            </Text>
          </View>

          <View style={styles.likeContainer}>
            <EvilIcons name="like" size={hp('4%')} color={COLORS.textLight} />
            <Text style={styles.likeText}>12 Likes</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default CommunityFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite || '#fff',
  },

  /* ================= HEADER ================= */
  header: {
    width: '100%',
    minHeight: hp('9%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 6,
  },
  headerTitle: {
    color: '#fff',
    fontSize: RFValue(18),
    fontWeight: '600',
  },
  whiteCircle: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ================= CATEGORY SCROLL ================= */
  courcesContainer: {
    height: hp('7%'),
    marginTop: hp('1%'),
  },
  communityContent: {
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  communityBtn: {
    backgroundColor: COLORS.backgroundWhite,
    minHeight: hp('5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  btnText: {
    fontSize: RFValue(13),
    fontWeight: '500',
  },

  /* ================= CARD ================= */
  communityCardContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: hp('2%'),
    backgroundColor: COLORS.backgroundWhite,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    marginHorizontal: wp('5%'),
    borderRadius: wp('3%'),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  communityCard: {
    width: '100%',
  },
  cardTitle: {
    fontSize: RFValue(17),
    fontWeight: '600',
    marginBottom: hp('1%'),
  },
  cardSubTitle: {
    fontSize: RFValue(12),
    color: '#777',
  },

  /* ================= LIKE ================= */
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5%'),
    alignSelf: 'flex-end',
  },
  likeText: {
    fontSize: RFValue(12),
    color: COLORS.orange,
    marginLeft: wp('1%'),
  },
});
