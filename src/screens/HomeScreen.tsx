import { AntDesign, Entypo } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { Dimensions, FlatList, Pressable, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import Avatar from "../components/Avatar";
import CategoryCard from "../components/cards/CategoryCard";
import SimpleJobCard from "../components/cards/SimpleJobCard";
import Hero from "../components/Hero";
import HiddenView from "../components/HiddenView";
import Layout from "../components/Layout";
import BackDrop from "../components/Navigation/BackDrop";
import Drawer from "../components/Navigation/Drawer";
import Selectables from "../components/Selectables";

import {
    HomeScreenNavigationProps,
    HomeScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { JobCategory } from "../redux/data_types";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface HomeScreenProps {
    navigation: HomeScreenNavigationProps;
    route: HomeScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const HIDDEN_VIEW_HEIGHT = height * .9

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    
    const hiddenViewTranslateY = useSharedValue(HIDDEN_VIEW_HEIGHT)

    const categories = useAppSelector(state => state.categories.category_list)
    const current_user = useAppSelector(state => state.user.current_user)

    const jobs = useAppSelector(state => state.jobs.job_list)

    // category state
    const [category, setCategory] = useState(null);
    // category state

    // search state
    const [searchTerm, setSearchTerm] = useState("");
    // search state

    const drawerTranslateX = useSharedValue(-width * 0.7);

    const showDrawer = () => {
        drawerTranslateX.value = withTiming(0);
    };



    return (
        <>
            <HiddenView 
                width={width}
                height={HIDDEN_VIEW_HEIGHT}
                component={<FlatList
                    keyExtractor={(item: JobCategory) => item.id.toString()}
                    style={{ alignSelf: "center" }}
                    data={categories}
                    numColumns={2}
                    renderItem={({ item }: { item: JobCategory }) => (
                        
                            <CategoryCard
                                onPress={() =>
                                    navigation.navigate("Job_Listing", {
                                        category: item,
                                    })
                                }
                                width={width / 2 - theme.spacing.m}
                                category={item}
                            />
                        
                    )}
                />}
                translateY={hiddenViewTranslateY}
            />
            <Drawer
                width={width * 0.7}
                height={height}
                translationX={drawerTranslateX}
                navigation={navigation}
            />
            {/* <BackDrop width={width} height={height}  onPress={() => {console.log('Pressed')}} /> */}
            <Layout bg="gray1">
                <ScrollView>
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
                                    color={theme.colors.primary3}
                                />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>navigation.navigate('Profile')}>
                        <Avatar
                            margin="m"
                            size={40}
                            type="square"
                            source={{
                                uri: current_user!.image,
                            }}
                        />
                        </TouchableOpacity>
                    </Box>
                    <Hero
                        margin="m"
                        title="Hello Haytham!"
                        subtitle="Let's find your dream job "
                        searchValue={searchTerm}
                        onChangeValue={(v) => setSearchTerm(v)}
                    />
                    <Box marginVertical="m">
                        <Box
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            marginHorizontal="m"
                            marginBottom="m"
                        >
                            <Text variant="headline4">Categories</Text>
                            <TouchableOpacity onPress={() => hiddenViewTranslateY.value = 0}>
                                <Text variant="body2" color="primary1">
                                    Sea all
                                </Text>
                            </TouchableOpacity>
                        </Box>
                        <Selectables
                            value={category}
                            items={[
                                "Design",
                                "finance",
                                "Programming",
                                "Architucture",
                            ]}
                            onChange={(v) => console.log(v)}
                        />
                    </Box>
                    <Box marginVertical="m">
                        <Box
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            marginHorizontal="m"
                            marginBottom="m"
                        >
                            <Text variant="headline4">Job offers</Text>
                        </Box>
                        {jobs.map(j => (
                            <SimpleJobCard 
                                key={j.id}
                                job={j}
                                onImagePress={() => navigation.navigate('Job_Detail', {job: j})}
                                marginHorizontal='m'
                                
                                marginBottom='m'
                            />
                        ))}
                    </Box>
                </ScrollView>
            </Layout>
        </>
    );
};

export default HomeScreen;
