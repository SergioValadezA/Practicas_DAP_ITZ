import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/inicio/inicio';
import Acerca from './src/acerca/acerca';
import Ajustes from './src/ajustes/ajustes';
import DetalleAvisos from './src/avisos/Detalle';
import CrearAvisos from './src/avisos/Crear';
import EditarAvisos from './src/avisos/Editar';

import { createDrawerNavigator } from '@react-navigation/drawer';

function LogoTitulo() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/home.png')}
    />
  )
}

const Drawer = createDrawerNavigator();


function App({ navigation }) {
  const [textojAustes, setTextoAjustes] = React.useState("Hola mundo desde Ajustes");
  //donde se envia el textoAjustes a el componente Ajustes 
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Acerca" component={Acerca} />
        <Drawer.Screen name="DetalleAvisos" component={DetalleAvisos}
          options={{
            headerStyle: {
              backgroundColor: "rgba(151,132,102,0.8)"
            },
            title: "Mostrando aviso",
            drawerItemStyle: { height: 0 }
          }}
        />

        <Drawer.Screen name="CrearAvisos" component={CrearAvisos}
          options={{
            headerStyle: {
              backgroundColor: "rgba(151,132,102,0.8)"
            },
            title: "Registrar nuevo aviso",
            drawerItemStyle: { height: 0 }
          }}
        />

        <Drawer.Screen name="EditarAvisos" component={EditarAvisos}
          options={{
            headerStyle: {
              backgroundColor: "rgba(151,132,102,0.8)"
            },
            title: "Editar aviso",
            drawerItemStyle: { height: 0 }
          }}
        />

        
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


export default App;