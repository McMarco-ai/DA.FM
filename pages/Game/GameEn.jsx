import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleValue = (value, base, screen) => (value / base) * screen;
const BASE_WIDTH = 375; // Base width for scaling
const BASE_HEIGHT = 812; // Base height for scaling

const clampValue = (value, min, max) => Math.max(min, Math.min(max, value));

const GameEn = () => {
  const navigation = useNavigation();
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [videoEnded, setVideoEnded] = useState(false);
  const [buttonsReady, setButtonsReady] = useState(false);
  const videoRef = useRef(null);

  const handleEnd = () => {
    setVideoEnded(true);
  };

  const handlePress = (buttonLabel) => {
    if (selectedButtons.length === 0) {
      setSelectedButtons([buttonLabel]);
    } else if (selectedButtons.length === 1) {
      const routeName = `${selectedButtons[0]} + ${buttonLabel}`;
      navigation.navigate(routeName);
      setSelectedButtons([]);
    }
  };

  const buttons = [
    { label: 'INDONÉSIA 1EN', color: '#ACB7DD', top: 20, left: 10, rotation: '355deg' },
    { label: 'TIMOR LESTE 1EN', color: '#E1B8D6', top: 20, left: 150, rotation: '10deg' },
    { label: 'PORTUGAL 1EN', color: '#F39F21', top: 95, left: 15, rotation: '330deg' },
    { label: 'CABO VERDE 1EN', color: '#F16264', top: 80, left: 145, rotation: '10deg' },
    { label: 'INDONÉSIA 2EN', color: '#ACB7DD', top: 140, left: 80, rotation: '350deg' },
    { label: 'BRASIL 1EN', color: '#89DEBA', top: 160, left: 210, rotation: '15deg' },
    { label: 'PORTUGAL 2EN', color: '#F39F21', top: 60, left: 270, rotation: '100deg' },
    { label: 'BRASIL 2EN', color: '#89DEBA', top: 210, left: 0, rotation: '345deg' },
    { label: 'TIMOR LESTE 2EN', color: '#E1B8D6', top: 290, left: 135, rotation: '60deg' },
    { label: 'CABO VERDE 2EN', color: '#F16264', top: 270, left: 20, rotation: '335deg' },
    { label: 'INDONÉSIA 3EN', color: '#ACB7DD',top: 335, left: 90, rotation: '70deg' },
    { label: 'PORTUGAL 3EN', color: '#F39F21', top: 203, left: 150, rotation: '15deg' },
    { label: 'CABO VERDE 3EN', color: '#F16264', top: 260, left: 230, rotation: '305deg' },
    { label: 'BRASIL 3EN', color: '#89DEBA', top: 360, left: 200, rotation: '340deg' },
    { label: 'TIMOR LESTE 3EN', color: '#E1B8D6', top: 335, left: -10, rotation: '180deg' },
  ];

  const adjustedButtons = buttons.map((button) => ({
    ...button,
    left: clampValue(
      scaleValue(button.left, BASE_WIDTH, SCREEN_WIDTH),
      0,
      SCREEN_WIDTH - scaleValue(150, BASE_WIDTH, SCREEN_WIDTH)
    ),
    top: clampValue(
      scaleValue(button.top, BASE_HEIGHT, SCREEN_HEIGHT),
      0,
      SCREEN_HEIGHT - scaleValue(60, BASE_HEIGHT, SCREEN_HEIGHT)
    ),
  }));

  useEffect(() => {
    const timeout = setTimeout(() => setButtonsReady(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      {!videoEnded ? (
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={require('../assets/intro.mp4')}
            resizeMode="contain"
            shouldPlay
            style={styles.video}
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                handleEnd();
              }
            }}
          />
        </View>
      ) : (
        <>
          <View style={styles.title}>
            <Text style={styles.titleText}>
              AUDIBLE{'\n'}
              DIVERSITY{'\n'}
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            {buttonsReady &&
              adjustedButtons.map((button) => {
                const isSelected = selectedButtons.includes(button.label);
                return (
                  <Pressable
                    key={button.label}
                    style={[
                      styles.button,
                      {
                        backgroundColor: button.color,
                        top: button.top,
                        left: button.left,
                        transform: [{ rotate: button.rotation }],
                        borderColor: isSelected ? 'white' : 'black',
                      },
                    ]}
                    onPress={() => handlePress(button.label)}
                  />
                );
              })}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    padding: 20,
  },
  videoContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: scaleValue(50, BASE_HEIGHT, SCREEN_HEIGHT),
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 10,
    textAlign: 'left',
  },
  titleText: {
    fontSize: scaleValue(40, BASE_WIDTH, SCREEN_WIDTH),
    color: '#ffffff',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    position: 'relative',
    width: '100%',
    height: scaleValue(500, BASE_HEIGHT, SCREEN_HEIGHT),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  button: {
    width: scaleValue(125.4, BASE_WIDTH, SCREEN_WIDTH),
    height: scaleValue(55.28, BASE_HEIGHT, SCREEN_HEIGHT),
    borderRadius: scaleValue(25, BASE_WIDTH, SCREEN_WIDTH),
    position: 'absolute',
    borderWidth: 2,
  },
});

export default GameEn;
