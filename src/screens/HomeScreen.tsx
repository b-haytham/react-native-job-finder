import { Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native'
import Layout from '../components/Layout'
import { HomeScreenNavigationProps, HomeScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface HomeScreenProps{
    navigation: HomeScreenNavigationProps
    route: HomeScreenRouteProps
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) =>{
    return (
        <Layout>
            <Text>HomeScreen</Text>
        </Layout>
    )
}

export default HomeScreen