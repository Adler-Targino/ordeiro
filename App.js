import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react'

import HomeScreen from './screens/Home';
import FormAddTimer from './screens/FormAddTimer'

import DbManager from './data/database/dbmanager';

const Drawer = createDrawerNavigator();

function App() 
{    
    useEffect(() => {
        // Inicializa o banco de dados e cria a tabela
        const initializeDatabase = async () => {
          await DbManager.init(); // Chama o método init de DbManager
        };
    
        initializeDatabase();
      }, []);

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='HomeScreen'>
                <Drawer.Screen name='HomeScreen' component={HomeScreen} />
                <Drawer.Screen name='Adicionar um novo timer' component={FormAddTimer} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;