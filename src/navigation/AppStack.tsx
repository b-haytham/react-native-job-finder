import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import AuthStack from './AuthStack'
import MainFlow from './MainFlow'
import { AppStackParamList } from './ParamListTypes'

const Stack = createStackNavigator<AppStackParamList>()

const AppStack = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Auth' component={AuthStack} />
            <Stack.Screen name='Main' component={MainFlow} />
        </Stack.Navigator>
    )
}

export default AppStack