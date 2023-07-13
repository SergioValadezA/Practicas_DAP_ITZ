import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function Mapas() {
  const default_coor = {
    coords: {
      accuracy: 36.90000152878906,
      altitude: 2292.9675073485228,
      altitudeAccuracy: 3,
      heading: 0,
      latitude: 22.7275401,
      longitude: -102.5219093,
      speed: 0,
    },
  };

  const [location, setLocation] = useState({});
  const [cordenadas, setCordenadas] = useState(default_coor);

  const busacarLocalizacion = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('No hay permisos para la geolocalización');
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    busacarLocalizacion();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.columnas}>
        <Text>Coordenadas</Text>
      </View>
      <View style={styles.columnas}>
        <MapView mapType="" style={styles.map}>
          {location.coords ? (
            <Marker
              coordinate={location.coords}
              title="Mi ubicacion actual"
              description="Aqui estoy"
            />
          ) : null}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#cdcdcd',
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
});
