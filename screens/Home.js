import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from '../styles/CommonStyles';
import dbmanager from '../data/database/dbmanager';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen({ navigation }) {
    const [timers, setTimers] = useState([]); // Lista de itens com título e meta de tempo
    const [runningTimers, setRunningTimers] = useState({}); // Estado para tempos individuais

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
            {/* FlatList para exibir os timers */}
            <FlatList
                data={timers}
                keyExtractor={(item) => item.id.toString()} // Garante chave única
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemText}>{item.category}</Text>
                        <View style={styles.itemIconDiv}>
                            <TouchableOpacity style={[styles.itemButton, { backgroundColor: '#04AA6D', }]}>
                                <MaterialIcons name="play-arrow" size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.itemText}>{item.timeGoal}</Text>
                            <Text style={styles.itemText}>Meta: {item.timeGoal}</Text>
                        </View>
                    </View>
                )}
            />

            {/* botão de adicionar */}
            <TouchableOpacity
                style={[styles.addButton]}
                onPress={() => navigation.navigate("Adicionar")}>
                <MaterialIcons name="add" size={35} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen