import React from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function App({ navigation, textojAustes, setTextoAjustes }) {
    console.log(navigation);
    return (
        <View style={styles.container}>
            <Text>{textojAustes}</Text>
            <Button title="Ir a inicio"
            onPress={()=>{
                navigation.navigate("Inicio")
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})