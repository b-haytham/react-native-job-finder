import React from "react"
import { Image } from "react-native"
import Layout from "../components/Layout"
import { OnBoardingScreenNavigationProps, OnBoardingScreenRouteProps } from "../navigation/ScreensNavigationRouteProps"

import Onboarding from 'react-native-onboarding-swiper';
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";

interface OnBoardingScreenProps {
    navigation: OnBoardingScreenNavigationProps
    route: OnBoardingScreenRouteProps
}

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({navigation, route}) => {
    const theme = useTheme<Theme>()
    return (
        <Layout no_padding_top>
            <Onboarding 
                controlStatusBar={false}
                onDone={() => navigation.navigate('Main', {screen: 'Home'})}
                pages={[
                    {
                        title: 'OnBoarding',
                        backgroundColor: theme.colors.primary1,
                        subtitle: 'Done with React Native Onboarding Swiper',
                        image: <Image style={{width: 100, height: 100, borderRadius: 50}} source={require('../../assets/icon.png')} />
                    },
                    {
                        title: 'OnBoarding',
                        backgroundColor: theme.colors.primary1,
                        subtitle: 'Done with React Native Onboarding Swiper',
                        image: <Image style={{width: 100, height: 100, borderRadius: 50}} source={require('../../assets/icon.png')} />
                    },
                    {
                        title: 'OnBoarding',
                        backgroundColor: theme.colors.primary1,
                        subtitle: 'Done with React Native Onboarding Swiper',
                        image: <Image style={{width: 100, height: 100, borderRadius: 50}} source={require('../../assets/icon.png')} />
                    },
                ]}
            />
        </Layout>
    )
}

export default OnBoardingScreen