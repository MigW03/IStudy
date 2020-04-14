import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, TouchableOpacity, Modal, TextInput, Keyboard, AsyncStorage, ToastAndroid, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeWorkView from '../components/HomeWorkData'
import HomeWorkEmptyData from '../components/HomeWorkEmptyData';

export default function HomeWorks(){
    const [homeWorks, setHomeWorks] = useState(getArray)
    const [modalOpen, setModalOpen] = useState(false)
    const [subject, setSubject] = useState('')

    async function getArray(){
        try {
            const retrievedHomeWorks = await AsyncStorage.getItem('savedHomeWorks')

            setHomeWorks(JSON.parse(retrievedHomeWorks) || [])
        } catch (error) {
            Alert.alert('Opps!!', 'Erro ao carregar seus dados, por favor reabra o aplicativo')
        }
    }

    function addHomeWork() {
        if(subject.length > 0){
            Keyboard.dismiss()

            let newTask = {
                title: subject,
                key: Math.random().toString() + subject
            }

            homeWorks.unshift(newTask)

            saveHomeWorksToStorage(homeWorks)
            resetStates()
            setModalOpen(false)
        }else{
            Alert.alert('Nova tarefa', 'Por favor, digite a matéria da tarefa antes de prosseguir')
        }
    }

    function resetStates(){
        setSubject('')
    }

    function deleteItem(key){
        let newHomeWorks = homeWorks.filter(item => item.key !== key)
        ToastAndroid.show('Tarefa removida!!', ToastAndroid.SHORT)

        setHomeWorks(newHomeWorks)
        saveHomeWorksToStorage(newHomeWorks)
    }

    async function saveHomeWorksToStorage(dataToSave){
        try {
            await AsyncStorage.setItem('savedHomeWorks', JSON.stringify(dataToSave))
        } catch (error) {
            Alert.alert('Opps!!', 'Erro ao salvar sua tarefa, por favor tente novamente')
        }
    }

    return(
        <>
            <StatusBar backgroundColor='#48bee2' barStyle='light-content' />
            <View style={styles.container}>
                <View style={styles.pageHeader}>
                    <Text style={styles.pageName}>Tarefas</Text>
                </View>
                <View style={styles.componentview}>
                    <FlatList
                        style={{flex: 1}}
                        data = {homeWorks}
                        showsVerticalScrollIndicator = {false}
                        ListFooterComponent = {() => 
                            <View style={{height: 70, backgroundColor: '#FFF'}}/>
                        }
                        ListHeaderComponent = {() => 
                            <View style={{height: 10, backgroundColor: '#FFF'}}/>
                        }
                        ListEmptyComponent = {() => 
                            <HomeWorkEmptyData />
                        }
                        renderItem = { ({item, index}) => 
                            <HomeWorkView
                                subject = {item.title}
                                deleteAction = {() => deleteItem(item.key)}
                            />
                        }
                    /> 
                </View>

                <Modal
                    visible = {modalOpen}
                    animationType = 'slide'
                >
                    <View style={styles.topButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => {Keyboard.dismiss(); setModalOpen(false); resetStates()}}>
                            <Text style={styles.cancelAddText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={addHomeWork}>
                            <Text style={styles.confirmAddText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formBody}>
                        <TextInput
                        style={styles.input}
                        placeholder='Matéria da tarefa'
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        />
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
        backgroundColor: '#48bee2',
        alignItems: 'center',
        borderBottomLeftRadius: 66,
        borderBottomRightRadius: 66

    },
    pageName: {
        color: '#FFF',
        fontSize: 64,    
    },
    componentview: {
        flex: 7,
    },
    addButton: {
        backgroundColor: '#48bee2',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        backgroundColor: '#48bee2'
      },
      formBody: {
        flex: 1,
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
        color: '#48bee2',
        fontWeight: 'bold',
        fontSize: 22
      },
      cancelAddText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
      },
      formBody: {
        flex: 1,
        backgroundColor: '#FFF'
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
})