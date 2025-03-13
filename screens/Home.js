import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/CommonStyles';
import dbmanager from '../data/database/dbmanager';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen({ navigation }) {
    const [timers, setTimers] = useState([]); // Lista de itens com título e meta de tempo
    const [runningTimers, setRunningTimers] = useState({}); // Estado para tempos individuais

    //Função chamada quandpo tela recebe foco
    useFocusEffect( 
        React.useCallback(() => {
            async function listTimers() {
                const result = await dbmanager.listTimers();
                
                // Inicializar os cronômetros com o tempo salvo do banco de dados
                const timersWithState = result.reduce((acc, timer) => {
                    acc[timer.id] = {
                        seconds: timer.timePast || 0,  // Usa o tempo salvo ou começa do zero
                        isRunning: false,
                        intervalId: null
                    };
                    return acc;
                }, {});
    
                setTimers(result);          // Atualiza a lista de timers
                setRunningTimers(timersWithState);  // Define os estados individuais dos cronômetros
            }
    
            listTimers();
        }, [])
    );

    // Função para iniciar ou pausar o cronômetro de um item
    const toggleTimer = (id) => {
        setRunningTimers((prevTimers) => {
            const timer = prevTimers[id];
    
            if (timer.isRunning) {
                // Parar o cronômetro
                clearInterval(timer.intervalId);
                
                // Salvar o tempo decorrido no banco de dados
                dbmanager.updateTimer(id, timer.seconds);
    
                return { 
                    ...prevTimers, 
                    [id]: { ...timer, isRunning: false, intervalId: null } 
                };
            } else {
                // Iniciar o cronômetro
                const intervalId = setInterval(() => {
                    setRunningTimers((prevTimers) => ({
                        ...prevTimers,
                        [id]: { ...prevTimers[id], seconds: prevTimers[id].seconds + 1 },
                    }));
                }, 1000);
    
                return { 
                    ...prevTimers, 
                    [id]: { ...timer, isRunning: true, intervalId } 
                };
            }
        });
    };

    // Função para formatar tempo em HH:MM:SS
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <View style={styles.homeView}>
            {/* Lista de timers */}
            <FlatList
                data={timers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemText}>{item.category}</Text>
                        <View style={styles.itemIconDiv}>
                            <TouchableOpacity
                                style={[
                                    styles.itemButton,
                                    { backgroundColor: runningTimers[item.id]?.isRunning ? '#d9534f' : '#04AA6D' },
                                ]}
                                onPress={() => toggleTimer(item.id)}
                            >
                                <MaterialIcons name={runningTimers[item.id]?.isRunning ? "pause" : "play-arrow"} size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.itemText}>Completo: {formatTime(runningTimers[item.id]?.seconds || 0)}</Text>
                            <Text style={styles.itemText}>Meta: {item.timeGoal}</Text>
                        </View>
                    </View>
                )}
            />

            {/* Botão de adicionar */}
            <TouchableOpacity
                style={[styles.addButton]}
                onPress={() => navigation.navigate("Adicionar")}>
                <MaterialIcons name="add" size={35} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
