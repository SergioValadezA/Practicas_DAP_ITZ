import React, { useState } from "react";
import { FlatList,SafeAreaView,StatusBar,StyleSheet,Text,TouchableOpacity } from "react-native";


const DATOS = [
    { id: 1, nombre: 'Jorge..' },
    { id: 2, nombre: 'Raùl' },
    { id: 3, nombre: 'Karla' },
    { id: 4, nombre: 'jesus' },
    { id: 5, nombre: 'Rocio' },
    { id: 6, nombre: 'Pedro' }];



    const Item = ({item, onPress, backgroundColor, textColor}) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
          <Text style={[styles.texto, {color: textColor}]}>{item.nombre}</Text>
        </TouchableOpacity>
      );

    const TouchList = () =>{
        const [selectId, setSelectId] = useState();

        const renderizaItem = ({item}) =>{
            const backgroundColor = item.id === selectId ? '#6e3b6e' : '#f9c2ff';
            const color = item.id === selectId ? 'white' : 'black';

            return(
                <Item
                item={item}
                onPress={()=>setSelectId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
                />
            );
        }

        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={DATOS}
                renderItem={renderizaItem}
                keyExtractor={item => item.id}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                extraData={selectId}
                />
            </SafeAreaView>
        );
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
        },
        item:{
            padding:20,
            marginVertical:8,
            marginHorizontal:16
        },
        texto:{
            fontSize:32,
         
        }
    })

    export default TouchList;