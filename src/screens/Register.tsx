import React from 'react'
import { View, Text } from 'react-native'

import { RegisterScreenNavigationProps, RegisterScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface RegisterProps{
    navigation: RegisterScreenNavigationProps
    route: RegisterScreenRouteProps
}

const Register: React.FC<RegisterProps> = ({ navigation, route }) =>{
    return (
        <View>
            <Text> Register</Text>    
        </View>
    )
}

export default Register