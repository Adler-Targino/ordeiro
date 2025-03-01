import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { styles } from '../styles/CommonStyles';

const Categorias = [
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

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    placeholder="Título"
                    value={text}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Categoria"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Pretensão de tempo"
                    keyboardType="numeric"
                />

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
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <MaterialIcons name={item.icon} style={styles.dropdownItemIconStyle} />
                                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default FormAddTimer