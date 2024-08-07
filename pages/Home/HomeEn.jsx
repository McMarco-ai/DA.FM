import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePt = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('GenomeEn');
    };
    const handlePressExpansion = () => {
        navigation.navigate('ExpansionEn');
    };
    const handlePressDiversity = () => {
        navigation.navigate('DiversityEn');
    };
    const handlePressVoyages = () => {
        navigation.navigate('VoyagesEn');
    };
    const handlePressDA = () => {
        navigation.navigate('DAFMEn');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleTextBig}>
                    AUDIBLE DIVERSITY{'\n'}
                    FERNÃO MAGALHÃES
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    Follow the topics in the following order:                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={handlePress} style={[styles.button, styles.buttonGreen]}>
                    <Text style={styles.boldText}>The human genome</Text>
                </Pressable>
                <Pressable onPress={handlePressDiversity}  style={[styles.button, styles.buttonYellow]}>
                    <Text style={styles.boldText}>Human diversity</Text>
                </Pressable>
                <Pressable  onPress={handlePressExpansion} style={[styles.button, styles.buttonBlue]}>
                    <Text style={styles.boldText}>Human expansion</Text>
                </Pressable>
                <Pressable onPress={handlePressVoyages} style={[styles.button, styles.buttonRed]}>
                    <Text style={styles.boldText}>First global voyage</Text>
                </Pressable>
                <Pressable onPress={handlePressDA} style={[styles.button, styles.buttonLilac]}>
                    <Text style={styles.boldText}>DA.FM</Text>
                </Pressable>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.normalText}>
                    Discover more about...
                </Text>
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/projectEn.png')}
                />
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                    Inspired by the circumnavigation voyage of Ferdinand Magellan 500 years ago, the Ancestry Traveller project is dedicated to human diversity, interlinking genetics, history, and culture.                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    1. An Extraordinary Journey
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                    This first global voyage was the starting point for exploring ancestry, an extremely complex and diverse concept often shrouded in controversy. It resulted in various public activities and educational resources.                                 </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    2. The Exhibition
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                    One of the outcomes of this journey was a Science and Art installation/exhibition, exploring various concepts of human genetics and how they connect. This application, "Audible Diversity," was part of the exhibition. </Text>
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/boxes.png')}
                />
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    3. Explore
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                This application is part of a set of Educational Resources. Try out the board game we prepared on the evolution of human populations.          </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    4. Project Partners
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                    Foundation for Science and Technology (FCT)
                    - Institute of Molecular Pathology and Immunology (IPATIMUP/UP)
                    - Institute of Molecular and Cell Biology (IBMC/UP)
                    - Institute of Social Sciences of the University of Lisbon (ICS/ULisboa)  </Text>
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/contactsEn.png')}
                />
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/entidadesEn.png')}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.smallText}>
                    ©️ 2024 METEORA COLLECTIVE                           </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        
        backgroundColor: '#263238',
    },
    title: {
        marginTop: 50,
       
    },
    titleText: {
        fontSize: 45,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    titleTextBig: {
        marginLeft: 16,

        fontSize: 55,
        color: '#FFFFFF',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    textContainer: {
        marginTop: 70,
        paddingLeft: 30,
        paddingRight: 30
    },
    normalText: {
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20 // Center buttons horizontally
    },
    boldText: {
        fontSize: 24,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    button: {
        marginVertical: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 35,
        width: '100%',
    },
    buttonGreen: {
        backgroundColor: '#89DEBA'
    },
    buttonYellow: {
        backgroundColor: '#F39F21'
    },
    buttonBlue: {
        backgroundColor: '#ACB7DD'
    },
    buttonRed: {
        backgroundColor: '#F16264'
    },
    buttonLilac: {
        backgroundColor: '#E1B8D6'
    },
    imageView: {
        paddingTop: 30,
        alignSelf: 'center'
    },
    smallText: {
        fontSize: 13,
        color: '#FFFFFF',
    },
    titleText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'left',
    },
    textContainerSmall: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    footer: {
        paddingTop: 70,
        paddingLeft: 70,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40,

    }
});

export default HomePt;
