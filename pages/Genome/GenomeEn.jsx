import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ImageBackground, Linking , Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GenomeEn = () => {
    const navigation = useNavigation();

    const handlePressBack = () => {
        navigation.navigate('HomeEn');
    };

    const handlePressForward = () => {
        navigation.navigate('DiversityEn');
    };

    const handleLinkPress = () => {
        Linking.openURL('https://ancestrytraveller.i3s.up.pt/the-ancestry-traveller-genetics-and-identity-drawing-group-the-difficulty-of-building-individual-stories-based-on-scientific-data-and-other-observations/');
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
            <View style={styles.backgroundContainer}>
                <ImageBackground
                    style={styles.backimage}
                    source={require('../assets/background_green.png')}
                />
                <View style={styles.title}>
                    <Text style={styles.titleTextBig}>
                        THE{'\n'}
                        HUMAN{'\n'}
                        GENOME
                    </Text>
                </View>
            </View>

            <View style={styles.firstPara}>
                <Image
                    style={styles.image}
                    source={require('../assets/genoma.png')}
                />
                <Text style={styles.parasmallText}>
                    The human genome is composed of a set of DNA molecules. It contains approximately 3.1 billion bases, of which about 3.1 million are variable regions.
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    These variable regions are responsible for genetic diversity among all individuals.
                </Text>
            </View>

            <ScrollView horizontal contentContainerStyle={styles.horizontalScrollContainer}>
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/card1En.png')}
                />
                 <Image
                    style={styles.horizontalImage}
                    source={require('../assets/card2En.png')}
                />
                  <Image
                    style={styles.horizontalImage}
                    source={require('../assets/card3En.png')}
                />
               
            </ScrollView>

            <View style={styles.textContainerBackground}>
                <Text style={styles.normalTextGray}>
                    The Human Genome Project was a great achievement for humanity. To access it, just click <Text style={styles.linkText} onPress={handleLinkPress}>here</Text>.
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable onPress={handlePressBack} style={[styles.button, styles.buttonLeft]}>
                    <Text style={styles.normalTextButton}>BACK</Text>
                </Pressable>
                <Pressable onPress={handlePressForward} style={[styles.button, styles.buttonRight]}>
                    <Text style={styles.normalTextButton}>NEXT</Text>
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
        paddingBottom: 50,
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
        alignSelf: 'center',
    },
    normalText: {
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    normalTextButton:{
        fontSize: 18,
        color: '#FFFFFF',
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
    },
    parasmallText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'semibold',
        paddingRight: 140,

    },
    image: {
        marginRight: 30,
    },
    horizontalScrollContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,

        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalImage: {
        marginRight: 20,
        width: 330,
        height: 491,
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
        textAlign: 'center',
    },
    linkText: {
        textDecorationLine: 'underline',
        color: '#89DEBA',
    },
    buttonsContainer: {
        marginTop: 80,
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
});

export default GenomeEn;
