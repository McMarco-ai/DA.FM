import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handlePressPt = () => {
    navigation.navigate('HomePt');
  };

  const handlePressEn = () => {
    navigation.navigate('HomeEn');
  };

  const handleEnd = () => {
    setVideoEnded(true);
  };

  return (
    <View style={styles.container}>
      {!videoEnded ? (
        <View style={styles.imageView}>
          <Video
            ref={videoRef}
            source={require('../assets/logoVid.mp4')}
            style={styles.video}
            resizeMode="cover"
            shouldPlay
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                handleEnd();
              }
            }}

          />
        </View>
      ) : (
        <>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require('../assets/Logo.png')}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable onPress={handlePressPt} style={styles.button}>
              <Text style={styles.language}>PORTUGUÊS</Text>
            </Pressable>
            <Pressable onPress={handlePressEn} style={styles.button}>
              <Text style={styles.language}>ENGLISH</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263238',
  },
  video: {
    position: 'absolute',
    top : -140,
    width: 285,
    height: 267,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 170,
  },
  image: {
    width: 195,
    height: 167,
  },
  buttonsContainer: {
    marginTop: 250,
  },
  button: {
    backgroundColor: '#263238',
    paddingBottom: 10,
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 10,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    borderColor: '#ffffff',
    borderWidth: 3,
  },
  language: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default LandingPage;
