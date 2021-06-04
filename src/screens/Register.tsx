import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface RegisterProps{}

const Register: React.FC<RegisterProps> = ({}) =>{
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