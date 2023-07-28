import React, {useEffect, useState} from "react";
import { Button,View,StyleSheet } from "react-native";

const ButtonExample= () =>{

    useEffect(()=> {
        alert('Termino de renderizar el contendio y ejecuto el useeffect');

    })
    return(
    <View style={styles.container}>
        <Button
        title="Boton"
          color="#f194ff"
        onPress={()=>alert('Haz presionado un botón')}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    }
})

export default ButtonExample;