import { TransitionPresets } from "@react-navigation/stack";
import React from "react";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HomeScreen from "../screens/HomeScreen";
import JobDetailScreen from "../screens/JobDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { MainStackParamList } from "./ParamListTypes";

const Stack = createSharedElementStackNavigator<MainStackParamList>();

const MainFlow = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            mode="modal"
            screenOptions={{
                // Enable gestures if you want. I disabled them because of my card style interpolator opacity animation
                gestureEnabled: false,
                // gestureResponseDistance: {
                // 	vertical: 100,
                // },
                // gestureDirection: 'vertical',
                ...TransitionPresets.ModalSlideFromBottomIOS,
                //   transitionSpec: {
                //     open: iosTransitionSpec,
                //     close: iosTransitionSpec,
                //   },
                // Opacity animation, you can also adjust this by playing with transform properties.
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress,
                    },
                }),
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen}  />
            <Stack.Screen
                name="Job_Detail"
                component={JobDetailScreen}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    const { job } = route.params;
                    if (route.name === "Job_Detail" && showing) {
                        // Open animation fades in image, title and description
                        return [
                            {
                                id: `image-${job.id}`,
                            },
                            {
                                id: `job_title-${job.id}`,
                                animation: 'fade'
                            }
                        ];
                    } else {
                        // Close animation only fades out image
                        return [
                            {
                                id: `image-${job.id}`,
                            },
                            {
                                id: `job_title-${job.id}`,
                                animation: 'fade'
                            }
                        ];
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default MainFlow;
