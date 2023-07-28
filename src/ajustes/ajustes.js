import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App({ navigation, textoAjustes, setTextoAjustes }) {
    console.log(navigation)
    return (
        <View>
            <Text>{textoAjustes}</Text>
            <Button title="Ir a Inicio"
                onPress={() => {
                    navigation.navigate('Inicio');

                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    }
});