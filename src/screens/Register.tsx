import React from 'react'
import { } from 'react-native'
import { Text } from '@ui-kitten/components'
import Layout from '../components/Layout'
import { RegisterScreenNavigationProps, RegisterScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface RegisterProps{
    navigation: RegisterScreenNavigationProps
    route: RegisterScreenRouteProps
}

const Register: React.FC<RegisterProps> = ({ navigation, route }) =>{
    return (
        <Layout>
            <Text> Register</Text>    
        </Layout>
    )
}

export default Register