import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExpansionPt = () => {
    const navigation = useNavigation();

    const handlePressBack = () => {
        navigation.navigate('DiversityPt');
    };

    const handlePressForward = () => {
        navigation.navigate('VoyagesPt');
    };

   

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.backgroundContainer}>
                <ImageBackground
                    style={styles.backimage}
                    source={require('../assets/background_blue.png')}
                />
                <View style={styles.title}>
                    <Text style={styles.titleTextBig}>
                        A{'\n'}
                        EXPANSÃO{'\n'}
                        HUMANA
                    </Text>
                </View>
            </View>

            <View style={styles.firstPara}>
                
                <Text style={styles.parasmallText}>
                O humano moderno surgiu em África há apenas 300.000 – 200.000 anos                </Text>
                <Image
                    style={styles.image}
                    source={require('../assets/map.png')}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                A expansão realizou-se por pequenos e sucessivos grupos de fundadores que foram colonizando o globo.                </Text>
            </View>

            <View style={styles.mapView}>
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/bigMap.png')}
                />
               
               
            </View>
            <ScrollView style={styles.scrollableContainer} showsVerticalScrollIndicator>
                <View style={styles.roadMapContainer}>
                    <Image
                        style={styles.roadMapImage}
                        source={require('../assets/roadMap.png')}
                    />
                </View>
            </ScrollView>
            <View style={styles.textContainerBottom}>
                <Text style={styles.normalTextBottom}>
                Por isso, quanto mais longe da origem, menos diversa a população.               </Text>
            </View>
            <View style={styles.textContainerBottom}>
                <Text style={styles.normalTextBottom}>
                No entanto, a par e depois dessa grande expansão, muitos fluxos génicos aconteceram que ajudaram a diversificar o património genético de muitas populações.               </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable onPress={handlePressBack} style={[styles.button, styles.buttonLeft]}>
                    <Text style={styles.normalTextButton}>VOLTAR</Text>
                </Pressable>
                <Pressable onPress={handlePressForward} style={[styles.button, styles.buttonRight]}>
                    <Text style={styles.normalTextButton}>AVANÇAR</Text>
                </Pressable>
            </View>

            <View style={styles.footer}>
                <Text style={styles.smallText}>
                    ©️ 2024 METEORA COLLECTIVE
                </Text>
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
        top:-110,
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
        marginLeft: 16,

        fontSize: 55,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textContainer: {
        marginTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'left',
    },
    textContainerBottom:{
        marginTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        alignSelf: 'left',
    },
    
    normalText: {
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'regular'

    },
    normalTextBottom:{
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
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'semibold',
        paddingRight: 30,
        flexShrink: 1,
    },
    image: {
        marginRight: 30,
        height: 105,
        width: 105
    },
    horizontalScrollContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,

        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalImage: {
        width: 390,
        height: 260,
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
         
    },
    button: {
        backgroundColor: '#263238',
        paddingBottom: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 3,
    },
    buttonLeft: {
        width: 164,
        height: 50,
        marginLeft: 16,
        

        paddingRight: 40,
        paddingLeft: 40,
    },
    buttonRight: {
        width: 164,
        height: 50,
        marginRight: 16,
        paddingRight: 35,
        paddingLeft: 35,

    },
    normalTextButton: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    mapView: {
        alignSelf: 'center',
        paddingTop: 30,
        paddingBottom: 50
    },
    scrollableContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        
    },
    roadMapContainer: {
        alignItems: 'center',
      
    },
    roadMapImage: {
        width: 570,
        height:1364,
        resizeMode: 'contain'
    }
});

export default ExpansionPt;
