import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import Layout from "../components/Layout";
import {
    OnBoardingScreenNavigationProps,
    OnBoardingScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

import Onboarding from "react-native-onboarding-swiper";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";

import { Box, Text } from "../utils/restyle";

import { AntDesign } from "@expo/vector-icons";

interface OnBoardingScreenProps {
    navigation: OnBoardingScreenNavigationProps;
    route: OnBoardingScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    return (
        <Layout no_padding_top>
            <Onboarding
                transitionAnimationDuration={10}
                DoneButtonComponent={(props) => (
                    <TouchableOpacity
                    onPress={props.onPress}
                
                    >
                    <Box
                        bg="primary2"
                        width={30}
                        height={30}
                        style={{ borderRadius: 15 }}
                        justifyContent="center"
                        alignItems="center"
                        marginHorizontal="m"
                    >
                        
                        <AntDesign
                            name="check"
                            size={20}
                            color={theme.colors.white}
                        />
                        
                    </Box>
                    </TouchableOpacity>
                )}
                DotComponent={(props) => (
                    <Box
                        marginHorizontal="s"
                        width={5}
                        height={5}
                        style={{ borderRadius: 2.5 }}
                        bg={props.selected ? "white" : "primary3"}
                    />
                )}
                controlStatusBar={false}
                showSkip={false}
                bottomBarColor={theme.colors.primary1}
                nextLabel={
                    <Text variant="body2" color="white">
                        Next
                    </Text>
                }
                onDone={() => navigation.navigate("Auth", { screen: "Login" })}
                pages={[
                    {
                        title: (
                            <Text variant="headline4" color="primary1">
                                OnBoarding
                            </Text>
                        ),
                        backgroundColor: theme.colors.white,
                        subtitle: (
                            <Text variant="body2" opacity={0.7}>
                                Description, subtitle ......
                            </Text>
                        ),
                        image: (
                            <Image
                                style={{
                                    width: width * 0.6,
                                    height: width * 0.6,
                                }}
                                resizeMode="cover"
                                source={require("../../assets/resume.png")}
                            />
                        ),
                    },
                    {
                        title: (
                            <Text variant="headline4" color="primary1">
                                OnBoarding
                            </Text>
                        ),
                        backgroundColor: theme.colors.white,
                        subtitle: (
                            <Text variant="body2" opacity={0.7}>
                                Description, subtitle ......
                            </Text>
                        ),
                        image: (
                            <Image
                                style={{
                                    width: width * 0.6,
                                    height: width * 0.6,
                                }}
                                resizeMode="cover"
                                source={require("../../assets/job-offers.png")}
                            />
                        ),
                    },
                    {
                        title: (
                            <Text variant="headline4" color="primary1">
                                OnBoarding
                            </Text>
                        ),
                        backgroundColor: theme.colors.white,
                        subtitle: (
                            <Text variant="body2" opacity={0.7}>
                                Description, subtitle ......
                            </Text>
                        ),
                        image: (
                            <Image
                                style={{
                                    width: width * 0.6,
                                    height: width * 0.6,
                                }}
                                resizeMode="cover"
                                source={require("../../assets/resume.png")}
                            />
                        ),
                    },
                ]}
            />
        </Layout>
    );
};

export default OnBoardingScreen;
