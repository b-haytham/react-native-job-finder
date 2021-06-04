import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface HomeScreenProps{}

const HomeScreen: React.FC<HomeScreenProps> = ({}) =>{
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