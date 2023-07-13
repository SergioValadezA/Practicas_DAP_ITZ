import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from "react-native";

const Separador = () => <View style={StyleSheet.separador}></View>;

const ListaBotones = () => {
    return (
        <SafeAreaView>
            <View style={styles.contenedor_principal}>
                <View>
                    <Text style={styles.titulo}>
                        Este es un ejemplo de un botón que al presionarlo lanza un mensaje
                    </Text>
        
                </View>
                <Separador />
                <View>
                    <Text style={styles.titulo}>
                        Este es un ejemplo de un botón con color diferente

                    </Text>
                    <Button color="pink" title='Presion el botón rosa' onPress={() => alert("Este es un simple botón con un cambio de color")} />

                </View>
                <Separador />
                <View>
                    <Text style={styles.titulo}>
                        Este es un ejemplo de un botón inactivo
                    </Text>
                    <Button title='Botón inactivo' disabled />
                </View>
                <Separador />
                <View style={styles.ordena_botones}>
                    <Button title='Boton izquierda' />
                    <Button title='Botón derecha'/>

                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    separador: {
        marginVertical: 8,
        borderColor: "#FE5F00",
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    titulo: {
        textAlign: 'center',
        marginVertical: 8,

    },
    ordena_botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    contenedor_principal:{
        flex: 1,
        justifyContent:'center',
        marginHorizontal: 8,

    },

})

export default ListaBotones;