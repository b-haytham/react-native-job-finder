import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppStack from './AppStack'

const Navigation = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default Navigation