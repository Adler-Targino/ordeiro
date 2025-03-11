import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react'

import HomeScreen from './screens/Home';
import FormAddTimer from './screens/FormAddTimer'

import { styles } from './styles/CommonStyles';
import DbManager from './data/database/dbmanager';

const Drawer = createDrawerNavigator();

function App() {
    const [isDbReady, setIsDbReady] = useState(false);

    useEffect(() => {
        // Inicializa o banco de dados e cria a tabela
        const initializeDatabase = async () => {
            await DbManager.init(); // Chama o método init de DbManager
            setIsDbReady(true); // Sinaliza que o banco está pronto
        };

        initializeDatabase();
    }, []);

    if (!isDbReady) {
        // Exibe um carregamento enquanto o banco está inicializando
        return (
            <View style={ styles.loadingView }>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

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