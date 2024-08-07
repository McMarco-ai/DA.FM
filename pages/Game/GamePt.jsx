import React, { useState, useRef } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
const GamePt = () => {
    const navigation = useNavigation();
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [videoEnded, setVideoEnded] = useState(false);
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
        { label: 'INDONÉSIA 1PT', color: '#ACB7DD', top: 20, left: 0, rotation: '-5deg' },
        { label: 'TIMOR LESTE 1PT', color: '#E1B8D6', top: 20, left: 150, rotation: '10deg' },
        { label: 'PORTUGAL 1PT', color: '#F39F21', top: 95, left: 5, rotation: '-30deg' },
        { label: 'CABO VERDE 1PT', color: '#F16264', top: 80, left: 165, rotation: '7deg' },
        { label: 'INDONÉSIA 2PT', color: '#ACB7DD', top: 137, left: 80, rotation: '-10deg' },
        { label: 'BRASIL 1PT', color: '#89DEBA', top: 160, left: 240, rotation: '15deg' },
        { label: 'PORTUGAL 2PT', color: '#F39F21', top: 60, left: 270, rotation: '100deg' },
        { label: 'BRASIL 2PT', color: '#89DEBA', top: 210, left: 0, rotation: '-15deg' },
        { label: 'TIMOR LESTE 2PT', color: '#E1B8D6', top: 290, left: 135, rotation: '60deg' },
        { label: 'CABO VERDE 2PT', color: '#F16264', top: 280, left: 20, rotation: '5deg' },
        { label: 'INDONÉSIA 3PT', color: '#ACB7DD', top: 375, left: 80, rotation: '0deg' },
        { label: 'PORTUGAL 3PT', color: '#F39F21', top: 203, left: 150, rotation: '15deg' },
        { label: 'CABO VERDE 3PT', color: '#F16264', top: 260, left: 230, rotation: '-55deg' },
        { label: 'BRASIL 3PT', color: '#89DEBA', top: 360, left: 230, rotation: '-20deg' },
        { label: 'TIMOR LESTE 3PT', color: '#E1B8D6', top: 365, left: -30, rotation: '-50deg' },
    ];

    return (
        <View style={styles.container}>
        {!videoEnded ? (
            <View style={styles.videoContainer}>
                <Video
                    ref={videoRef}
                    source={require('../assets/intro.mp4')}
                    style={styles.video}
                    resizeMode="contain"
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
            <View style={styles.title}>
                <Text style={styles.titleTextBig}>
                    DIVERSIDADE{'\n'}
                    AUDÍVEL{'\n'}
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                {buttons.map((button, index) => {
                    const isSelected = selectedButtons.includes(button.label);
                    return (
                        <Pressable
                            key={index}
                            style={[
                                styles.button,
                                {
                                    backgroundColor: button.color,
                                    top: button.top,
                                    left: button.left,
                                    transform: [{ rotate: button.rotation }],
                                    borderColor: isSelected ? 'white' : '#263238',
                                },
                                isSelected && styles.selectedButton
                            ]}
                            onPress={() => handlePress(button.label)}
                        >
                        </Pressable>
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
        marginTop: 50,
        paddingRight: 10,
        paddingBottom: 20,
        paddingTop: 10,
        textAlign: 'left',
    },
    titleTextBig: {
        fontSize: 55,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    buttonsContainer: {
        position: 'relative',
        width: '100%',
        height: 500, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 145.4,
        height: 55.28,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderWidth: 1,
    },
    selectedButton: {
        borderColor: 'white',
        borderWidth: 3,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});
export default GamePt;
