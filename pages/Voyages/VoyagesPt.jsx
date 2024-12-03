import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ImageBackground , Platform , Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VoyagesPt = () => {
    const navigation = useNavigation();

    const handlePressBack = () => {
        navigation.navigate('DiversityEn');
    };

    const handlePressForward = () => {
        navigation.navigate('DAFMPt');
    };
    const handleLinkPress = () => {
        Linking.openURL('https://ancestrytraveller.i3s.up.pt/the-idea-behind-this-project/');
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
                    source={require('../assets/background_pink.png')}
                />
                <View style={styles.title}>
                    <Text style={styles.titleTextBig}>
                        PRIMEIRA{'\n'}
                        VIAGEM {'\n'}
                        GLOBAL
                    </Text>
                </View>
            </View>

            <View style={styles.firstPara}>
                <Text style={styles.parasmallText}>
                    Durante e depois da expansão humana pelo globo, muitas gerações de humanos fizeram outras viagens provocando um fluxo génico entre diferentes populações.
                </Text>
                <Image
                    style={styles.image}
                    source={require('../assets/maps.png')}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    Em 1519 e 1522, Fernão de Magalhães e Juan Sebastián Elcano fazem a grande viagem que provou ser possível as viagens globais pelo mar.
                </Text>
            </View>

            <View style={styles.mapView}>
                <Image
                    style={styles.horizontalImage}
                    source={require('../assets/magalhaes.png')}
                />
            </View>

            <ScrollView style={styles.scrollableContainer} showsVerticalScrollIndicator>
                <View style={styles.roadMapContainer}>
                    <Image
                        style={styles.roadMapImage}
                        source={require('../assets/voyage.png')}
                    />
                </View>
            </ScrollView>

            <View style={styles.textContainerBackground}>
                <Text style={styles.normalTextGray}>
                    Se quiseres saber mais sobre as comemorações de Magalhães basta aceder clicando <Text style={styles.linkText} onPress={handleLinkPress}>aqui</Text>.
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
        backgroundColor: '#263238',
    },
    backgroundContainer: {
        position: 'relative',
        width: '100%',
        height: 510,
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
        alignSelf: 'flex-start',
    },
    normalText: {
        fontSize: 19,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'regular'
    },
   
    imageView: {
        paddingTop: 30,
        alignSelf: 'center',
    },
    smallText: {
        fontSize: 13,
        color: '#FFFFFF',
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
        justifyContent: 'space-between',
        width: '100%',
    },
    parasmallText: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: 'bold',
        flexShrink: 1,
        paddingRight: 10,
    },
    image: {
        paddingLeft: 20,
        height: 135,
        width: 135,
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
        alignItems: 'center',
        backgroundColor: '#3C464C',
        width: '100%',
        paddingVertical: 30,
    },
    normalTextGray: {
        fontSize: 16,
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
    mapView: {
        alignSelf: 'center',
        paddingTop: 30,
        paddingBottom: 50,
    },
    scrollableContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        paddingBottom: 40,
    },
    roadMapContainer: {
        alignItems: 'center',
    },
    roadMapImage: {
        width: 570,
        height: 1764,
        resizeMode: 'contain',
    }
});

export default VoyagesPt;
