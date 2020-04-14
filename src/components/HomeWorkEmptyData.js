import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import { Container } from './styles';

export default function HomeWorkEmptyData() {
  return (
    <View style={styles.container}>
        <Text style={styles.upperText}>Você ainda não tem tarefas!!</Text>
        <Text style={styles.lowerText}>Para adicionar uma nova clique no botão abaixo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90
    },
    upperText: {
        fontSize: 24,
        color: '#999',
        fontWeight: 'bold'
    },
    lowerText: {
        fontSize: 14,
        color: '#999'
    }
})
