import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    AddTimerView: {
        backgroundColor: "#af82fb",
        alignItems: "center",
        justifyContent: "center"
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#af82fb"
    },
    homeView: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: "#af82fb"
    },
    itemTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    item: {
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
    },
    itemText: {
        fontSize: 16,
    },
    itemIconDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    itemButton: {
        width: 40,
        height: 40,
        borderRadius: 20, // Metade da largura/altura para ser um círculo
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },
    addButton: {
        position: "absolute",
        right: 20,
        bottom: 40,
        backgroundColor: '#733684',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        overflow: "hidden",
        borderColor: "#733684",
        color: "#FFF",
        marginBottom: 15
    },
    dropdownButtonStyle: {
        borderColor: "#733684",
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginBottom: 15
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
    },
    dropdownButtonArrowStyle: {
        fontSize: 22,
        color: '#FFF',
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    saveButton: {
        marginTop: 15,
        backgroundColor: "#733684",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignSelf: "center",
    },

    saveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});