import React from "react";
import { ScrollView, StatusBar, Text, StyleSheet, SafeAreaView } from "react-native";

const scrollApp = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.texto}>
                    ---REFERENTE A LA CARRERA DE ARQUITECTURA	coordinacion.arq@zacatecas.tecnm.mx
                    2	REFERENTE A LA CARRERA DE INGENIERÍA EN GESTIÓN EMPRESARIAL	coordinacion.ecoadmin@zacatecas.tecnm.mx
                    3	REFERENTE A LA CARRERA DE LICENCIATURA EN ADMINISTRACIÓN	coordinacion.ecoadmin@zacatecas.tecnm.mx
                    4	REFERENTE A LA CARRERA DE INGENIERÍA INDUSTRIAL	coordinacion.ind@zacatecas.tecnm.mx
                    5	REFERENTE A LA CARRERA DE INGENIERÍA ELECTROMECÁNICA	coordinacion.metalmec@zacatecas.tecnm.mx
                    6	REFERENTE A LA CARRERA DE INGENIERÍA EN MATERIALES	coordinacion.metalmec@zacatecas.tecnm.mx
                    7	REFERENTE A LA CARRERA DE INGENIERÍA EN SISTEMAS COMPUTACIONALES	coordinacion.sistemasycomp@zacatecas.tecnm.mx
                    8	REFERENTE A LA CARRERA DE INGENIERÍA INFORMÁTICA	coordinacion.sistemasycomp@zacatecas.tecnm.mx
                    9	REFERENTE A LA MAESTRÍA EN ADMINISTRACIÓN	coord.mad@zacatecas.tecnm.mx
                    10	REFERENTE A LA MAESTRÍA EN SISTEMAS COMPUTACIONALES	coord.msc@zacatecas.tecnm.mx
                    11	REFERENTE A LA MAESTRÍA EN ARQUITECTURA	coord.marq@zacatecas.tecnm.mx
                    12	DIVISIÓN DE ESTUDIOS DE POSGRADO	depi_zacatecas@tecnm.mx
                    13	TRASLADOS, EQUIVALENCIAS, CONVALIDACIONES	dep_zacatecas@tecnm.mx
                    14	BECAS Y SEGURO SOCIAL	becas_seguro@zacatecas.tecnm.mx
                    15	SERVICIOS ESCOLARES (SOLICITUD DE CONTANCIAS Y KÁRDEX)	cloudtec@itz.edu.mx
                    16	SACAR CITA PARA RECOGER TÍTULOS YA EXPEDIDOS	titulacion@zacatecas.tecnm.mx
                    17	SERVICIO SOCIAL Y RESIDENCIAS PROFESIONALES	vin_zacatecas@tecnm.mx
                    18	ACTIVIDADES EXTRAESCOLARES	ext_zacatecas@tecnm.mx
                    19	PARA INICIAR TRÁMITE DE TITULACIÓN: DA CLICK AQUI PARA VER EL PROCESO
                </Text>

            </ScrollView>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flexDirection: 'row'
    },
    scrollView: {
        backgroundColor: 'blue',
        marginHorizontal: 40,
    },
    texto: {
        fontSize: 40,
    }

})

export default scrollApp;