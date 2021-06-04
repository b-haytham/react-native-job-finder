import React from 'react'
import {  StyleSheet, View } from 'react-native'
import { Button,  Layout, Text } from '@ui-kitten/components'

import Constants from 'expo-constants'
import { LoginScreenNavigationProps, LoginScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface LoginProps{
    navigation: LoginScreenNavigationProps
    route: LoginScreenRouteProps
}

const Login: React.FC<LoginProps> = ({navigation, route}) =>{
    return (
        <Layout style={styles.container}>
            <View>
            <Button  appearance='ghost' onPress={() =>{navigation.navigate('Main', {screen: 'Home'})}}>Active</Button>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: Constants.statusBarHeight
    }
})

export default Login