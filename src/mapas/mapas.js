import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function Mapas() {

    const [nombre,setNombre] = useState("Luis");

    const default_coor = {
        "coords": {
            "accuracy": 36.900001525878906,
            "altitude": 2292.9675073485228,
            "altitudeAccuracy": 3,
            "heading": 0,
            "latitude": 22.7275401,
            "longitude": -102.5219093,
            "speed": 0,
        }
    };

    const [location, setLocation] = useState({});
    const [coordenadas, setCordenadas] = useState(default_coor);

    const buscarLocalizacion = async () => {

        const { status } = await Location.requestForegroundPermissionsAsync()
       
        if (status !== "granted") {
            return Alert.alert("No hay permisos para la geolocalización");
        }

        const location = await Location.getCurrentPositionAsync({})
        setLocation(location);
    }
    useEffect(() => {
        buscarLocalizacion();
        //despues de renderizar el contenido ejecut la funcion useffect automaticamente
        //fecthData(1);
    }, []);

    async function fecthData(id){
        if(id > 0){
            const ruta = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
            const json = await ruta.json();
        }else{
            alert('El id es invalido');
            return false;
        }

        if(json == null ){         
            alert('No se encontraron resultados');
            return false;
        }else{
            const localizacion ={
                coords:{
                    "latitude":parseFloat(json.address.geo.lat),
                    "longitude":parseFloat(json.address.geo.lng),
                }
            };
            setLocation(localizacion);
            setNombre(json.name);
        }
    }

    const [user,setUser] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.columnas}>
                <Text>Coordenadas</Text>
            </View>
            <View style={styles.columnas}>
                <MapView mapType={'satellite'} style={styles.map}>
                    {
                        location.coords ?
                            <Marker coordinate={location.coords}
                                title="Mi ubicación actual"
                                description="Aqui estoy"
                                pinColor="blue"
                                icon={{uri:'https://cdn.pixabay.com/photo/2022/12/14/21/47/raccoon-7656362_640.png'}}
                            />
                            :
                            null
                    }
                </MapView>
            </View>
            <View style={styles.columna_2}>
                <Text>Ingrese el ID del Usuario</Text>
                <Text>Mostrando ubicacion de: {nombre} </Text>
                <TextInput
                style={styles.input}
                placeholder='Ingrese el id del usuario'
                keyboardType='numeric'
                onChangeText={(value) =>{
                    setUser(value)
                }}
                />
                <Button
                color="#556b2f"
                title='Buscar coordenadas del usuario'
                onPress={() => fecthData(user)}
                />                
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#cdcdcd'
    },
    columnas: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height - 100,
    },
    columna_2:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderRadius:100
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,

    }
})
