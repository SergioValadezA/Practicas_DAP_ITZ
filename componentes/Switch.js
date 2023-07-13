import React, {useState} from 'react';
import { View,Switch,StyleSheet } from 'react-native';

const App = () => {
    const [habilitado, SetHabilitado] = useState(false);
    const [texto_habilitado, SetTextoHabilitado] = useState('INACTIVO');


    function  cambiarTexto() {
        SetHabilitado(previusState => !previusState);
        if (texto_habilitado == "INACTIVO") {
            SetTEXTOHabilitado('ACTIVO')
        } else{
            SetTextoHabilitado('INACTIVO')
        }
    }

    return(
        <View style={styles.container}>
            trackColor={false: '#767577', true: '#811b0ff'}}
            thumbColor={habilitado ? '#f5dd4b' : '#'} 
            ios_backgroundColor="#3e3e3e"
            onValueChange={}
        </View>
    )
})






const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})