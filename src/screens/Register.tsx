import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RegisterScreenNavigationProps, RegisterScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'

interface RegisterProps{
    navigation: RegisterScreenNavigationProps
    route: RegisterScreenRouteProps
}

const Register: React.FC<RegisterProps> = ({ navigation, route }) =>{
    return (
        <View style={styles.container}>
            <Text>Register</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Register