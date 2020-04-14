import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

export default class HomeWorkView extends Component {
  render() {
    return (
      <View style={styles.homeWorkContainer}>
        <View style={styles.container}>
            <Text style={styles.homeworkText}>{this.props.subject}</Text>
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
    width: '80%',
    padding: 12,
    margin: 5,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 14,
    flexDirection: 'row'
  },
  homeworkText: {
    fontSize: 24,
    color: '#000'
  },
  homeWorkContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  deleteView: {
    width: '10%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
})