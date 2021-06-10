import React, { ReactNode } from "react";
import {} from "react-native";

import { BoxProps } from "@shopify/restyle";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import { Theme } from "../utils/theme";
import { Box } from "../utils/restyle";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    ScrollView,
} from "react-native-gesture-handler";
import { snapPoint } from "react-native-redash";

import Constants from 'expo-constants'

interface HiddenViewProps extends BoxProps<Theme> {
    component: ReactNode;
    width: number;
    height: number;
    translateY: Animated.SharedValue<number>;
}
const AnimatedBox = Animated.createAnimatedComponent(Box);

const HiddenView: React.FC<HiddenViewProps> = ({
    component,
    width,
    height,
    translateY,
    ...rest
}) => {
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(translateY.value) }],
    }));

    const gestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { startY: number }
    >({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateY.value = ctx.startY + event.translationY;
        },
        onEnd: (e) => {
            translateY.value = snapPoint(translateY.value, e.velocityY, [
                0,
                height,
            ]);
        },
    });

    return (
        <AnimatedBox
            position="absolute"
            backgroundColor="white"
            bottom={0}
            width={width}
            height={height}
            borderTopLeftRadius="l"
            borderTopRightRadius="l"
            overflow="hidden"
            elevation={10}
            zIndex={20}
            style={animatedStyles}
            {...rest}
        >
            <Box
                justifyContent="center"
                alignItems="center"
                height={height * 0.1}
            >
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <AnimatedBox
                        bg="primary3"
                        width={100}
                        height={10}
                        borderRadius="m"
                        position="absolute"
                        top={Constants.statusBarHeight +  10}
                        left={width / 2 - 50}
                        zIndex={1000}
                    />
                </PanGestureHandler>
            </Box>
            <ScrollView>{component}</ScrollView>
        </AnimatedBox>
    );
};

export default HiddenView;
