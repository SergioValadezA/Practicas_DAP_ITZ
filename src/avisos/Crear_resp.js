import React, { useState } from "react";
import {
    Divider, Button, AspectRatio, CheckIcon, FormControl, Input, NativeBaseProvider,
    Center, Image, Text, Box, Select
} from "native-base";
import axios from 'axios';


//importamos estas liberias para poder consumir nuestra app local 
import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/`;


export default function App({navigation}) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripciion] = useState("");
    const [url_imagen, setUrlImagen] = useState("");
    const [estado, setEstado] = useState("");

    const [error_nombre, setErrorNombre] = useState(null);
    const [error_descripcion, setErrorDescripcion] = useState(null);
    const [error_imagen, setErrorImagen] = useState(null);
    const [error_estado, setErrorestado] = useState(null);

    const estado_list = ['ACTIVO', 'INACTIVO'];

    async function ValidarAviso(){
        if(nombre == null || nombre == ""){
            setErrorNombre("El nombre es obligatorio");          
        }else{
            setErrorNombre("")
            if(descripcion == null || descripcion == ""){
                setErrorDescripcion("La descripción es obligatoria");
            }else{
                setErrorDescripcion("");
                if(url_imagen == null || url_imagen == ""){
                    setErrorImagen("La URL de la imagen es obligatoria");
                }else{
                    setErrorImagen("");
                    if(estado == null || estado == ""){
                        setErrorestado("El estado es obligatorio");
                    }else{
                        setErrorestado("");
                        //ya se realizaron todas las validacion
                        //enviar la peticion post para guardar los datos
                        guardarAviso();
                    }
                }
            }
        }

    }
    async function guardarAviso(){
        const data ={nombre:nombre, descripcion:descripcion, url_imagen:url_imagen,
        estado:estado};
        
        const response = await axios.post(uri + 'avisos?'+'nombre='+nombre+'&descripcion='+descripcion+'& url_imagen='+url_imagen+'& estado='+estado);
        const result = await response.data;
        console.log(result);
        navigation.navigate('Inicio');
    }

    return (
        <NativeBaseProvider>
            <Box>
                <AspectRatio w="100%" ratio={9 / 1}>
                    <Image
                        source={{ uri: "http://sit-zac.org.mx/welcome_template/assets/img/edificio.png" }}
                        alt="image"
                    />
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
                >
                    Información del aviso
                </Center>
            </Box>
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
                    onChangeText={(value) => setUrlImagen(value)}
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
                <Divider my="2"/>
                <Center>
                    <Button onPress={() => ValidarAviso()} size="sm" colorScheme="primary">
                        Guardar aviso
                    </Button>
                </Center>
            </FormControl>
        </NativeBaseProvider>

    )
}