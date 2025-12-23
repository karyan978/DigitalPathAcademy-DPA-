import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import COLORS from '../../../../constants/Color';

const AddCourseHome = ({ navigation }) => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  // Image Picker Function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Quick Action Buttons */}
        <View style={styles.topActionContainer}>
          <Text style={styles.headerTitle}>Add New Content</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: COLORS.green }]} onPress={pickImage}>
              <Ionicons name="image" size={wp(6)} color="white" />
              <Text style={styles.actionBtnText}>Add Image</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.actionBtn, { backgroundColor: COLORS.primaryBlue }]}
              onPress={() => navigation.navigate('UploadVideo')}
            >
              <MaterialIcons name="video-call" size={wp(7)} color="white" />
              <Text style={styles.actionBtnText}>Add Video</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.actionBtn, { backgroundColor: COLORS.orange }]}
              onPress={() => navigation.navigate('QuizScreen')}
            >
              <FontAwesome5 name="tasks" size={wp(5)} color="white" />
              <Text style={styles.actionBtnText}>Add Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Course Details Form */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Course Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Advanced Python Programming"
            value={courseName}
            onChangeText={setCourseName}
          />

          <Text style={styles.inputLabel}>Course Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Write about the course..."
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          {/* Thumbnail Preview Area */}
          <Text style={styles.inputLabel}>Course Thumbnail</Text>
          <TouchableOpacity style={styles.uploadPlaceholder} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.previewImage} />
            ) : (
              <View style={styles.placeholderContent}>
                <Ionicons name="cloud-upload-outline" size={wp(12)} color={COLORS.textLight} />
                <Text style={styles.placeholderText}>Select course banner image</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Create Course</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddCourseHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  scrollContent: {
    paddingBottom: hp(5),
  },
  topActionContainer: {
    padding: wp(5),
    backgroundColor: 'white',
    borderBottomLeftRadius: wp(8),
    borderBottomRightRadius: wp(8),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  headerTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: hp(2),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBtn: {
    width: wp(28),
    height: hp(10),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  actionBtnText: {
    color: 'white',
    fontSize: wp(3.2),
    fontWeight: '600',
    marginTop: 5,
  },
  formContainer: {
    padding: wp(5),
    marginTop: hp(2),
  },
  inputLabel: {
    fontSize: wp(4),
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: hp(1),
    marginTop: hp(2),
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    borderRadius: wp(3),
    padding: wp(4),
    fontSize: wp(4),
    color: COLORS.textDark,
  },
  textArea: {
    height: hp(15),
    textAlignVertical: 'top',
  },
  uploadPlaceholder: {
    width: '100%',
    height: hp(22),
    backgroundColor: COLORS.backgroundWhite,
    borderWidth: 2,
    borderColor: COLORS.borderLight,
    borderStyle: 'dashed',
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderContent: {
    alignItems: 'center',
  },
  placeholderText: {
    color: COLORS.textLight,
    marginTop: 10,
    fontSize: wp(3.5),
  },
  submitBtn: {
    backgroundColor: COLORS.green,
    borderRadius: wp(4),
    paddingVertical: hp(2),
    alignItems: 'center',
    marginTop: hp(4),
    elevation: 5,
  },
  submitBtnText: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
});