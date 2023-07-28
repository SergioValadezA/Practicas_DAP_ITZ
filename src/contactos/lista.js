import React from 'react';
import { View, Text, Image, ScrollView, FlatList,StyleSheet } from 'react-native';


/*
firstName
*/

const ContactoItem = ({ user }) => (
  <View style={{ marginBottom: 20 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.firstName}</Text>
    <Text>{user.lastName}</Text>
  </View>
);

export default ({ users }) => {
  <FlatList style={styles.lista}
            data={users.map(n => n.firstName)}
            renderItem={({ user }) => <Text style={styles.item}>Nombre:{user}</Text>}
            keyExtractor={user => user}
        />
}

const styles = StyleSheet.create({
  lista: {
      backgroundColor: '#fff',
     
  }, item: {
      backgroundColor: "#dfdf",
      padding: 20,
      fontSize: 18,
      borderBottomWidth: 5,
      borderBottomColor: '#ccc',
      color: 'black',
  },
});
