import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

export default class ProjectsView extends Component {
  render() {
    return (
        <View style={styles.projectsContainer}>
            <View style={styles.container}>
                <View style={styles.topHalf}>
                    <Text style={styles.subjectText}>{this.props.subject}</Text>
                    <Text style={styles.dateText}>{this.props.date}</Text>
                </View>
                <View style={styles.bottomHalf}>
                    <Text style={styles.descText}>{this.props.description}</Text>
                    <Text style={styles.groupText}>{this.props.components}</Text>
                </View>
            </View>
            <View style={styles.deleteView}>
                <TouchableOpacity onPress={this.props.deleteAction}>
                    <Icon name='trash-2' color='#e60000' size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '80%',
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 14,
        margin: 5,
        padding: 12,
    },
    topHalf: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1     
    },
    bottomHalf: {
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
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
    descText: {
        fontSize: 18,
        color: '#656565'
    },
    groupText: {
        fontSize: 18,
        color: '#656565'
    },
    projectsContainer: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    deleteView: {
        backgroundColor: '#FFF',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})