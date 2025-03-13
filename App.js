import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react'

import HomeScreen from './screens/Home';
import FormAddTimer from './screens/FormAddTimer'

import { styles } from './styles/CommonStyles';
import DbManager from './data/database/dbmanager';

const Stack = createNativeStackNavigator();

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
            <View style={styles.loadingView}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#733684' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
                }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Ordeiro' }} />
                <Stack.Screen name="Adicionar" component={FormAddTimer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;