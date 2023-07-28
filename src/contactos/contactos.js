import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Contacts from 'expo-contacts';
import Lista from './listaContactos';

export default function App() {
    default_users = [
        {
            'firstName': '',
            "lastName": '',
        }
    ];
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync(
                    {
                        fields: [Contacts.Fields.Emails],
                    }
                );
                if (data.length > 0) {
                    personas = [];
                    data.forEach(contacto => {
                        // console.log(contacto);
                        personas.push(contacto);
                    });
                    setUsers(personas);

                } else {
                    console.log('no encontro contactos');
                }
            } else {
                alert('No cuenta con permisos para acceder a los contactos');
            }
        })();//faltaba()
    }, [])
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>
                Ejemplo de importar contactos en consola
            </Text>
            <Lista users={default_users} />

        </View>
    )

}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#cdcdcd'
    },
    titulo: {
        padding: 20,
        fontSize: 32,

    }
})