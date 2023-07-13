import React from 'react';
import {View, TextInput} from 'react-native';

const  ejemploTextInput = () =>{
    const [valor, setvalor]= React.useState('Hola mundo desde un input text');
    return(
        <View>
            <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChange={text =>setvalor(text)}
            value={valor}
            style={{padding: 10}}
            >

            </TextInput>
        </View>
    )
}

export default ejemploTextInput;