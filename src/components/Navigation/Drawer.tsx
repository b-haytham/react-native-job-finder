import React from "react";
import { Image, StyleSheet } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import theme, { Theme } from "../../utils/theme";

import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";

import Constants from "expo-constants";
import BackgroundPattern from "../BackgroundPattern";
import { HomeScreenNavigationProps } from "../../navigation/ScreensNavigationRouteProps";

interface DrawerProps extends BoxProps<Theme> {
    width: number;
    height: number;
    translationX: Animated.SharedValue<number>;
    navigation: HomeScreenNavigationProps;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Drawer: React.FC<DrawerProps> = ({
    width,
    height,
    translationX,
    navigation,
    ...rest
}) => {
    const borderBottomRightRadius = useDerivedValue(() => {
        return interpolate(
            translationX.value,
            [0, -width],
            [200, 0],
            Extrapolate.CLAMP
        );
    });

    const animatedStyles = useAnimatedStyle(() => ({
        borderBottomRightRadius: withTiming(borderBottomRightRadius.value, {
            duration: 300,
        }),
        transform: [{ translateX: translationX.value }],
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
            style={[{ paddingTop: Constants.statusBarHeight }, animatedStyles]}
            {...rest}
        >
            <Box
                position="absolute"
                zIndex={50}
                justifyContent="center"
                alignItems="center"
                bg="white"
                width={30}
                height={30}
                style={{
                    top: Constants.statusBarHeight + theme.spacing.m,
                    right: theme.spacing.m,
                    borderRadius: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        translationX.value = withTiming(-width, {}, (isFi) => { if (isFi) console.log('Finished')} );
                    }}
                >
                    <Entypo
                        name="cross"
                        size={25}
                        color={theme.colors.primary1}
                    />
                </TouchableOpacity>
            </Box>
            <Box
                position="absolute"
                top={0}
                left={0}
                width={width}
                height={height * 0.2}
                borderBottomLeftRadius="l"
                borderBottomRightRadius="l"
                overflow="hidden"
                borderRightColor="primary1"
                borderRightWidth={1}
            >
                <BackgroundPattern
                    style={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        overflow: "hidden",
                    }}
                    width={width}
                    height={height * 0.2}
                />
            </Box>
            <Box
                flex={1}
                paddingHorizontal="m"
                style={{ paddingTop: height * 0.2 + theme.spacing.m }}
            >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                    translationX.value =  withTiming(-width, {})
                }}>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        paddingVertical="s"
                        marginVertical="s"
                    >
                        <AntDesign
                            name="home"
                            size={24}
                            color={theme.colors.primary1}
                        />
                        <Box marginLeft="m">
                            <Text variant="body2" opacity={0.7}>
                                Home
                            </Text>
                        </Box>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Favourites")
                    translationX.value = withTiming(-width) 
                }}>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        paddingVertical="s"
                        marginVertical="s"
                    >
                        <Feather
                            name="bookmark"
                            size={24}
                            color={theme.colors.primary1}
                        />
                        <Box marginLeft="m">
                            <Text variant="body2" opacity={0.7}>
                                Bookmarks
                            </Text>
                        </Box>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Applications")
                    translationX.value = withTiming(-width) 
                }}>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        paddingVertical="s"
                        marginVertical="s"
                    >
                        <AntDesign
                            name="profile"
                            size={24}
                            color={theme.colors.primary1}
                        />
                        <Box marginLeft="m">
                            <Text variant="body2" opacity={0.7}>
                                Applications
                            </Text>
                        </Box>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Profile")
                    translationX.value = withTiming(-width) 
                }}>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        paddingVertical="s"
                        marginVertical="s"
                    >
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={theme.colors.primary1}
                        />
                        <Box marginLeft="m">
                            <Text variant="body2" opacity={0.7}>
                                Profile
                            </Text>
                        </Box>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Auth", {screen: 'Login'})
                    translationX.value = withTiming(-width) 
                }}>
                    <Box
                        flexDirection="row"
                        alignItems="center"
                        paddingVertical="s"
                        marginVertical="s"
                    >
                        <AntDesign
                            name="logout"
                            size={24}
                            color={theme.colors.primary1}
                        />
                        <Box marginLeft="m">
                            <Text variant="body2" opacity={0.7}>
                                Logout
                            </Text>
                        </Box>
                    </Box>
                </TouchableOpacity>
            </Box>
        </AnimatedBox>
    );
};

export default Drawer;
