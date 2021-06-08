import { AntDesign, Entypo } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import Avatar from "../components/Avatar";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import BackDrop from "../components/Navigation/BackDrop";
import Drawer from "../components/Navigation/Drawer";

import {
    HomeScreenNavigationProps,
    HomeScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();

    const [searchTerm, setSearchTerm] = useState("");
    const drawerTranslateX = useSharedValue(-width * .61);
    

    const showDrawer = () => {
        
        drawerTranslateX.value = withTiming(0);
    };

    return (
        <>
            <Drawer
                width={width * 0.6}
                height={height}
                translationX={drawerTranslateX}
              
            />
            {/* <BackDrop width={width} height={height}  onPress={() => {console.log('Pressed')}} /> */}
            <Layout bg="gray1">
                <Box
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    overflow="visible"
                >
                    <TouchableOpacity onPress={showDrawer}>
                        <Box elevation={10} margin="m">
                            <AntDesign
                                name="menu-fold"
                                size={30}
                                color={theme.colors.primary1}
                            />
                        </Box>
                    </TouchableOpacity>
                    
                        <Avatar
                            
                            margin="m"
                            size={40}
                            type="square"
                            source={{
                                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                            }}
                        />
                    </Box>
                <Hero
                    margin="m"
                    title="Hello Haytham!"
                    subtitle="Let's find your dream job "
                    searchValue={searchTerm}
                    onChangeValue={(v) => setSearchTerm(v)}
                />
            </Layout>
        </>
    );
};

export default HomeScreen;
