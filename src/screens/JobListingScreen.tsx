import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, Image } from "react-native";
import BackgroundPattern from "../components/BackgroundPattern";
import Layout from "../components/Layout";
import {
    JobListingScreenNavigationProps,
    JobListingScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Constants from "expo-constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { useAppSelector } from "../redux/store";
import SimpleJobCard from "../components/cards/SimpleJobCard";
import { AnimatePresence } from "framer-motion";
import { MotiView } from "@motify/components";

interface JobListingScreenProps {
    navigation: JobListingScreenNavigationProps;
    route: JobListingScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const JobListingScreen: React.FC<JobListingScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const jobs = useAppSelector((state) => state.jobs.job_list).filter(
        (j) => j.categories[0].name === route.params.category?.name
    );
    return (
        <Layout no_padding_top>
            <Box
                borderBottomLeftRadius="l"
                borderBottomRightRadius="l"
                overflow="hidden"
            >
                <BackgroundPattern
                    style={{
                        width,
                        height: height * 0.15,
                        transform: [{ rotate: "180deg" }],
                    }}
                />
                <Box position="absolute" bottom={10} left={10}>
                    <SharedElement id={`category-${route.params.category?.id}`}>
                        <Text variant="body2" color="white">
                            {route.params.category?.name}
                        </Text>
                    </SharedElement>
                </Box>
                <Box
                    position="absolute"
                    top={Constants.statusBarHeight + theme.spacing.s}
                    right={theme.spacing.s}
                    bg="white"
                    width={30}
                    height={30}
                    justifyContent="center"
                    alignItems="center"
                    style={{ borderRadius: 15 }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Entypo
                            name="cross"
                            size={25}
                            color={theme.colors.primary1}
                        />
                    </TouchableOpacity>
                </Box>
            </Box>
            <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
                <AnimatePresence>
                    {jobs.length > 0 &&
                        jobs.map((j) => (
                            <MotiView
                                key={j.id}
                                from={{
                                    opacity: 0,
                                    translateX: -50,
                                    scale: 0.5,
                                }}
                                animate={{
                                    opacity: 1,
                                    translateX: 0,
                                    scale: 1,
                                }}
                            >
                                <SimpleJobCard
                                    marginHorizontal="m"
                                    marginVertical="s"
                                    job={j}
                                    onImagePress={() =>
                                        navigation.navigate("Job_Detail", {
                                            job: j,
                                        })
                                    }
                                />
                            </MotiView>
                        ))}
                </AnimatePresence>
            </ScrollView>
        </Layout>
    );
};

export default JobListingScreen;
