import React from "react"
import { } from "react-native"
import Layout from "../components/Layout"
import { ApplicationScreenNavigationProps, ApplicationScreenRouteProps } from "../navigation/ScreensNavigationRouteProps"

interface ApplicationScreenProps {
    navigation: ApplicationScreenNavigationProps
    route: ApplicationScreenRouteProps
}

const ApplicationScreen: React.FC<ApplicationScreenProps> = ({navigation, route}) => {
    return (
        <Layout>

        </Layout>
    )
}

export default ApplicationScreen