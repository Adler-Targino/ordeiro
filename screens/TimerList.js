import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import TimerItem from './TimerItem';
import TimerManager from '../data/timers/TimerManager';
import { styles } from '../styles/CommonStyles';
import { useIsFocused } from '@react-navigation/native';

export default function TimerList({ navigation }) {
    const manager = new TimerManager();
    const [timers, setTimers] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        manager.getAll()
            .then(objs => setTimers(objs));
    }, [isFocused]);

    const myKeyExtractor = item => {
        return item.id.toString();
    };

    function deleteTimer(id) {
        manager.remover(id)
            .then(manager.getAll()
                .then(objs => setTimers(objs))
            );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('AddTimer')}>
                <Text style={styles.buttonTextBig}>Novo timer</Text>
            </TouchableOpacity>
            <FlatList style={styles.scrollContainer} data={timers}
                contentContainerStyle={styles.itemsContainer}
                keyExtractor={myKeyExtractor}
                renderItem={({ item }) =>
                    <TimerItem onDelete={() => deleteTimer(item.id)} timer={item} />
                }
            />
        </View>
    );
}
