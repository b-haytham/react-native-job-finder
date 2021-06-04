import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface LoginProps{}

const Login: React.FC<LoginProps> = ({}) =>{
    return (
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Login