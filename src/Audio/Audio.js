import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';
import { Audio } from 'expo-av';

const Cancion = require('../../assets/Hello.mp3');

export default function App() {
  const [Lista, SetLoaded] = useState(false);
  const [Cargando, SetLoading] = useState(false);
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    Cargar();
  }, []);

  const ReproducirAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {
      console.log('se encontro un error de tipo:' + error);
    }
  };

  const Pausar = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {
      console.log('se encontro un error de tipo:' + error);
    }
  };

  const Cargar = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(Cancion, {}, true);
        //
        //currentSong = SoundPlayer.playUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log('Error in Loading Audio');
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.AudioPLayer}>
        {Cargando ? (
          <ActivityIndicator size={'small'} color={'red'} />
        ) : (
          <>
            {Lista === false ? (
              <>
                <ActivityIndicator />
                <Text> Cargando cancion...</Text>
              </>
            ) : (
              <>
                <Button title="Reproducir" onPress={ReproducirAudio} />
                <Button title="Pausar" onPress={Pausar} />
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
  AudioPLayer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});