import { AntDesign } from "@expo/vector-icons"
import React, { useCallback, useMemo } from "react"
import { } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import Layout from "../components/Layout"
import { ApplicationScreenNavigationProps, ApplicationScreenRouteProps } from "../navigation/ScreensNavigationRouteProps"
import { Box, Text } from "../utils/restyle"

import Constants from 'expo-constants'
import { useTheme } from "@shopify/restyle"
import { Theme } from "../utils/theme"
import { useAppDispatch, useAppSelector } from "../redux/store"

import { AnimatePresence, MotiView } from "moti";
import MainJobCard from "../components/cards/MainJobCard"

interface ApplicationScreenProps {
    navigation: ApplicationScreenNavigationProps
    route: ApplicationScreenRouteProps
}

const ApplicationScreen: React.FC<ApplicationScreenProps> = ({navigation, route}) => {
    const theme = useTheme<Theme>()
    const dispatch = useAppDispatch()
    const applicaton_list = useAppSelector(state => state.applications.application_list)

    
    return (
        <Layout no_padding_top>
            <Box
                paddingHorizontal="m"
                style={{
                    paddingTop: Constants.statusBarHeight + theme.spacing.m,
                    paddingBottom: theme.spacing.s,
                }}
                flexDirection="row"
                alignItems="center"
                bg="white"
                elevation={1}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color={theme.colors.black3}
                    />
                </TouchableOpacity>
                <Text marginLeft="m" variant="headline4" >
                    Applications
                </Text>
            </Box>
            <ScrollView>
                <AnimatePresence>
                {applicaton_list.map(a => (
                    <MotiView
                        key={a.job.id}
                        from={{
                            opacity: 0,
                            translateX: -50
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >
                        <MainJobCard
                            margin='m' 
                            status={a.status}
                            job={a.job}
                        />
                    </MotiView>
                ))}
                </AnimatePresence>
            </ScrollView>
        </Layout>
    )
}

export default ApplicationScreen