import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Ahorros = () => {
    const [ahorro, setAhorro] = useState(0);

    const incrementar = () => {
        setAhorro(ahorro + 10);
    };

    const resetear = () => {
        setAhorro(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Ahorros: ${ahorro}</Text>
            <View style={styles.buttonContainer}>
                <Ionicons name="add-circle" size={70} color="green" onPress={incrementar} />
                <Ionicons name="refresh" size={70} color="orange" onPress={resetear} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a3a3a',
    },
    counterText: {
        fontSize: 48,
        marginBottom: 40,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
});

export default Ahorros;
