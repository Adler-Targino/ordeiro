import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centerView: { 
        backgroundColor: "#F1F1F1", 
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
        borderColor: "#7f33ff",
        color: "#060606",
        marginBottom: 15
    },
    dropdownButtonStyle: {
        borderColor: "#7f33ff",
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
        fontSize: 16,
    },
    dropdownButtonArrowStyle: {
        fontSize: 22,
        color: '#7f33ff',
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
        backgroundColor: "#a170f4", // Verde estilo sucesso
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