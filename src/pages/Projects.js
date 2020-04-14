import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, TouchableOpacity, Picker, TextInput, Modal, Keyboard, ToastAndroid, Alert, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import ProjectsEmptyData from '../components/ProjectsEmptyData'
import ProjectsView from '../components/ProjectsData'

export default function Projects(){
    const [projects, setProjects] = useState(getSavedProjects)
    const [subjectData, setSubjectData] = useState('')
    const [description, setDescription] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [people, setPeople] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    async function getSavedProjects(){
        try {
            const retrievedProjects = await AsyncStorage.getItem('savedProjects')

            setProjects(JSON.parse(retrievedProjects) || [])
        } catch (error) {
            Alert.alert('Opps!!', 'Erro ao carregar seus dados, por favor reabra o aplicativo.')
        }
    }

    function addProject(){
        if(subjectData.length > 0 && description.length > 0 && day !== '' && month !== '' && people !== ''){
            Keyboard.dismiss()

            let newProject = {
                title: subjectData,
                description: description,
                date: day + '/ ' + month,
                components: people,
                key: subjectData + Math.random().toString()
            }

            projects.unshift(newProject)

            saveProjectsToStorage(projects)
            setModalOpen(false)
            resetStates()
        }else{
            Alert.alert('Novo trabalho', 'Por favor, complete todos os campos antes de continuar')
        }
    }

    function resetStates(){
        setSubjectData('')
        setDescription('')
        setDay('')
        setMonth('')
        setPeople('')
    }

    function deleteItem(key){
        let newProjects = projects.filter(item => item.key !== key)
        ToastAndroid.show('Trabalho removido!!', ToastAndroid.SHORT)

        setProjects(newProjects)
        saveProjectsToStorage(newProjects)
    }

    async function saveProjectsToStorage(dataToSave){
        try {
            await AsyncStorage.setItem('savedProjects', JSON.stringify(dataToSave))
        } catch (error) {
            Alert.alert('Opps!!', 'Erro ao salvar seu trabalho, por favor tente novamente')
        }
    }

    return(
        <>
            <StatusBar backgroundColor='#208bac' barStyle='light-content' />
            <View style={styles.container}>
                <View style={styles.pageHeader}>
                    <Text style={styles.pageName}>Trabalhos</Text>
                </View>
                <View style={styles.componentView}>
                    <FlatList
                        data = {projects}
                        showsVerticalScrollIndicator = {false}
                        ListFooterComponent = {() => 
                            <View style={{height: 70, backgroundColor: '#FFF'}}/>
                        }
                        ListHeaderComponent = {() => 
                            <View style={{height: 10, backgroundColor: '#FFF'}}/>
                        }
                        ListEmptyComponent = {() => 
                            <ProjectsEmptyData />
                        }
                        renderItem = { ({item, index}) => 
                            <ProjectsView
                                subject = {item.title}
                                date = {item.date}
                                description = {item.description}
                                components = {item.components}
                                deleteAction ={() => deleteItem(item.key)}
                            />
                        }
                    />
                    
                </View>
                <Modal
                    visible={modalOpen}
                    animationType='slide'
                >
                    <View style={styles.topButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => {Keyboard.dismiss(); setModalOpen(false); resetStates()}}>
                            <Text style={styles.cancelAddText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={addProject} >
                            <Text style={styles.confirmAddText}>Salvar</Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style={styles.formBody}>
                        <TextInput
                            style={styles.input}
                            placeholder='Matéria do trabalho'
                            value={subjectData}
                            onChangeText={text => setSubjectData(text)}
                        />
                        <View style={styles.pickers}>
                            <Picker
                                style={styles.picker}
                                selectedValue={day}
                                onValueChange={value => setDay(value)}
                            >
                                <Picker.Item label='- Dia -' value='' />
                                <Picker.Item label='Não definido(?)' value='?' />
                                <Picker.Item label='1' value='1' />
                                <Picker.Item label='2' value='2' />
                                <Picker.Item label='3' value='3' />
                                <Picker.Item label='4' value='4' />
                                <Picker.Item label='5' value='5' />
                                <Picker.Item label='6' value='6' />
                                <Picker.Item label='7' value='7' />
                                <Picker.Item label='8' value='8' />
                                <Picker.Item label='9' value='9' />
                                <Picker.Item label='10' value='10' />
                                <Picker.Item label='11' value='11' />
                                <Picker.Item label='12' value='12' />
                                <Picker.Item label='13' value='13' />
                                <Picker.Item label='14' value='14' />
                                <Picker.Item label='15' value='15' />
                                <Picker.Item label='16' value='16' />
                                <Picker.Item label='17' value='17' />
                                <Picker.Item label='18' value='18' />
                                <Picker.Item label='19' value='19' />
                                <Picker.Item label='20' value='20' />
                                <Picker.Item label='21' value='21' />
                                <Picker.Item label='22' value='22' />
                                <Picker.Item label='23' value='23' />
                                <Picker.Item label='24' value='24' />
                                <Picker.Item label='25' value='25' />
                                <Picker.Item label='26' value='26' />
                                <Picker.Item label='27' value='27' />
                                <Picker.Item label='28' value='28' />
                                <Picker.Item label='29' value='29' />
                                <Picker.Item label='30' value='30' />
                                <Picker.Item label='31' value='31' />
                            </Picker>
                            <Picker
                                style={styles.picker}
                                selectedValue={month}
                                onValueChange={value => setMonth(value)}
                            >
                                <Picker.Item label='- Mês -' value='' />
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
                            <Picker
                                style={styles.picker}
                                selectedValue={people}
                                onValueChange={value => setPeople(value)}
                            >
                                <Picker.Item label='- Componentes -' value='' />
                                <Picker.Item label='Grupo' value='Grupo' />
                                <Picker.Item label='Individual' value='Individual' />
                            </Picker>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='Tipo do trabalho (Max. 15 caracteres)'
                            maxLength = {15}
                            value={description}
                            onChangeText={text => setDescription(text)}
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
        backgroundColor: '#208bac',
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
        backgroundColor: '#208bac',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        width: 60,
        height: 60,
        borderRadius: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 3,
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        backgroundColor: '#208bac'
      },
      formBody: {
        flex: 1,
        backgroundColor: '#FFF'
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
        color: '#208bac',
        fontWeight: 'bold',
        fontSize: 22
      },
      cancelAddText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
      },
      pickers: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8
      },
      picker: {
        flex: 1,
        maxWidth: '30%',
        margin: 4
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