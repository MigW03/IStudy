import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';

import LogoImage from '../assets/logo.png'

export default function Home({navigation}) {
  return (
    <>
    <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
    <View style={styles.container}>
        <View style={styles.logoView}>
            <Image source={LogoImage} style={{maxWidth: '80%'}}/>
        </View>
        <View style={styles.touchView}>
            <TouchableOpacity style={[styles.touch, {backgroundColor: '#126a80'}]} onPress={() => navigation.navigate('Tests')}>
                <Text style={styles.touchText}>Provas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, {backgroundColor: '#208bac'}]} onPress={() => navigation.navigate('Projects')}>
                <Text style={styles.touchText}>Trabalhos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touch, {backgroundColor: '#48bee2'}]} onPress={() => navigation.navigate('HomeWorks')}>
                <Text style={styles.touchText}>Tarefas</Text>
            </TouchableOpacity>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    logoView: {
        flex: 1,
        justifyContent:  'center',
        alignItems: 'center',
    },
    touchView: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    touch: {
        width: '80%',
        height: 54,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    touchText: {
        fontSize: 28,
        color: '#FFF',
    },
})
