import React from 'react'
import {  StyleSheet, View } from 'react-native'
import { Button } from '@ui-kitten/components'

import Constants from 'expo-constants'
import { LoginScreenNavigationProps, LoginScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'
import Layout from '../components/Layout'
import Text, { Fonts } from '../components/Text'

interface LoginProps{
    navigation: LoginScreenNavigationProps
    route: LoginScreenRouteProps
}

const Login: React.FC<LoginProps> = ({navigation, route}) =>{
    return (
        <Layout level='4' style={styles.container}>
            <View>
            <Button  appearance='ghost' onPress={() =>{navigation.navigate('Main', {screen: 'Home'})}}>Active</Button>
            </View>
            <View style={{backgroundColor: 'white', height: 100}}>
                <Text font={Fonts.PoppinsSemiBold} category='h1' opacity={.7}>HelloWord</Text>
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