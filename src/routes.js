import React from 'react';
import {StatusBar} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'
import Tests from './pages/Tests'
import Projects from './pages/Projects'
import HomeWorks from './pages/HomeWorks'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <>
        <StatusBar backgroundColor='#FFF'/>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {backgroundColor: '#FFF'},
            headerTintColor: '#000'
        }}>
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    title: 'iStudy',
                    headerShown: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold'}

                }}
            />
            <Stack.Screen 
                name='Tests'
                component={Tests}
                options={{
                    title: '',
                    headerStyle: {backgroundColor: '#126a80', elevation: 0},
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF'
                }}
            />
            <Stack.Screen 
                name='Projects'
                component={Projects}
                options={{
                    title: '',
                    headerStyle: {backgroundColor: '#208bac', elevation: 0},
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF'
                }}
            />
            <Stack.Screen 
                name='HomeWorks'
                component={HomeWorks}
                options={{
                    title: '',
                    headerStyle: {backgroundColor: '#48bee2', elevation: 0},
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF'

                }}
            />
        </Stack.Navigator>
    </>
  );
}