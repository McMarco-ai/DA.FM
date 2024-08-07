import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomePt = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('GenomePt');
    };
    const handlePressExpansion = () => {
        navigation.navigate('ExpansionPt');
    };
    const handlePressDiversity = () => {
        navigation.navigate('DiversityPt');
    };
    const handlePressVoyages = () => {
        navigation.navigate('VoyagesPt');
    };
    const handlePressDA = () => {
        navigation.navigate('DAFMPt');
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleTextBig}>
                    DIVERSIDADE AUDÍVEL{'\n'}
                    FERNÃO MAGALHÃES                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    Segue os tópicos pela seguinte ordem:               </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={handlePress} style={[styles.button, styles.buttonGreen]}>
                    <Text style={styles.boldText}>O genoma humano</Text>
                </Pressable>
                <Pressable onPress={handlePressDiversity} style={[styles.button, styles.buttonYellow]}>
                    <Text style={styles.boldText}>Diversidade humana</Text>
                </Pressable>
                <Pressable  onPress={handlePressExpansion} style={[styles.button, styles.buttonBlue]}>
                    <Text style={styles.boldText}>A expansão humana</Text>
                </Pressable>
                <Pressable onPress={handlePressVoyages} style={[styles.button, styles.buttonRed]}>
                    <Text style={styles.boldText}>Primeira viagem global</Text>
                </Pressable>
                <Pressable onPress={handlePressDA}  style={[styles.button, styles.buttonLilac]}>
                    <Text style={styles.boldText}>DA.FM</Text>
                </Pressable>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.normalText}>
                    Descobre mais sobre...                </Text>
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/project.png')}
                />
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                Inspirado na viagem de circum-navegação de Fernão Magalhães, há 500 anos, o projeto Ancestry Traveller dedicou-se à diversidade humana, interligando genética, história e cultura.  </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    1. Uma Extraordinária Viagem
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                Esta primeira viagem global foi o ponto de partida para explorar a ancestralidade, um conceito extremamente complexo, diverso e muitas vezes envolto em controvérsia. Dele resultaram várias atividades públicas e recursos didáticos.      </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    2. A Exposição
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                Um dos resultados desta jornada foi uma instalação/exposição de Ciência e Arte, explorando vários conceitos de genética humana e como eles se ligam. Esta aplicação, “Diversidade Audível”, fez parte da exposição. </Text>
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
                    Esta aplicação faz parte de um conjunto de Recursos Educacionais. Experimenta o jogo de tabuleiro que preparamos sobre a evolução das populações humanas.              </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.titleText}>
                    4. Parceiros do Projeto 
                </Text>
            </View>
            <View style={styles.textContainerSmall}>
                <Text style={styles.smallText}>
                Fundação para a Ciência e a Tecnologia (FCT)Instituto de Patologia e Imunologia Molecular (IPATIMUP/UP)Instituto de Biologia Molecular e Celular (IBMC/UP)Instituto de Ciências Sociais da Universidade de Lisboa (ICS/ULisboa)  </Text>
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/contactos.png')}
                />
            </View>
            < View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/entidades.png')}
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
        fontFamily: 'Inter-Regular',
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
        paddingLeft: 30,
        paddingRight: 30
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
