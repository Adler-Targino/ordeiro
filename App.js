import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react'

import TimerList from './screens/TimerList';
import FormAddTimer from './screens/FormAddTimer';

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
        <View><Text>É a vida</Text></View>
        // <NavigationContainer>
        //     <Drawer.Navigator initialRouteName='ListTimers'>
        //         <Drawer.Screen name='ListTimers' component={TimerList} />
        //         <Drawer.Screen name='AddTimer' component={FormAddTimer} />
        //     </Drawer.Navigator>
        // </NavigationContainer>
    );
}

export default App;