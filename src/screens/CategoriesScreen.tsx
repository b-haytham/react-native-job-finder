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

    const leftC = categories.filter((c) => c.id % 2 === 0);
    const rightC = categories.filter((c) => c.id % 2 !== 0);

    useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <Layout>
            {/* {display ? (
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <Box flex={1} flexDirection="row" justifyContent="center">
                        <Box>
                            {leftC.map((c) => (
                            <AnimatePresence 
                            exitBeforeEnter
                                key={c.id}
                            >
                                <MotiView
                                    from={{
                                        opacity: 0,
                                        scale: 2,
                                        translateY: -50,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        translateY: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.5,
                                        translateY: -50
                                    }}
                                    
                                >
                                    <CategoryCard
                                        width={width / 2 - theme.spacing.m}
                                        title={c.name}
                                    />
                                </MotiView>
                            </AnimatePresence>
                            ))}
                        </Box>

                        <Box>
                            {rightC.map((c) => (
                        <AnimatePresence
                        exitBeforeEnter
                             key={c.id}
                         >
                                <MotiView
                                    from={{
                                        opacity: 0,
                                        scale: 2,
                                        translateY: -50,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        translateY: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.5,
                                        translateY: -50
                                    }}
                                >
                                    <CategoryCard
                                        width={width / 2 - theme.spacing.m}
                                        title={c.name}
                                    />
                                </MotiView>
                            </AnimatePresence>
                            ))}
                        </Box>
                    </Box>
                </ScrollView>
            ) : (
                <Box flex={1} justifyContent="center" alignItems="center">
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.primary1}
                    />
                </Box>
            )} */}

            {display ? <FlatList 
                keyExtractor={(item: JobCategory) => item.id.toString()}
                style={{alignSelf:'center'}}
                data={categories}
                numColumns={2}
                renderItem={({item}: {item: JobCategory}) => (  
                    <MotiView
                        from={{
                            opacity: 0,
                            scale: .5,
                            translateY: -50
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            translateY: 0
                        }}
                        delay={300}
                    >
                        <CategoryCard onPress={() => {}}  width={width / 2 - theme.spacing.m} title={item.name} />
                    </MotiView>
                )}
            />: (
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
