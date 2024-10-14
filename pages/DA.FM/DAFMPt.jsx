import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ImageBackground , Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DAFMPt = () => {
    const navigation = useNavigation();

    const handlePressBack = () => {
        navigation.navigate('GamePt');
    };

   
    const spacerHeight = 55554450;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Platform.OS === 'ios' && (
                <View
                    style={{
                        backgroundColor: '#263238',
                        height: spacerHeight,
                        position: 'absolute',
                        top: -spacerHeight,
                        bottom: spacerHeight,

                        left: 0,
                        right: 0,
                    }}
                />
            )}

            

            <ScrollView style={styles.scrollableContainer} showsVerticalScrollIndicator>
                <View style={styles.roadMapContainer}>
                    <Image
                        style={styles.roadMapImage}
                        source={require('../assets/IntroPT.png')}
                    />
                </View>
            </ScrollView>

           

            <View style={styles.buttonsContainer}>
                <Pressable onPress={handlePressBack} style={[styles.button]}>
                    <Text style={styles.normalText}>COMEÇAR</Text>
                </Pressable>
               
            </View>

           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#263238',
    },
    backgroundContainer: {
        position: 'relative',
        width: '100%',
        height: 420, // Adjust this value to control the height of the background image
    },
    backimage: {
        position: 'absolute',
        top: -110,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        marginTop: 130,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        paddingTop: 10,
    },
    titleText: {
        fontSize: 45,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    titleTextBig: {
        fontSize: 55,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textContainer: {
        marginTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'flex-start',
    },
    textContainerBottom: {
        marginTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'flex-start',
    },
    normalText: {
        fontSize: 22,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'regular'
    },
    normalTextBottom: {
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    boldText: {
        fontSize: 24,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    
    imageView: {
        paddingTop: 30,
        alignSelf: 'center',
    },
    smallText: {
        fontSize: 13,
        color: '#FFFFFF',
    },
    textContainerSmall: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    footer: {
        paddingTop: 70,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    firstPara: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between', // Adjusted to ensure proper spacing
        width: '100%',
    },
    parasmallText: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: 'bold',
        flexShrink: 1 ,
        paddingRight: 10
    },
    image: {

        paddingLeft: 20,
        height: 135,
        width: 135
    },
    horizontalScrollContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalImage: {
        width: 410,
        height: 410,
    },
    textContainerBackground: {
        alignSelf: 'center',
        backgroundColor: '#3C464C',
        width: '100%',
        paddingBottom: 30,
        paddingTop: 30,
    },
    normalTextGray: {
        fontSize: 13,
        color: '#FFFFFF',
        paddingRight: 30,
        paddingLeft: 30,
        alignSelf: 'center',
    },
    linkText: {
        textDecorationLine: 'underline',
        color: '#89DEBA',
    },
    buttonsContainer: {
        marginTop: 30,
     
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 40
    },
    button: {
        width: 290,
        height: 70,
        backgroundColor: '#263238',
        paddingBottom: 15,
        paddingHorizontal: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 3,
    },
    buttonLeft: {
        marginLeft: 16,
        paddingRight: 40,
        paddingLeft: 40,
    },
    buttonRight: {
        marginRight: 16,
        paddingRight: 35,
        paddingLeft: 35,
    },
    mapView: {
        alignSelf: 'center',
        paddingTop: 30,
        paddingBottom: 50
    },
    scrollableContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        paddingBottom: 10
        
    },
    roadMapContainer: {
        marginTop : 66,
        alignItems: 'center',
      
    },
    roadMapImage: {
        width: 670,
        height:1964,
        resizeMode: 'contain'
    }
});

export default DAFMPt;
