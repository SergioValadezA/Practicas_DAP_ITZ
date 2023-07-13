import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const imagen_url= {uri:'https://legacy.reactjs.org/logo-og.png'};

const Imagen = () => (
    <View style={styles.container}>
        <ImageBackground source={imagen_url} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Hola mundo desde una imagen de fondo</Text>
        </ImageBackground>
    </View>
);

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex: 1,
        justifyContent:'center',
    },
    text:{
        color:'white',
        fontSize:42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor: '#000000c0',
        opacity:0.5,
    }
});
export default Imagen;