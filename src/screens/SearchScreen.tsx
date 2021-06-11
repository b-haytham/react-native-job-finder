import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
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

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();
    const [seachTerm, setSearchTerm] = useState("");

    return (
        <Layout>
            <SharedElement id='search'>
            <Box margin="m" p="m" bg="primary1" elevation={10} borderRadius='m'>
                <Text variant='headline4' color='white'>Explore !</Text>
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
                        <TouchableOpacity>
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
        </Layout>
    );
};

export default SearchScreen;
