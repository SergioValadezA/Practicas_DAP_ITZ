import React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from 'expo-speech';

export default function App() {
    const voz = () => {
        const palabra = "Hola mundo desde desarrollo de Aplicaciones Moviles";
        tipos_voz = Speech.getAvailableVoicesAsync;
        console.log(tipos_voz);
    
        Speech.speak(palabra,{_voiceIndex:3,language:'spanish',pitch:-10.5});
    };

    return (
        <View style={styles.container}>
            <Button title="Reproducir voz" onPress={voz} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ecf0f1",
        padding: 8,
    }
})