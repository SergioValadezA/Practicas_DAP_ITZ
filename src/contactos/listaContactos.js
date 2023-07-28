import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

export default ( contactos ) => {
    console.log(contactos);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    console.log(DATA);

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.texto}>
                {title}
            </Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <Text>Hola desde el componente de lista</Text>
            <FlatList
                data={contactos}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: "#dfdf",
        padding: 20,
        fontSize: 18,
        borderBottomWidth: 5,
        borderBottomColor: "#ccc",
        color: "black",
    },
    texto: {
        fontSize: 32,

    }
})