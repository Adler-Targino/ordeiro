import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`
import { Audio } from "expo-av"; // for audio feedback (click sound as you scroll)
import * as Haptics from "expo-haptics"; // for haptic feedback

import { styles } from '../styles/CommonStyles';

const Categorias = [
    { title: 'Estudos', icon: 'school' },
    { title: 'Trabalho', icon: 'work' },
    { title: 'Esportes', icon: 'directions-run' },
    { title: 'Lazer', icon: 'local-bar' },
    { title: 'Meditação', icon: 'self-improvement' },
    { title: 'Outro', icon: 'diamond' },
    { title: 'Estudos', icon: 'school' },
    { title: 'Trabalho', icon: 'work' },
    { title: 'Esportes', icon: 'directions-run' },
    { title: 'Lazer', icon: 'local-bar' },
    { title: 'Meditação', icon: 'self-improvement' },
    { title: 'Outro', icon: 'diamond' },
];

function FormAddTimer({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    const [showPicker, setShowPicker] = useState(false);
    const [alarmString, setAlarmString] = useState(null);

    const formatTime = ({ hours, minutes, seconds }) => {
        const timeParts = [];

        if (hours !== undefined) {
            timeParts.push(hours.toString().padStart(2, "0"));
        }
        if (minutes !== undefined) {
            timeParts.push(minutes.toString().padStart(2, "0"));
        }
        if (seconds !== undefined) {
            timeParts.push(seconds.toString().padStart(2, "0"));
        }

        return timeParts.join(":");
    };


    return (
        <SafeAreaProvider style={[styles.centerView, { marginTop: -150 }]}>
            <SafeAreaView>
                {/* Título */}
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    placeholder="Título"
                    placeholderTextColor='#FFF'
                    value={text}
                />
                {/* Categoria */}

                <SelectDropdown
                    data={Categorias}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                {selectedItem && (
                                    <MaterialIcons name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                                )}
                                <Text style={styles.dropdownButtonTxtStyle}>
                                    {(selectedItem && selectedItem.title) || 'Categoria'}
                                </Text>
                                <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} style={styles.dropdownButtonArrowStyle} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <ScrollView style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <MaterialIcons name={item.icon} style={styles.dropdownItemIconStyle} />
                                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                            </ScrollView>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                {/* Timer picker */}
                <View>
                    <Text style={styles.textInput}
                        onPress={() => setShowPicker(true)}>
                        {alarmString !== null
                            ? "Duração da tarefa"
                            : "Selecione a duração da tarefa"}
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setShowPicker(true)}>
                        <View style={{ alignItems: "center" }}>
                            {alarmString !== null ? (
                                <Text style={{ color: "#202020", fontSize: 48 }}>
                                    {alarmString}
                                </Text>
                            ) : null}
                        </View>
                    </TouchableOpacity>
                    <TimerPickerModal
                        visible={showPicker}
                        setIsVisible={setShowPicker}
                        onConfirm={(pickedDuration) => {
                            setAlarmString(formatTime(pickedDuration));
                            setShowPicker(false);
                        }}
                        modalTitle="Set Alarm"
                        onCancel={() => setShowPicker(false)}
                        closeOnOverlayPress
                        use12HourPicker
                        Audio={Audio}
                        LinearGradient={LinearGradient}
                        Haptics={Haptics}
                        styles={{
                            theme: "light",
                        }}
                    />
                </View>
                {/* Botão salvar */}
                <TouchableOpacity style={styles.saveButton} onPress={() => console.log("Salvo!")}>
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default FormAddTimer