import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import Layout from "../components/Layout"
import { ApplicationScreenNavigationProps, ApplicationScreenRouteProps } from "../navigation/ScreensNavigationRouteProps"
import { Box, Text } from "../utils/restyle"

import Constants from 'expo-constants'
import { useTheme } from "@shopify/restyle"
import { Theme } from "../utils/theme"
interface ApplicationScreenProps {
    navigation: ApplicationScreenNavigationProps
    route: ApplicationScreenRouteProps
}

const ApplicationScreen: React.FC<ApplicationScreenProps> = ({navigation, route}) => {
    const theme = useTheme<Theme>()
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
                
            </ScrollView>
        </Layout>
    )
}

export default ApplicationScreen