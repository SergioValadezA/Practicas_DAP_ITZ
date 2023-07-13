import React, { useState,useEffect } from "react";
import { Button, Linking, StyleSheet, View,Text } from "react-native";

const useInittailURL = () =>{
    const [url, setUrl] = useState(null);
    const [proccessing, setPreocessing]=useState(true);

    useEffect(() =>{
        const getUrlAsync = async () => {
            const useInittailUrl = await Linking.getInitialURL();

            setTimeout(() =>{
                setUrl(getInitialUrl);
                setPreocessing(false);
            },1000);
        };
        getUrlAsync();
    },[]);
    return {url, proccessing}
};

const App = () => {
    const { url: initialUrl, proccessing} = useInittailURL();
    return(
        <View style={styles.container}>
            <Text>
                {proccessing
                ?'procesando la url inicial desde un enlace profundo'
            : `El enlace es : ${getInitialUrl || 'Ninguno'}`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App;