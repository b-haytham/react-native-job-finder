import React from "react"
import { } from "react-native"
import Layout from "../components/Layout"
import { FavouriteScreenNavigationProps, FavouriteScreenRouteProps } from "../navigation/ScreensNavigationRouteProps"

interface FavouriteScreenProps {
    navigation: FavouriteScreenNavigationProps
    route: FavouriteScreenRouteProps
}

const FavouriteScreen: React.FC<FavouriteScreenProps> = ({navigation, route}) => {
    return (
        <Layout>

        </Layout>
    )
}

export default FavouriteScreen