import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import COLORS from '../../../constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CommunityFeed = () => {
  // FIX 1: 'const' lagana zaroori hai hook ke saath
  const navigation = useNavigation();

  // Mock Data (Taaki code baar baar repeat na karna pade)
  const posts = [1, 2, 3, 4];

  const renderPost = () => (
    <View style={styles.communityCardContainer}>
      <View style={styles.communityCard}>
        <Text numberOfLines={2} style={styles.cardTitle}>
          Problem With React Hero-Hooks – Need Help!
        </Text>
        <Text numberOfLines={1} style={styles.cardSubTitle}>
          Stuck on a small component implementation...
        </Text>
      </View>
      <View style={styles.likeContainer}>
        <EvilIcons name="like" size={hp('4%')} color={COLORS.textLight} />
        <Text style={styles.likeText}>12 Likes</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundWhite }}>
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

      {/* ================= CATEGORY TABS ================= */}
      <View style={styles.courcesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.communityContent}
        >
          <TouchableOpacity style={styles.communityBtn}>
            <Text style={styles.btnText}>Discussion</Text>
          </TouchableOpacity>

          {/* FIX 2: onPress use karein (onclick nahi hota RN mein) */}
          <TouchableOpacity 
            style={styles.communityBtn} 
            onPress={() => navigation.navigate('ChatScreen')}
          >
            <Text style={styles.btnText}>People</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* ================= POST LIST ================= */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPost}
        contentContainerStyle={{ paddingBottom: hp('2%') }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CommunityFeed;

const styles = StyleSheet.create({
  /* ================= HEADER ================= */
  header: {
    width: '100%',
    height: hp('10%'),
    paddingHorizontal: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 6,
    paddingTop: hp('2%'),
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
    height: hp('8%'),
    marginVertical: hp('1%'),
  },
  communityContent: {
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
  },
  communityBtn: {
    backgroundColor: '#fff',
    height: hp('5%'),
    paddingHorizontal: wp('6%'),
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
    color: COLORS.textDark,
  },

  /* ================= CARD ================= */
  communityCardContainer: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
    backgroundColor: '#fff',
    padding: wp('4%'),
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
    fontSize: RFValue(16),
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: hp('0.5%'),
  },
  cardSubTitle: {
    fontSize: RFValue(12),
    color: COLORS.textGray || '#777',
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
    color: COLORS.orange || '#FF6A00',
    marginLeft: wp('1%'),
  },
});