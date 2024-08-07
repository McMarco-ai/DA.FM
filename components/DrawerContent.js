import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation, useFocusEffect, useNavigationState } from '@react-navigation/native';
import { useLanguage } from './LanguageContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

const DrawerItems = ({ language }) => {
  const navigation = useNavigation();

  // Define drawer items for different languages
  const DrawerListEn = [
    { label: 'Human Genome', navigateTo: 'GenomeEn' },
    { label: 'Human Diversity', navigateTo: 'DiversityEn' },
    { label: 'Human Expansion', navigateTo: 'ExpansionEn' },
    { label: 'First global voyage', navigateTo: 'VoyagesEn' },
    { label: 'DA.FM', navigateTo: 'DAFMEn' },
  ];

  const DrawerListPt = [
    { label: 'Genoma Humano', navigateTo: 'GenomePt' },
    { label: 'Diversidade Humana', navigateTo: 'DiversityPt' },
    { label: 'A Expansão Humana', navigateTo: 'ExpansionPt' },
    { label: 'Primeira Viagem Global', navigateTo: 'VoyagesPt' },
    { label: 'DA.FM', navigateTo: 'DAFMPt' },
  ];

  // Choose the drawer list based on the current language
  const DrawerList = language === 'en' ? DrawerListEn : DrawerListPt;

  return DrawerList.map((el, i) => (
    <DrawerItem
      key={i}
      label={() => <Text style={styles.text}>{el.label}</Text>}
      onPress={() => {
        navigation.navigate(el.navigateTo);
      }}
    />
  ));
};

const DrawerContent = (props) => {
  const { language, setLanguage } = useLanguage();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  
  const routeName = state?.routes?.[state.index]?.name ?? '';

  useFocusEffect(
    useCallback(() => {
      if (routeName.includes('Pt')) {
        setLanguage('pt');
      } else {
        setLanguage('en');
      }
    }, [routeName])
  );

  return (
    <View style={{ flex: 1 , backgroundColor:'#263238' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('../pages/assets/Logo.png')}
          />
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())} style={styles.closeButton}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItems language={language} style={styles.text} />
          </View>
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => setLanguage(language === 'en' ? 'pt' : 'en')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {`${language === 'en' ? 'Portuguese' : 'English'}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: '#dedede',
  },
  image: {
    width: 90,
    height: 78,
  },
  closeButton: {
    padding: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 17
    // Set the text color to white
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#263238',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: '#ffffff', // Set the button text color to white
    textAlign: 'center',
    fontSize: 17
  },
});
