import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { MotiView } from "moti";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSharedValue, withDelay } from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import FilterView from "../components/FilterView";
import Layout from "../components/Layout";
import {
    SearchScreenNavigationProps,
    SearchScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface SearchScreenProps {
    navigation: SearchScreenNavigationProps;
    route: SearchScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");
const FILTER_VIEW_HEIGHT = height * 0.8;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const [seachTerm, setSearchTerm] = useState(
        route.params.search_term ? route.params.search_term : ""
    );

    const filterViewTranslateY = useSharedValue(FILTER_VIEW_HEIGHT);

    useEffect(() => {
        if (route.params.show_filters) {
            setTimeout(() => {
                filterViewTranslateY.value = 0;
            }, 500);
        }
    }, [route.params.show_filters]);

    return (
        <Layout bg='white'>
            <FilterView
                onApply={() =>
                    (filterViewTranslateY.value = FILTER_VIEW_HEIGHT)
                }
                zIndex={5000}
                translateY={filterViewTranslateY}
                width={width}
                height={FILTER_VIEW_HEIGHT}
            />
            <SharedElement id="search">
                <Box
                    margin="m"
                    p="m"
                    bg="primary1"
                    elevation={10}
                    borderRadius="m"
                >
                    <Text variant="headline4" color="white">
                        Explore !
                    </Text>
                    <Box flexDirection="row" alignItems="center" marginTop="m">
                        <Box
                            flexGrow={1}
                            flexDirection="row"
                            alignItems="center"
                            bg="white"
                            borderRadius="m"
                            paddingHorizontal="m"
                            paddingVertical="s"
                        >
                            <TouchableOpacity>
                                <FontAwesome5
                                    name="search"
                                    size={24}
                                    color={theme.colors.primary1}
                                />
                            </TouchableOpacity>
                            <TextInput
                                style={{ marginLeft: 10 }}
                                placeholder="Search"
                                value={seachTerm}
                                onChangeText={setSearchTerm}
                            />
                        </Box>
                        <Box marginLeft="m" p="s" bg="white" borderRadius="s">
                            <TouchableOpacity
                                onPress={() => {
                                    filterViewTranslateY.value = 0;
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="format-list-bulleted-type"
                                    size={24}
                                    color={theme.colors.primary1}
                                />
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </SharedElement>
            <MotiView
                from={{
                    opacity: 0,
                }}
                animate={{ opacity: 1 }}
                delay={300}
            >
                <Box flex={1} alignItems="center">
                    <Image
                        style={{
                            width: width * 0.6,
                            height: width * 0.6,
                        }}
                        resizeMode="contain"
                        source={require("../../assets/empty.png")}
                    />
                    <Text textAlign="center" variant="description">
                        Start Typing!!
                    </Text>
                </Box>
            </MotiView>
        </Layout>
    );
};

export default SearchScreen;
