import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HomeScreenNavigationProps, HomeScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface HomeScreenProps{
    navigation: HomeScreenNavigationProps
    route: HomeScreenRouteProps
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) =>{
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen