import { Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { SharedElement } from "react-navigation-shared-element";
import Button from "../components/forms/form_elements/Button";
import JobRequirement from "../components/JobRequirement";
import Layout from "../components/Layout";
import Map from "../components/Map";

import {
    JobDetailScreenNavigationProps,
    JobDetailScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Constants from 'expo-constants'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addToFavorite } from "../redux/favourite/favouriteSlice";
import { createApplication } from "../redux/applications/applicationSlice";

interface JobDetailScreenProps {
    navigation: JobDetailScreenNavigationProps;
    route: JobDetailScreenRouteProps;
}

const AnimatedBox = Animated.createAnimatedComponent(Box)

const { width, height } = Dimensions.get("screen");

const JobDetailScreen: React.FC<JobDetailScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch()
    const jobs_in_favourite = useAppSelector(state => state.favourites.jobs_in_favourite)
    const jobs_in_application = useAppSelector(state => state.applications.jobs_applied)

    const scrollY = useSharedValue(0)


    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
      });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{translateY: interpolate(scrollY.value, [0, 100], [0, - 100], Extrapolate.CLAMP)}]
    }))

    return (
        <Layout no_padding_top bg="gray1">
            <AnimatedBox
                position='absolute'
                justifyContent='center'
                alignItems='center'
                width={30}
                height={30}
                style={[{borderRadius: 15}, animatedStyles]}
                bg='white'
                top={Constants.statusBarHeight + theme.spacing.m}
                right={theme.spacing.m}
                zIndex={55}
                
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name='cross' size={25} color={theme.colors.primary1} />
                </TouchableOpacity>
            </AnimatedBox>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{  }}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                <Map
                    coordinates={route.params.job.coordinates}
                    width={width}
                    height={height * 0.39}
                />
                <Box
                    bg="white"
                    width={120}
                    height={120}
                    borderRadius="m"
                    justifyContent="center"
                    alignItems="center"
                    elevation={15}
                    alignSelf="center"
                    style={{ transform: [{ translateY: -50 }] }}
                >
                    <SharedElement id={`image-${route.params.job.id}`}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: route.params.job.company.image }}
                            resizeMode="contain"
                        />
                    </SharedElement>
                </Box>
                <Box marginVertical="s" alignItems="center">
                    <SharedElement id={`job_title-${route.params.job.id}`}>
                        <Text textAlign="center" variant="headline4">
                            {route.params.job.job_title}
                        </Text>
                    </SharedElement>
                    <Text textAlign="center" variant="description">
                        {route.params.job.company.name}
                    </Text>
                </Box>
                <Box marginTop="l" marginHorizontal="m">
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        marginBottom="s"
                    >
                        <MaterialIcons
                            name="location-on"
                            size={24}
                            color={theme.colors.black3}
                        />
                        <Text marginLeft="m" variant="description">
                            {route.params.job.location}
                        </Text>
                    </Box>
                    {route.params.job.salary && (
                        <Box
                            flexDirection="row"
                            alignItems="center"
                            marginBottom="s"
                        >
                            <MaterialIcons
                                name="attach-money"
                                size={24}
                                color={theme.colors.black3}
                            />
                            <Text marginLeft="m" variant="description">
                                {`${route.params.job.salary.min}k/m - ${route.params.job.salary.max}k/m`}
                            </Text>
                        </Box>
                    )}
                    <Box
                            flexDirection="row"
                            alignItems="center"
                            marginBottom="s"
                        >
                            <MaterialIcons
                                name="cases"
                                size={24}
                                color={theme.colors.black3}
                            />
                            <Text marginLeft="m" variant="description">
                                {route.params.job.type}
                            </Text>
                        </Box>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        marginBottom="s"
                    >
                        <MaterialIcons
                            name="date-range"
                            size={24}
                            color={theme.colors.black3}
                        />
                        <Text marginLeft="m" variant="description">
                            {route.params.job.posted}
                        </Text>
                    </Box>
                </Box>
                <Box marginTop="l" marginHorizontal="m">
                    <Text variant="body2">Job Description</Text>
                    <Box marginTop="s">
                        {route.params.job.discription.length > 0 &&
                            route.params.job.discription.map((d, i) => (
                                <Text
                                    key={i}
                                    marginBottom="s"
                                    variant="description"
                                >
                                    {d}
                                </Text>
                            ))}
                    </Box>
                </Box>
                <Box marginTop="l" marginHorizontal="m">
                    <Text variant="body2">Job Highlight</Text>
                    <Box marginTop="s">
                        {route.params.job.highlights.length > 0 &&
                            route.params.job.highlights.map((d, i) => (
                                <JobRequirement key={i} marginVertical="s" text={d} />
                            ))}
                    </Box>
                </Box>
                <Box marginTop="l" marginHorizontal="m">
                    <Text variant="body2">Job Requirements</Text>
                    <Box marginTop="s">
                        {route.params.job.requirements.length > 0 &&
                            route.params.job.requirements.map((d, i) => (
                                <JobRequirement key={i} marginVertical="s" text={d} />
                            ))}
                    </Box>
                </Box>
            </Animated.ScrollView>
            {!(jobs_in_application.includes(route.params.job.id) && jobs_in_favourite.includes(route.params.job.id)) && <Box
                height={70}
                width={width}
                bg="white"
                flexDirection="row"
                paddingHorizontal="m"
                alignItems="center"
            >
                {!jobs_in_favourite.includes(route.params.job.id) && <Box
                    width={50}
                    height={50}
                    bg="primary3"
                    borderRadius={"m"}
                    marginRight="s"
                    justifyContent="center"
                    alignItems="center"
                >
                    <TouchableOpacity onPress={() => dispatch(addToFavorite(route.params.job))}>
                        <Fontisto
                            name="favorite"
                            size={30}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>
                </Box>}
                {!jobs_in_application.includes(route.params.job.id) &&
                <Box flexGrow={1} elevation={10}>
                    <Button title="Apply" onPress={() => dispatch(createApplication(route.params.job))} />
                </Box>}
            </Box>}
        </Layout>
    );
};

export default JobDetailScreen;
