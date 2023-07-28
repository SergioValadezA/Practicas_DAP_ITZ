import React, { useCallback } from "react";
import { Button, Linking, StyleSheet, View } from "react-native";

const AbrirAjustesBoton = ({ hijo }) => {
    console.log(hijo);
    const handPrees = useCallback(async () => {
     await Linking.openSettings();   
    }, []);
    return <Button title="Abrir ajustes" onPress={handPrees}/>
} ;

const App = ()=>{
    return(
        <View style={styles.container}>
            <AbrirAjustesBoton>Abrir ajustes!!</AbrirAjustesBoton>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default App;