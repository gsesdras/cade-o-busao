import React from "react";
import { View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

const Linhas = () => {
    const state = [
        {
            chegada: "18:00",
            linha: "255",
            saida: "19:00",
        },
        {
            chegada: "18:00",
            linha: "255",
            saida: "19:00",
        },
    ];

    const renderState = state.map((line) => {
        return (
            <View style={styles.linha}>
                <Text style={styles.horario}>{line.chegada}</Text>
                <Text style={styles.nLinha}>{line.linha}</Text>
                <Text style={styles.horario}>{line.saida}</Text>
            </View>
        );
    });

    return <View style={styles.container}>{renderState}</View>;
};

const styles = StyleSheet.create({
    linha: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
        backgroundColor: "#e2e2e2",
        borderRadius: 15,
        margin: 10,
    },
    horario: {
        fontSize: 35,
        margin: 15,
        color: "#000",
    },
    nLinha: {
        fontSize: 35,
        margin: 15,
        marginRight: 50,
        marginLeft: 50,
        color: "#ff9d00",
    },
});

export default Linhas;