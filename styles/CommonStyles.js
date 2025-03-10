import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centerView: { 
        backgroundColor: "#af82fb", 
        alignItems: "center", 
        justifyContent: "center" 
    },
    textInput: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        overflow: "hidden",
        borderColor: "#f9a86c",
        color: "#FFF",
        marginBottom: 15
    },
    dropdownButtonStyle: {
        borderColor: "#f9a86c",
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
        backgroundColor: "#f9a86c", // Verde estilo sucesso
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