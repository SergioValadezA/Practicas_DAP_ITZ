import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

    const [type, setType] = useState(CameraType.back);
    const [permisos, requestPermisos] = Camera.useCameraPermissions();

    if (!permisos) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permisos.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>Necesitas permisos</Text>
                <Button onPress={requestPermisos} title="Obtener permission" />
            </View>
        );
    }

    function cambiarCamara() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camara_style} type={type}>
                <View style={styles.boton}>
                    <TouchableOpacity style={styles.button} onPress={cambiarCamara}>
                        <Text style={styles.texto}>Voltear Camara</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camara_style: {
        flex: 1,
    },
    boton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    boton_sec: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
