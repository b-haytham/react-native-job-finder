import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { snapPoint } from "react-native-redash";

import Constants from "expo-constants";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";

interface FilterViewProps extends BoxProps<Theme> {
    width: number;
    height: number;
    translateY: Animated.SharedValue<number>;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const FilterView: React.FC<FilterViewProps> = ({
    width,
    height,
    translateY,
    ...rest
}) => {

    const [categoryOpen, setCategoryOpen] = useState(false)
    const [value, setValue] = useState<ValueType | ValueType[] | null>(null);
    console.log(value)
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

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
            backgroundColor='white'
            bottom={0}
            width={width}
            height={height}
            borderTopLeftRadius='l'
            borderTopRightRadius='l'
            overflow='hidden'
            elevation={10}
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
                        bg="gray4"
                        width={100}
                        height={10}
                        borderRadius="m"
                        position="absolute"
                        top={Constants.statusBarHeight + 10}
                        left={width / 2 - 50}
                    />
                </PanGestureHandler>
            </Box>
            <Box 
                paddingHorizontal='m'
            >
                <Box marginVertical='s'>

                <DropDownPicker 
                    open={categoryOpen}
                    value={value}
                    items={items}
                    setOpen={setCategoryOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                </Box>
                <Box marginVertical='s'>

                 <DropDownPicker 
                    open={categoryOpen}
                    value={value}
                    items={items}
                    setOpen={setCategoryOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                </Box>
            </Box>
        </AnimatedBox>
    );
};

export default FilterView;
