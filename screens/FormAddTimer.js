import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity }
    from 'react-native';
import { Timer } from '../data/timers/Timer';
import TimerManager from '../data/timers/TimerManager';
import { styles } from '../styles/CommonStyles';

export default function TimerForm({ navigation }) {
    const timerManager = new TimerManager();
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [timeLeft, setTimeLeft] = useState('');

    const save = () => {
        Aux = new Timer(parseInt(id), title, parseInt(timeLeft));
        timerManager.set(Aux)
                    .then(navigation.navigate('ListTimers'));
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Id'
                keyboardType={'numeric'} value={id}
                onChangeText={setId} />
            <TextInput style={styles.input} placeholder='Title'
                value={title} onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder='Quantidade'
                keyboardType={'numeric'} value={timeLeft}
                onChangeText={setTimeLeft} />
            <TouchableOpacity style={styles.button} onPress={save}>
                <Text style={styles.buttonTextBig}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}