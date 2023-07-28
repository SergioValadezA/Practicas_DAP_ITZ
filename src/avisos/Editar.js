import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";

import Constants from "expo-constants";
import axios from "axios";
import { useEffect } from "react";
import { Button, Select, Center, NativeBaseProvider, CheckIcon, Spinner, HStack, Heading, FormControl, Input, Divider, Box } from "native-base";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/`;


export default function App({ route, navigation }) {

    const { id } = route.params;
    const [datos, setDatos] = useState([]);
    const [cargando, setGargando] = useState(true);
    //datos para actualizar
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripciion] = useState("");
    const [url_imagen, setUrlImagen] = useState("");
    const [estado, setEstado] = useState("");

    const [error_nombre, setErrorNombre] = useState(null);
    const [error_descripcion, setErrorDescripcion] = useState(null);
    const [error_imagen, setErrorImagen] = useState(null);
    const [error_estado, setErrorestado] = useState(null);

    const estado_list = ['ACTIVO', 'INACTIVO'];

    async function ValidarAviso() {
        if (nombre == null || nombre == "") {
            setErrorNombre("El nombre es obligatorio");
        } else {
            setErrorNombre("")
            if (descripcion == null || descripcion == "") {
                setErrorDescripcion("La descripción es obligatoria");
            } else {
                setErrorDescripcion("");
                if (url_imagen == null || url_imagen == "") {
                    setErrorImagen("La URL de la imagen es obligatoria");
                } else {
                    setErrorImagen("");
                    if (estado == null || estado == "") {
                        setErrorestado("El estado es obligatorio");
                    } else {
                        setErrorestado("");
                        //ya se realizaron todas las validacion
                        //enviar la peticion post para guardar los datos
                        ActualizarAviso();
                    }
                }
            }
        }

    }

    const traerdatos = async (id_aux) => {
        console.log('traer_aviso');
        const data = { id: id_aux };
        console.log(id_aux);
        const response = await axios.get(uri + 'mostrar_avisos', {
            params: data
        });
        const result = await response.data;
        setDatos(result);
        setNombre(result.nombre);
        setDescripciion(result.descripcion);
        setUrlImagen(result.url_imagen);
        setEstado(result.estado);
        setGargando(false);
    }

    async function ActualizarAviso() {
        const data = {
            nombre: nombre, descripcion: descripcion, url_imagen: url_imagen,
            estado: estado
        };

        const response = await axios.post(uri + 'actualizar_aviso?'+'id='+id+ '&nombre=' + nombre + '&descripcion=' + descripcion + '& url_imagen=' + url_imagen + '& estado=' + estado);
        //const response = await fetch((uri + 'actualizar_aviso?'+'id='+id+ '&nombre=' + nombre + '&descripcion=' + descripcion + '& url_imagen=' + url_imagen + '& estado=' + estado,{  method: "POST",})
        const result = await response.data;
        console.log(result);
        alert('datos actualizados');
        navigation.navigate('Inicio');
    }

    useEffect(() => {
        traerdatos(id);
    }, [id]);


    if (cargando == true) {
        return (
            <NativeBaseProvider>
                <Center flex={1} px="3">
                    <HStack space={2} alingItems="center">
                        <Spinner accessibilityLabel="Cargando aviso" />
                        <Heading color="primary.500">Cargando aviso...</Heading>
                    </HStack>
                </Center>
            </NativeBaseProvider>
        )

    } else {
        return (
            <NativeBaseProvider>
                <FormControl ml="1.5" isRequired>
                    <FormControl.Label _text={{ bold: true }}>
                        Nombre del aviso
                    </FormControl.Label>
                    <Input
                        w="90%"
                        value={nombre}
                        placeholder="Ingresa el nombre del aviso"
                        onChangeText={(value) => setNombre(value)}
                        maxLength={250}
                    />
                    <FormControl.HelperText
                        _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}>
                        {error_nombre}
                    </FormControl.HelperText>
                </FormControl>
                <Divider my="2" />

                <FormControl ml="1.5" isRequired>
                    <FormControl.Label _text={{ bold: true }}>
                        Descripción del aviso
                    </FormControl.Label>
                    <Input
                        w="90%"
                        value={descripcion}
                        placeholder="Ingresa la descripción del aviso"
                        onChangeText={(value) => setDescripciion(value)}
                        maxLength={250}
                    />
                    <FormControl.HelperText
                        _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}>
                        {error_descripcion}
                    </FormControl.HelperText>
                </FormControl>
                <Divider my="2" />

                <FormControl ml="1.5" isRequired>
                    <FormControl.Label _text={{ bold: true }}>
                        Url de la imagen del aviso
                    </FormControl.Label>
                    <Input
                        w="90%"
                        value={url_imagen}
                        placeholder="Ingresa la url de imagen del aviso"
                        onChangeText={(value_imagen) => setUrlImagen(value_imagen)}
                        maxLength={250}
                    />
                    <FormControl.HelperText
                        _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500 }}>
                        {error_imagen}
                    </FormControl.HelperText>
                </FormControl>
                <Divider my="2" />

                <FormControl ml="1.5" isRequired>
                    <Text italic mt="1.5" ml="1.5">
                        Estado del aviso
                    </Text>
                    <Box w="100%">
                        <Select
                            selectedValue={estado}
                            accessibilityLabel="Seleccione el estado del aviso"
                            placeholder="Seleccione el estado del aviso"
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }}
                            mt={1}
                            onValueChange={itemvalue => setEstado(itemvalue)}>
                            {estado_list.map(estado =>
                                <Select.Item
                                    key={estado}
                                    label={estado}
                                    value={estado}
                                />)}
                        </Select>
                    </Box>
                    <Divider my="2" />
                    <Center>
                        <Button onPress={() => ValidarAviso()} size="sm" colorScheme="primary">
                            Actualizar aviso
                        </Button>
                    </Center>
                </FormControl>

            </NativeBaseProvider>
        )

    }


}