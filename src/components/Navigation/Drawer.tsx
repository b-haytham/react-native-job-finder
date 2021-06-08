import React from "react";
import { StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue, withSpring, withTiming } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

import Constants from 'expo-constants'

interface DrawerProps extends BoxProps<Theme> {
    width: number;
    height: number;
    translationX: Animated.SharedValue<number>;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Drawer: React.FC<DrawerProps> = ({
    width,
    height,
    translationX,
    ...rest
}) => {

    const borderBottomRightRadius =  useDerivedValue(() => {
        return interpolate(translationX.value, [0, -width], [200, 0 ], Extrapolate.CLAMP)
    })

    const animatedStyles = useAnimatedStyle(() => ({
        borderBottomRightRadius: withTiming(borderBottomRightRadius.value, {
            duration: 300
        }) ,
        transform: [
            { translateX: translationX.value },
        ],
    }));

    return (
        <AnimatedBox
            position="absolute"
            top={0}
            left={0}
            zIndex={10000}
            elevation={20}
            bg="white"
            width={width}
            height={height}
            style={[{paddingTop: Constants.statusBarHeight} ,animatedStyles]}
            {...rest}
        >
            <TouchableOpacity style={{margin: 50}} onPress={() => {
                translationX.value = withSpring(-width)
            }}>
                <Entypo name='cross' size={30} color={'black'} />
            </TouchableOpacity>
        </AnimatedBox>
    );
};

export default Drawer;
