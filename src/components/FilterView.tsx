import React, { useState } from "react";
import { ScrollView } from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    TouchableOpacity,
} from "react-native-gesture-handler";
import { snapPoint } from "react-native-redash";

import Constants from "expo-constants";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from "./forms/form_elements/Button";
import PriceSlider from "./slider/PriceSlider";

interface FilterViewProps extends BoxProps<Theme> {
    width: number;
    height: number;
    translateY: Animated.SharedValue<number>;
    onApply?(filters: {}): void
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const FilterView: React.FC<FilterViewProps> = ({
    width,
    height,
    translateY,
    onApply,
    ...rest
}) => {
    const theme = useTheme<Theme>()
    // category state
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [subCategoryOpen, setSubCategoryOpen] = useState(false);
    const [loactionOpen, setLocationOpen] = useState(false);

    const [value, setValue] = useState<ValueType | ValueType[] | null>(null);

    const [items, setItems] = useState([
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
    ]);

    // category state

    // salary state
    // salary state

    // job type state
    const [jobType, setJobtype] = useState<
        ('Full time' | "Contract" | "Temporary" | 'Part time' | "Internship")[]
    >([])
    console.log(jobType)
    // job type state

    // experience state
    const [experience, setExperience] =
        useState<"Entry" | "Mid" | "Senior">("Entry");
    // experience state

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
                        top={Constants.statusBarHeight + 10}
                        left={width / 2 - 50}
                    />
                </PanGestureHandler>
            </Box>
            <ScrollView>
                <Box paddingHorizontal="m">
                    <Box marginVertical="s">
                        <DropDownPicker
                            zIndex={500}
                            placeholder="Select Category"
                            open={categoryOpen}
                            value={value}
                            items={items}
                            setOpen={setCategoryOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{borderColor: theme.colors.primary1}}
                            dropDownContainerStyle={{borderColor: theme.colors.primary1}}
                        />
                    </Box>
                    <Box marginVertical="s">
                        <DropDownPicker
                            zIndex={400}
                            placeholder="Select Sub Category"
                            open={subCategoryOpen}
                            value={value}
                            items={items}
                            setOpen={setSubCategoryOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{borderColor: theme.colors.primary1}}
                            dropDownContainerStyle={{borderColor: theme.colors.primary1}}
                        />
                    </Box>
                    <Box marginVertical="s">
                        <DropDownPicker
                            zIndex={300}
                            placeholder="Select Location"
                            open={loactionOpen}
                            value={value}
                            items={items}
                            setOpen={setLocationOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{borderColor: theme.colors.primary1}}
                            dropDownContainerStyle={{borderColor: theme.colors.primary1}}
                        />
                    </Box>
                </Box>
                <Box paddingHorizontal="m" marginVertical="m">
                    <Text variant="body2">Salary Estimate</Text>
                    <Box marginVertical='m'>
                        <PriceSlider 
                            minValue={0}
                            maxValue={5000}
                            lowValue={500}
                            highValue={1200}
                            onValueChange={(l, h) => {}} 
                        />
                    </Box>
                </Box>
                <Box paddingHorizontal="m" marginVertical="m">
                    <Text variant="body2">Job type</Text>
                    <Box
                        marginTop="m"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Box flex={1}>
                            <Box
                                flexDirection="row"
                                alignItems="center"
                                marginTop="s"
                            >
                                <BouncyCheckbox
                                    size={25}
                                    fillColor={theme.colors.primary1}
                                    unfillColor="#FFFFFF"
                                    useNativeDriver
                                    iconStyle={{ borderColor: theme.colors.primary1 }}
                                    onPress={(
                                        isChecked: boolean | undefined
                                    ) => {
                                         if(!isChecked) {
                                             setJobtype(prev => prev.filter(j => j !== 'Full time'))
                                         } else {
                                             setJobtype(prev => [...prev, 'Full time'])
                                         }
                                    }}
                                    isChecked={jobType.includes('Full time')}
                                />
                                <Text marginLeft="s" variant="description">
                                    Full time
                                </Text>
                            </Box>
                            <Box
                                flexDirection="row"
                                alignItems="center"
                                marginTop="s"
                            >
                                <BouncyCheckbox
                                    size={25}
                                    fillColor={theme.colors.primary1}
                                    unfillColor="#FFFFFF"
                                    useNativeDriver
                                    iconStyle={{ borderColor: theme.colors.primary1 }}
                                    onPress={(
                                        isChecked: boolean | undefined
                                    ) => {
                                        console.log(isChecked)
                                        if(!isChecked) {
                                            setJobtype(prev => prev.filter(j => j !== 'Contract'))
                                        } else {
                                            setJobtype(prev => [...prev, 'Contract'])
                                        }
                                    }}
                                    isChecked={jobType.includes('Contract') }
                                />
                                <Text marginLeft="s" variant="description">
                                    Contract
                                </Text>
                            </Box>
                            <Box
                                flexDirection="row"
                                alignItems="center"
                                marginTop="s"
                            >
                                <BouncyCheckbox
                                    size={25}
                                    fillColor={theme.colors.primary1}
                                    unfillColor="#FFFFFF"
                                    useNativeDriver
                                    iconStyle={{ borderColor: theme.colors.primary1 }}
                                    onPress={(
                                        isChecked: boolean | undefined
                                    ) => {
                                        if(!isChecked) {
                                            setJobtype(prev => prev.filter(j => j !== 'Temporary'))
                                        } else {
                                            setJobtype(prev => [...prev, 'Temporary'])
                                        }
                                    }}
                                    isChecked={jobType.includes('Temporary')}
                                />
                                <Text marginLeft="s" variant="description">
                                    Temporary
                                </Text>
                            </Box>
                        </Box>
                        <Box flex={1}>
                            <Box
                                flexDirection="row"
                                alignItems="center"
                                marginTop="s"
                            >
                                <BouncyCheckbox
                                    size={25}
                                    fillColor={theme.colors.primary1}
                                    unfillColor="#FFFFFF"
                                    useNativeDriver
                                    iconStyle={{ borderColor: theme.colors.primary1 }}
                                    onPress={(
                                        isChecked: boolean | undefined
                                    ) => {
                                        if(!isChecked) {
                                            setJobtype(prev => prev.filter(j => j !== 'Part time'))
                                        } else {
                                            setJobtype(prev => [...prev, 'Part time'])
                                        }
                                    }}
                                    isChecked={jobType.includes('Part time')}
                                />
                                <Text marginLeft="s" variant="description">
                                    Part time
                                </Text>
                            </Box>
                            <Box
                                flexDirection="row"
                                alignItems="center"
                                marginTop="s"
                            >
                                <BouncyCheckbox
                                    size={25}
                                    fillColor={theme.colors.primary1}
                                    unfillColor="#FFFFFF"
                                    useNativeDriver
                                    iconStyle={{ borderColor: theme.colors.primary1 }}
                                    onPress={(
                                        isChecked: boolean | undefined
                                    ) => {
                                        if(!isChecked) {
                                            setJobtype(prev => prev.filter(j => j !== 'Internship'))
                                        } else {
                                            setJobtype(prev => [...prev, 'Internship'])
                                        }
                                    }}
                                    isChecked={jobType.includes('Internship')}
                                />
                                <Text marginLeft="s" variant="description">
                                    Internship
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box paddingHorizontal="m" marginVertical="m">
                    <Text variant="body2">Experience level</Text>
                    <Box
                        marginTop="m"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <TouchableOpacity
                            onPress={() => setExperience("Entry")}
                        >
                            <Text
                                variant={
                                    experience === "Entry" ? "body2" : "body"
                                }
                                color={
                                    experience === "Entry"
                                        ? "primary1"
                                        : "black1"
                                }
                            >
                                Entry level
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setExperience("Mid")}>
                            <Text
                                variant={
                                    experience === "Mid" ? "body2" : "body"
                                }
                                color={
                                    experience === "Mid" ? "primary1" : "black1"
                                }
                            >
                                Mid level
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setExperience("Senior")}
                        >
                            <Text
                                variant={
                                    experience === "Senior" ? "body2" : "body"
                                }
                                color={
                                    experience === "Senior"
                                        ? "primary1"
                                        : "black1"
                                }
                            >
                                Senior level
                            </Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
                <Box>
                    <Button
                        margin="m"
                        elevation={10}
                        title="Apply"
                        onPress={() => onApply!({})}
                    />
                </Box>
            </ScrollView>
        </AnimatedBox>
    );
};

export default FilterView;
