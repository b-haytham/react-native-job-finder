import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import {
    ProfileScreenNavigationProps,
    ProfileScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { useAppSelector } from "../redux/store";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

import Constants from "expo-constants";
import { AnimatePresence, MotiView } from "moti";

interface ProfileScreenProps {
    navigation: ProfileScreenNavigationProps;
    route: ProfileScreenRouteProps;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setDisplay(true);
    }, []);
    const current_user = useAppSelector((state) => state.user.current_user);

    return (
        <Layout no_padding_top>
            <Box
                paddingHorizontal="m"
                style={{
                    paddingTop: Constants.statusBarHeight + theme.spacing.m,
                    paddingBottom: theme.spacing.s,
                }}
                flexDirection="row"
                alignItems="center"
                bg="white"
                elevation={1}
            >
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color={theme.colors.black3}
                    />
                </TouchableOpacity>
                <Text marginLeft="m" variant="headline4">
                    Profile
                </Text>
            </Box>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: theme.spacing.s }}
            >
                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Image
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 20,
                                    }}
                                    resizeMode="cover"
                                    source={{ uri: current_user?.image }}
                                />
                                <Text
                                    marginVertical="s"
                                    variant="body2"
                                    opacity={0.7}
                                >
                                    {current_user?.full_name}
                                </Text>
                                <Text variant="description" opacity={0.7}>
                                    {current_user?.job_title}
                                </Text>
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        marginBottom="m"
                                        variant="body2"
                                        opacity={0.7}
                                    >
                                        Main Info
                                    </Text>
                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign
                                            name="edit"
                                            size={24}
                                            color={theme.colors.primary3}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                <Box
                                    marginBottom="s"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <MaterialIcons
                                        name="cases"
                                        size={24}
                                        color={theme.colors.black3}
                                    />
                                    <Text marginLeft="m" variant="description">
                                        {current_user?.main_info.job_title}
                                    </Text>
                                </Box>
                                <Box
                                    marginBottom="s"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <MaterialIcons
                                        name="location-on"
                                        size={24}
                                        color={theme.colors.black3}
                                    />
                                    <Text marginLeft="m" variant="description">
                                        {current_user?.main_info.location}
                                    </Text>
                                </Box>
                                <Box
                                    marginBottom="s"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <MaterialIcons
                                        name="date-range"
                                        size={24}
                                        color={theme.colors.black3}
                                    />
                                    <Text marginLeft="m" variant="description">
                                        {current_user?.main_info.birth_day}
                                    </Text>
                                </Box>
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        marginBottom="m"
                                        variant="body2"
                                        opacity={0.7}
                                    >
                                        Contact Info
                                    </Text>
                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign
                                            name="edit"
                                            size={24}
                                            color={theme.colors.primary3}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                <Box
                                    marginBottom="s"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <MaterialIcons
                                        name="email"
                                        size={24}
                                        color={theme.colors.black3}
                                    />
                                    <Text marginLeft="m" variant="description">
                                        {current_user?.contact_info.email}
                                    </Text>
                                </Box>
                                <Box
                                    marginBottom="s"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <MaterialIcons
                                        name="phone"
                                        size={24}
                                        color={theme.colors.black3}
                                    />
                                    <Text marginLeft="m" variant="description">
                                        {current_user?.contact_info.phone}
                                    </Text>
                                </Box>
                                {current_user?.contact_info.facebook && (
                                    <Box
                                        marginBottom="s"
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <MaterialIcons
                                            name="facebook"
                                            size={24}
                                            color={theme.colors.black3}
                                        />
                                        <Text
                                            marginLeft="m"
                                            variant="description"
                                        >
                                            {
                                                current_user?.contact_info
                                                    .facebook
                                            }
                                        </Text>
                                    </Box>
                                )}
                                {current_user?.contact_info.tweeter && (
                                    <Box
                                        marginBottom="s"
                                        flexDirection="row"
                                        alignItems="center"
                                    >
                                        <AntDesign
                                            name="twitter"
                                            size={24}
                                            color={theme.colors.black3}
                                        />
                                        <Text
                                            marginLeft="m"
                                            variant="description"
                                        >
                                            {current_user?.contact_info.tweeter}
                                        </Text>
                                    </Box>
                                )}
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        marginBottom="m"
                                        variant="body2"
                                        opacity={0.7}
                                    >
                                        About
                                    </Text>

                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign
                                            name="edit"
                                            size={24}
                                            color={theme.colors.primary3}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                <Text variant="description">
                                    {current_user?.about}
                                </Text>
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        marginBottom="m"
                                        variant="body2"
                                        opacity={0.7}
                                    >
                                        Skills
                                    </Text>
                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign
                                            name="edit"
                                            size={24}
                                            color={theme.colors.primary3}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                <Box flexDirection="row" flexWrap="wrap">
                                    {current_user?.skills.map((s, i) => (
                                        <Box
                                            key={i}
                                            marginRight="s"
                                            marginBottom="s"
                                            paddingVertical="s"
                                            paddingHorizontal="m"
                                            bg="primary3"
                                            borderRadius="m"
                                        >
                                            <Text variant="body" color="white">
                                                {s}
                                            </Text>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        marginBottom="m"
                                        variant="body2"
                                        opacity={0.7}
                                    >
                                        Work Experience
                                    </Text>
                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign
                                            name="edit"
                                            size={24}
                                            color={theme.colors.primary3}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                {current_user?.work_experiences.map((w, i) => (
                                    <Box
                                        key={i}
                                        flexDirection="row"
                                        alignItems="center"
                                        marginBottom="s"
                                    >
                                        <Image
                                            style={{ width: 40, height: 40 }}
                                            source={{ uri: w.image }}
                                            resizeMode="contain"
                                        />
                                        <Box marginLeft="s" flexGrow={1}>
                                            <Text variant="body2" opacity={0.7}>
                                                {w.position_title}
                                            </Text>
                                            <Box
                                                flexDirection="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Text
                                                    variant="small"
                                                    opacity={0.7}
                                                >
                                                    {w.where}
                                                </Text>
                                                <Text
                                                    variant="small"
                                                    opacity={0.7}
                                                >
                                                    {w.duration}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {display && (
                        <MotiView
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
                            <Box
                                marginHorizontal="m"
                                marginBottom="s"
                                padding="m"
                                bg="white"
                                borderRadius="m"
                            >
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        marginBottom="m"
                                        variant="body2"
                                        opacity={0.7}
                                    >
                                        Education
                                    </Text>
                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign
                                            name="edit"
                                            size={24}
                                            color={theme.colors.primary3}
                                        />
                                    </TouchableOpacity>
                                </Box>
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    marginBottom="s"
                                >
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={{
                                            uri: "https://image.flaticon.com/icons/png/512/3604/3604021.png",
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Box marginLeft="s" flexGrow={1}>
                                        <Text variant="body2" opacity={0.7}>
                                            {
                                                current_user?.education
                                                    .university_name
                                            }
                                        </Text>
                                        <Box
                                            flexDirection="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Text variant="small" opacity={0.7}>
                                                {
                                                    current_user?.education
                                                        .degree_name
                                                }
                                            </Text>
                                            <Text variant="small" opacity={0.7}>
                                                {
                                                    current_user?.education
                                                        .duration
                                                }
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </MotiView>
                    )}
                </AnimatePresence>
            </ScrollView>
        </Layout>
    );
};

export default ProfileScreen;
