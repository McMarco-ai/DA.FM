import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const CABOVERDE1CABOVERDE2EN = () => {
    const navigation = useNavigation();
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    const handlePressForward = () => {
        navigation.navigate('CABO VERDE + CABO VERDE EN'); // Update with your target route
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playAsync();
        }
    }, []);

    const handleVideoEnd = () => {
        setVideoEnded(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleTextBig}>
                LISTEN CAREFULLY
                </Text>
            </View>

            {!videoEnded ? (
                <Video
                    ref={videoRef}
                    source={require('../../assets/cv1cv2.mp4')} 
                    style={styles.video}
                    resizeMode="cover"
                    onPlaybackStatusUpdate={status => {
                        if (status.didJustFinish) {
                            handleVideoEnd();
                        }
                    }}
                    useNativeControls={false}
                    shouldPlay={true}
                    isMuted={false}
                    volume={1.0}
                />
            ) : (
                <Image
                    source={require('../../assets/ptin.png')} 
                    style={styles.image}
                />
            )}

            <View style={styles.titleDown}>
                <Text style={styles.titleText}>
                    ARE THESE TWO INDIVIDUALS DIFFERENT?
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable onPress={handlePressForward} style={[styles.button, styles.buttonLeft]}>
                    <Text style={styles.buttonText}>YES</Text>
                </Pressable>
                <Pressable onPress={handlePressForward} style={[styles.button, styles.buttonRight]}>
                    <Text style={styles.buttonText}>NO</Text>
                </Pressable>
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
       
        backgroundColor: '#263238',
    },
    title: {
        marginLeft: 15,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 40,
        paddingTop: 10,
    },
    titleDown: {
        marginLeft: 15,
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 40,
        paddingTop: 10,
    },
    titleTextBig: {
        fontSize: 55,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
        marginRight: 30
    },
    video: {
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: 300, // Adjust this value to control the height of the image
        resizeMode: 'cover',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonLeft: {
        backgroundColor: '#263238',
    },
    buttonRight: {
        backgroundColor: '#263238',
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default CABOVERDE1CABOVERDE2EN;