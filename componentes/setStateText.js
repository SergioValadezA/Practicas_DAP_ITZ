import React, {useState} from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponenteTexto = ()=>{

  const[titulo,setTitulo]=useState("Hola soy ITZ ");
  const texto = "Hola mundo";

  //funcion
  const presionarTitulo = () =>{
    alert("Presionaste");
    setTitulo("Hola mapaches");

  };
  return(
    <Text style={styles.basetexto}>
        {'\n'}

      <Text style={styles.TituloTexto} onPress={presionarTitulo}>
        {titulo}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{texto}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  TituloTexto:{
    fontSize: 20,
    
  },
  basetexto:{
    fontSize: 40,
   fontWeight:'bold'
  }
})

export default ComponenteTexto;