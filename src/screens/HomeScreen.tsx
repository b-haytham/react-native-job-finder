import React, { useState } from 'react'
import {  } from 'react-native'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

import { HomeScreenNavigationProps, HomeScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'
import { Box, Text } from '../utils/restyle'

interface HomeScreenProps{
    navigation: HomeScreenNavigationProps
    route: HomeScreenRouteProps
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) =>{
    const [searchTerm,setSearchTerm] = useState('')
    return (
        <Layout bg='gray1' >
            <Hero 
                margin='m'
                title='Hello Haytham!'
                subtitle="Let's find your dream job "
                searchValue={searchTerm}
                onChangeValue={(v) => setSearchTerm(v)} 
            />
        </Layout>
    )
}



export default HomeScreen