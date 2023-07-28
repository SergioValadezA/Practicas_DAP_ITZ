import React, { useEffect, useState } from "react";
import {
    Button, Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack,
    NativeBaseProvider, Spinner, Fab, Modal
} from "native-base";

import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import axios from 'axios';

//importamos estas liberias para poder consumir nuestra app local 
import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/`;


export default function App({ route, navigation }) {
    console.log('parametros de route');
    console.log(route);
    const { id } = route.params;
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mostrar_modal, setMostrarModal] = useState(false);

    //modal

    const traerdatos = async (id_aux) => {
        const data = { id: id_aux };
        const response = await axios.get(uri + 'mostrar_avisos', {
            params: data
        });
        /*
                const response = await fetch(
                    uri + 'mostrar_aviso'+"?id="+id_aux,
                  );
        */

        const result = await response.data;
        setDatos(result);
        setCargando(false);
    }

    useEffect(() => {
        traerdatos(id);
    }, [id])

    async function eliminarAviso(){
        const response = await axios.post(uri + 'eliminar_aviso?'+'id='+id);
        //const response = await fetch((uri + 'actualizar_aviso?'+'id='+id+ '&nombre=' + nombre + '&descripcion=' + descripcion + '& url_imagen=' + url_imagen + '& estado=' + estado)
        const result = await response.data;
        console.log(result);
        alert('aviso eliminado');
        navigation.navigate('Inicio');
    }



    if (cargando == true) {
        return (
            <NativeBaseProvider>
                <Center flex={1} px="3">
                    <HStack space={2} alignItems="center">
                        <Spinner accessibilityLabel="Cargando aviso" />
                        <Heading color="primary.500" fontSize="md">Cargando avisos...</Heading>
                    </HStack>
                </Center>
            </NativeBaseProvider>
        )

    } else {
        return (
            <NativeBaseProvider>

                <Modal isOpen={mostrar_modal} onClose={() => setMostrarModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.Header>¿Estas seguro?</Modal.Header>
                        <Modal.Body>
                            <Box pl="6" _text={{ color: "danger" }}>
                                Eliminar
                            </Box>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray"
                                    onPress={() => { setMostrarModal(false); }}>
                                    Cancelar
                                </Button>
                                <Button onPress={() =>{ setMostrarModal(false) & eliminarAviso();}}>
                                    Si
                                </Button>

                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>

                </Modal>

                <Center flex={1} px="3">
                    <Box
                        width="100%"
                        height="100%"
                        rounded="xl"
                        overflow="hidden"
                        borderColor="coolGray.200"
                        borderWidth="1"
                    >
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                {(() => {
                                    if (datos.url_imagen != "") {
                                        const IMG_URL = datos.url_imagen;
                                        return (
                                            <Image key={datos.id} source={{ uri: IMG_URL }} alt="image" style={styles.image} />
                                        )
                                    } else {
                                        return (
                                            <Image key={datos.id} source={{ uri: 'http://sit-zac.org.mx/welcome_template/assets/img/edificio.png' }} alt="image" style={styles.image} />
                                        )

                                    }
                                })()}
                            </AspectRatio>
                            <Center
                                bg="#rgb(151, 132, 102)"
                                _dark={{
                                    bg: "#rgb(151, 132, 102)",
                                }}
                                _text={{
                                    color: "warmGray.50",
                                    fontWeight: "700",
                                    fontSize: "xs",
                                }}
                                position="absolute"
                                bottom="0"
                                px="3"
                                py="1.5"
                            >
                                {datos.nombre}
                            </Center>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    {datos.nombre}
                                </Heading>

                            </Stack>

                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                        fontWeight="400"
                                    >
                                        {datos.descripcion}.
                                    </Text>
                                </HStack>
                            </HStack>

                            <HStack alignItems="center" space={4} 
                            justifyContent="space-between">
                                <Button onPress={() => navigation.navigate('EditarAvisos', { id: id })}
                                    size="md" colorScheme="primary">Editar aviso</Button>
                            </HStack>
                            <HStack alignItems="center" space={4} 
                            justifyContent="space-between">
                                <Button onPress={() => setMostrarModal(true)} 
                                size="md" colorScheme="error">Eliminar aviso</Button>
                            </HStack>
                        </Stack>
                    </Box>


                </Center>
                <Box h={-40} position="relative" w="30%">
                    <Fab
                        onPress={() => navigation.navigate('CrearAvisos')}
                        right={2}
                        key={1}
                        bottom={20}
                        borderRadius="full"
                        colorScheme="primary"
                        placement="bottom-right"
                        icon={
                            <FontAwesome
                                name="plus-circle"
                                size={24}
                                color="white" />
                        }
                        label="Registrar nuevo aviso"
                    />
                </Box>



            </NativeBaseProvider >
        )
    }

}

const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginLeft: 10,
    }
})