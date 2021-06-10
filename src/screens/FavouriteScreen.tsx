import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import {
    FavouriteScreenNavigationProps,
    FavouriteScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";

import Constants from "expo-constants";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import { useAppDispatch, useAppSelector } from "../redux/store";
import SimpleJobCard from "../components/cards/SimpleJobCard";

import { removeFromFavourite } from "../redux/favourite/favouriteSlice";

import { AnimatePresence, MotiView } from "moti";

interface FavouriteScreenProps {
    navigation: FavouriteScreenNavigationProps;
    route: FavouriteScreenRouteProps;
}

const FavouriteScreen: React.FC<FavouriteScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const dispatch = useAppDispatch();
    const favourites_list = useAppSelector(
        (state) => state.favourites.favourite_list
    );

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
                    Bookmarks
                </Text>
            </Box>
            <ScrollView>
                <AnimatePresence>
                    {favourites_list.map((f) => {
                        return (
                            <MotiView
                                key={f.id}
                                from={{
                                    opacity: 0,
                                    translateX: -50,
                                }}
                                animate={{
                                    opacity: 1,
                                    translateX: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                            >
                                <SimpleJobCard
                                    marginHorizontal="m"
                                    marginVertical="s"
                                    key={f.id}
                                    flexGrow={1}
                                    job={f}
                                    onImagePress={() =>
                                        navigation.navigate("Job_Detail", {
                                            job: f,
                                        })
                                    }
                                    in_favourite
                                    onDelete={() =>
                                        dispatch(removeFromFavourite(f.id))
                                    }
                                />
                            </MotiView>
                        );
                    })}
                </AnimatePresence>
            </ScrollView>
        </Layout>
    );
};

export default FavouriteScreen;
