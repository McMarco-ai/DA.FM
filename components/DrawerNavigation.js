import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNav} from './App';
import { DrawerContent } from './DrawerContentt';
import HomeEn from '../pages/Home/HomeEn';
import CustomHeader from '../App'
import GenomeEn from '../pages/Genome/GenomeEn';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        cardStyle: {backgroundColor: 'white'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
    
    <Drawer.Screen
        name="Home"
        component={HomeEn}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
        })}        />
        
          <Drawer.Screen
        name="Genome"
        component={GenomeEn}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
        })}        />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
