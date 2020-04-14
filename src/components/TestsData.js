import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

export default class TestView extends Component {
  render() {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.container}>
                <Text style={styles.subjectText}>{this.props.subject}</Text>
                <Text style={styles.dateText}>{this.props.date}</Text>
            </View>
            <View style={styles.deleteView}>
                <TouchableOpacity onPress={this.props.deleteAction}>
                    <Icon name='trash-2' color='#e60000' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        padding: 12,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 14
    },
    subjectText: {
        maxWidth: '75%',
        fontSize: 30,
        color: '#000'
    },
    dateText: {
        fontSize: 18,
        color: '#656565'
    },
    deleteView: {
        backgroundColor: '#FFF',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        alignSelf: 'flex-end',
        width: '90%',
        flexDirection: 'row'
    }
})
