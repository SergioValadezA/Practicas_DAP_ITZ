import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";
import * as Calendar from 'expo-calendar';

export default function App() {
    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status == "granted") {
                const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
                console.log("ESTOS SON TUS CALENDARIOS");
                console.log({ calendars });
            }
        })();
    }, []);


    async function getDefaultCalendarSource(){
        const defaultCalendar = await Calendar.getDefaultCalendarAsync();
        return defaultCalendar.source;
    }

    async function crearCalendario(){
        alert('entro');
        const defaultCalendarSource =
            Platform.OS == 'ios'
            ? await getDefaultCalendarSource()
            :{ isLocalAccount : true, name:'Calendario Expo'};

            const newCalendarId = await Calendar.createCalendarAsync({
                title: 'Calendario Expo',
                color: 'blue',
                entityType: Calendar.EntityTypes.EVENT,
                sourceId: defaultCalendarSource.id,
                source:defaultCalendarSource,
                name: 'Nombre de Calendario ',
                ownerAccount:'personal',
                accessLevel:Calendar.CalendarAccessLevel.OWNER,
            });
           console.log(newCalendarId)
       //     console.log(`calendario creado correctamente id: ${newCalendarID}`);
    }
    return (
        <View style={styles.container}>
            <Text>Ejemplo de Calendario</Text>
            <Button style={styles.boton}
            title="creasr nuevo calendario" onPress={crearCalendario} />          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:20,
    },
    boton:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    }
})
