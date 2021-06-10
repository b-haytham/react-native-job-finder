import React, { useEffect, useState } from "react";
import {
    Dimensions,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";

import Layout from "../components/Layout";

import {
    CategoriesScreenNavigationProps,
    CategoriesScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";

import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import { useAppSelector } from "../redux/store";
import { ScrollView } from "react-native-gesture-handler";
import { JobCategory } from "../redux/data_types";
import CategoryCard from "../components/cards/CategoryCard";
import { AnimatePresence, MotiView } from "moti";
import { Box } from "../utils/restyle";
import { useSharedValue } from "react-native-reanimated";
interface CategoriesScreenProps {
    navigation: CategoriesScreenNavigationProps;
    route: CategoriesScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");


const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
    navigation,
    route,
}) => {
    const theme = useTheme<Theme>();
    const categories = useAppSelector(
        (state) => state.categories.category_list
    );
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <Layout>
            {display ? (
                <FlatList
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
                />
            ) : (
                <Box flex={1} justifyContent="center" alignItems="center">
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.primary1}
                    />
                </Box>
            )}
            
        </Layout>
    );
};

export default CategoriesScreen;
