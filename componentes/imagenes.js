import React from "react";
import { View, Image, StyleSheet } from 'react-native';

const DisplayImagen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/itz.jpg')}
                style={styles.tinyLogo} />

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

            <Image style={styles.logo}
                source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }} />

        </View>

    )

}

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58
    },
    tinyLogo: {
        width: 40,
        height: 40
    },
    container: {
        paddingTop: 50
    }
})
export default DisplayImagen;