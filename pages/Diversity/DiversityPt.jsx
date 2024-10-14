import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ImageBackground , Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiversityPt = () => {
    const navigation = useNavigation();

    const handlePressBack = () => {
        navigation.navigate('GenomePt');
    };

    const handlePressForward = () => {
        navigation.navigate('ExpansionPt');
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
                    source={require('../assets/background_orange.png')}
                />
                <View style={styles.title}>
                    <Text style={styles.titleTextBig}>
                        A{'\n'}
                        DIVERSIDADE{'\n'}
                        HUMANA
                    </Text>
                </View>
            </View>

            <View style={styles.firstPara}>
                <Image
                    style={styles.image}
                    source={require('../assets/people.png')}
                />
                <Text style={styles.parasmallText}>
                    Explore as notáveis semelhanças genéticas humanas!
                </Text>
            </View>

            <ScrollView horizontal contentContainerStyle={styles.horizontalScrollContainer}>
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity1.png')}
                />
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity2.png')}
                />
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity3.png')}
                />
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity4.png')}
                />
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity5.png')}
                />
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity6.png')}
                />
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/diversity7.png')}
                />
            </ScrollView>

            <View style={styles.textContainerBackground}>
                <Text style={styles.normalTextGray}>
                    Explore essa diversidade através do som! Explore de forma audível essa diversidade no tópico interativo DA.FM.
                </Text>
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
        textAlign: 'center',
    },
    boldText: {
        fontSize: 24,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    button: {
        marginVertical: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        width: '100%',
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
        paddingBottom: 30,
    },
    parasmallText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'semibold',
        paddingRight: 120,
        paddingLeft: 40,
        textAlign: 'left',
    },
    image: {
        marginLeft: 10,
        alignSelf: 'center',
    },
    horizontalScrollContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        paddingBottom: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalImage: {
        marginRight: 20,
        width: 330,
        height: 491,
    },
    textContainerBackground: {
        alignItems: 'center',
        backgroundColor: '#3C464C',
        width: '100%',
        paddingVertical: 30,
    },
    normalTextGray: {
        fontSize: 13,
        color: '#FFFFFF',
        textAlign: 'center',
        marginHorizontal: 30,
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
});

export default DiversityPt;
