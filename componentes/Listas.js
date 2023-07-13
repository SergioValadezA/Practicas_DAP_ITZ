import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATOS = [
{ id: 1, nombre: 'Juan' },
{ id: 2, nombre: 'Pedro' },
{ id: 3, nombre: 'Luis' },
{ id: 4, nombre: 'Manuel' },
{ id: 5, nombre: 'Josè' },
{ id: 6, nombre: 'Maria' }];

const Item = ({ nombre }) => (
    <View style={styles.item}>
        <Text style={styles.texto}>
            {nombre} ***
        </Text>
    </View>
)

const Lista = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={DATOS}
            renderItem={({item}) => <Item nombre={item.nombre}/>}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
    },
    item:{
        backgroundColor:'#f9c2ff',
        padding:20,
        marginVertical:8,
        marginHorizontal:16
    },
    texto:{
        fontSize:32,
     
    }

})

export default Lista;