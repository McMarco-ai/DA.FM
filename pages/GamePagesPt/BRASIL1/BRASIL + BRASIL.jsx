import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const BRASILBRASILPT = () => {
    const navigation = useNavigation();
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    const handlePressForward = () => {
        navigation.navigate('GamePt'); // Update with your target route
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playAsync();
        }
    }, []);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleTextBig}>
                A ORIGEM
                </Text>
            </View>

           
                <Image
                    source={require('../../assets/brbr.png')} // Replace with your image URL
                    style={styles.image}
                />
            

            <View style={styles.titleDown}>
                <Text style={styles.titleText}>
                O SOM REPRESENTA APENAS 1 milhão de variantes, Ou seja, uma parte dos 0,1% do genoma.
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable onPress={handlePressForward} style={[styles.button, styles.buttonLeft]}>
                    <Text style={styles.buttonText}>COMPARAR OUTRO PAR</Text>
                </Pressable>
              
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#263238',
    },
    title: {
        marginLeft: 16,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 100,
        paddingTop: 10,
    },
    titleTextBig: {
        fontSize: 55,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    titleDown:{
        marginLeft: 16,
        marginTop: 40,
        paddingRight: 10,
        paddingBottom: 100,
        paddingTop: 40,
    },
    titleText: {
        marginLeft: 16,

        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
        marginRight: 30
    },
    video: {
        width: '100%',
        height: 300, // Adjust this value to control the height of the video
    },
    image: {
        width: '100%',
        height: 200, // Adjust this value to control the height of the image
        resizeMode: 'contain',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    button: {
        width: 290,
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

export default BRASILBRASILPT;
