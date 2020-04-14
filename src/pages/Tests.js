import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, TouchableOpacity, TextInput, Modal, Picker, Keyboard, ToastAndroid, Alert, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


import TestsView from '../components/TestsData'
import TestsEmptyData from '../components/TestsEmptyData'

export default function Tests(){
  const [tests, setTests] = useState(getSavedTests)
  const [inputData, setInputData] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  async function getSavedTests(){
    try {
      const retrievedTests = await AsyncStorage.getItem('savedTests')

      setTests(JSON.parse(retrievedTests) || [])
    } catch (error) {
      Alert.alert('Opps!!', 'Erro ao carregar seus dados, por favor reabra o aplicativo.')
    }
  }

  function addTest() {
    if(inputData.length > 0 && day !== '' && month !== ''){
      Keyboard.dismiss()

      let newTest = {
        title: inputData,
        date: day + '/' + month,
        key: inputData + Math.random().toString()
      }

      tests.unshift(newTest)

      saveTestsToStorage(tests)
      setModalOpen(false)
      resetStates()
    }else{
      Alert.alert('Nova prova', 'Por favor, complete todos os campos antes de continuar')
    }
  }

  function resetStates(){
    setInputData('')
    setDay('')
    setMonth('')
  }

  function deleteItem(key){
    let newTests = tests.filter(item => item.key !== key)
    ToastAndroid.show('Prova removida!!', ToastAndroid.SHORT)
    
    setTests(newTests)
    saveTestsToStorage(newTests)
  }

  async function saveTestsToStorage(dataToSave){
    try {
      await AsyncStorage.setItem('savedTests', JSON.stringify(dataToSave))
    } catch (error) {
      Alert.alert('Opps!!', 'Erro ao salvar sua prova, por favor tente novamente.')
    }
  }

  return(
    <>
      <StatusBar backgroundColor='#126a80' barStyle='light-content' />
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageName}>Provas</Text>
        </View>
        <View style={styles.componentView}>
          <FlatList
            data = {tests}
            showsVerticalScrollIndicator = {false}
            ListFooterComponent = {() => 
              <View style={{height: 70, backgroundColor: '#FFF'}}/>
            }
            ListHeaderComponent = {() => 
                <View style={{height: 10, backgroundColor: '#FFF'}}/>
            }
            ListEmptyComponent = {() => 
                <TestsEmptyData />
            }
            renderItem = { ({item, index}) => 
              <TestsView 
                subject = {item.title}
                date = {item.date}
                deleteAction = {() => deleteItem(item.key)}
              />
            }
          />
          
        </View>
        <Modal
          visible={modalOpen}
          animationType='slide'
        >
          <View style={{flex:1}}>
            <View style={styles.topButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => {Keyboard.dismiss(); setModalOpen(false); resetStates()}}>
                <Text style={styles.cancelAddText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={addTest}>
                <Text style={styles.confirmAddText}>Salvar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formBody}>
                <TextInput
                  style={styles.input}
                  placeholder='Matéria da prova'
                  value={inputData}
                  onChangeText={inputData => setInputData(inputData)}
                />
                <View style={styles.pickerView}>
                  <Picker
                    style={styles.picker}
                    selectedValue={day}
                    onValueChange={value => setDay(value)}
                  >
                    <Picker.Item label='- Escolha o dia -' value=''/>
                    <Picker.Item label='Não definido(?)' value='?'/>
                    <Picker.Item label='1' value='1'/>
                    <Picker.Item label='2' value='2'/>
                    <Picker.Item label='3' value='3'/>
                    <Picker.Item label='4' value='4'/>
                    <Picker.Item label='5' value='5'/>
                    <Picker.Item label='6' value='6'/>
                    <Picker.Item label='7' value='7'/>
                    <Picker.Item label='8' value='8'/>
                    <Picker.Item label='9' value='9'/>
                    <Picker.Item label='10' value='10'/>
                    <Picker.Item label='11' value='11'/>
                    <Picker.Item label='12' value='12'/>
                    <Picker.Item label='13' value='13'/>
                    <Picker.Item label='14' value='14'/>
                    <Picker.Item label='15' value='15'/>
                    <Picker.Item label='16' value='16'/>
                    <Picker.Item label='17' value='17'/>
                    <Picker.Item label='18' value='18'/>
                    <Picker.Item label='19' value='19'/>
                    <Picker.Item label='20' value='20'/>
                    <Picker.Item label='21' value='21'/>
                    <Picker.Item label='22' value='22'/>
                    <Picker.Item label='23' value='23'/>
                    <Picker.Item label='24' value='24'/>
                    <Picker.Item label='25' value='25'/>
                    <Picker.Item label='26' value='26'/>
                    <Picker.Item label='27' value='27'/>
                    <Picker.Item label='28' value='28'/>
                    <Picker.Item label='29' value='29'/>
                    <Picker.Item label='30' value='30'/>
                    <Picker.Item label='31' value='31'/>

                  </Picker>
                  <Picker
                    style={styles.picker}
                    selectedValue={month}
                    onValueChange={value => setMonth(value)}
                  >
                    <Picker.Item label='- Escolha o mês -' value=''/>
                    <Picker.Item label='Não definido(?)' value='?'/>
                    <Picker.Item label='Janeiro' value='Jan'/>
                    <Picker.Item label='Fevereiro' value='Fev'/>
                    <Picker.Item label='Março' value='Mar'/>
                    <Picker.Item label='Abril' value='Abr'/>
                    <Picker.Item label='Maio' value='Mai'/>
                    <Picker.Item label='Junho' value='Jun'/>
                    <Picker.Item label='Julho' value='Jul'/>
                    <Picker.Item label='Agosto' value='Ago'/>
                    <Picker.Item label='Setembro' value='Set'/>
                    <Picker.Item label='Outubro' value='Out'/>
                    <Picker.Item label='Novembro' value='Nov'/>
                    <Picker.Item label='Dezembro' value='Dez'/>
                  </Picker>
                </View>
              </View>
          </View>
        </Modal>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalOpen(true)}>
        <Icon name='add' size={36} color='#FFF'/>
      </TouchableOpacity>
    </>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    pageHeader: {
        flex: 3,
        backgroundColor: '#126a80',
        alignItems: 'center',
        borderBottomLeftRadius: 66,
        borderBottomRightRadius: 66

    },
    pageName: {
        color: '#FFF',
        fontSize: 64,    
    },
    componentView: {
        flex: 7,
    },
    addButton: {
      backgroundColor: '#126a80',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 6,
      width: 60,
      height: 60,
      borderRadius: 60,
      position: 'absolute',
      bottom: 20,
      right: 20,
      elevation: 3
    },
    topButtons: {
      height: 60,
      backgroundColor: '#126a80',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    formBody: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    saveButton: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12,
      borderRadius: 9
    },
    cancelButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12
    },
    confirmAddText: {
      color: '#126a80',
      fontWeight: 'bold',
      fontSize: 22
    },
    cancelAddText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 18
    },
    input: {
      width: '90%',
      borderWidth: 2,
      borderColor: '#343434',
      borderRadius: 9,
      margin: 15,
      padding: 6,
      paddingLeft: 14,
      fontSize: 18
    },
    pickerView: {
      flexDirection: 'row',
      margin: 7
    },
    picker: {
      flex: 1,
      margin: 12,
      // backgroundColor: 'red'
    }
})