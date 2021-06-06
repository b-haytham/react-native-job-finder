import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { HomeScreenNavigationProps, HomeScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface HomeScreenProps{
    navigation: HomeScreenNavigationProps
    route: HomeScreenRouteProps
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) =>{
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}



export default HomeScreen