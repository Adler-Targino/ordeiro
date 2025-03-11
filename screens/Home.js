import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';

import { styles } from '../styles/CommonStyles';
import dbmanager from '../data/database/dbmanager';

function HomeScreen({ navigation }) {
    const [timers, setTimers] = useState([]); // Estado para armazenar os timers

    useFocusEffect(
        React.useCallback(() => {
            async function listTimers() {
                const result = await dbmanager.listTimers()
                setTimers(result); // Atualiza o estado com os timers
            }

            listTimers()
            return () => {
                // Do something when the screen is unfocused
                // Useful for cleanup functions
            };
        }, [])
    );


    return (
        <View style={styles.homeView}>
            <Text style={styles.itemTitle}>Lista de Timers</Text>

            {/* FlatList para exibir os timers */}
            <FlatList
                data={timers}
                keyExtractor={(item) => item.id.toString()} // Garante chave única
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Título: {item.title}</Text>
                        <Text style={styles.itemText}>Categoria: {item.category}</Text>
                        <Text style={styles.itemText}>Duração: {item.timeGoal} min</Text>                        
                    </View>
                )}
            />
        </View>
    );
}

export default HomeScreen