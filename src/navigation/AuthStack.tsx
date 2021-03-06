import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import { AuthStackParamList } from './ParamListTypes'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack