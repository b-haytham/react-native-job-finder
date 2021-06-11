import {
    Entypo,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { BoxProps, useTheme } from "@shopify/restyle";
import React from "react";
import {} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface HeroProps extends BoxProps<Theme> {
    title: string;
    subtitle: string;
    searchValue: string
    onChangeValue(value: string): void
}

const Hero: React.FC<HeroProps> = ({ title, subtitle ,searchValue , onChangeValue, ...rest }) => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation()
    return (
        <Box
            bg="primary1"
            padding="m"
            borderRadius="m"
            elevation={10}
            {...rest}
        >
            <Text marginBottom="s" variant="headline3" color="white">
                {title}
            </Text>
            <Text variant="body" color="white">
                {subtitle}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <SharedElement id='search'>
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
                        value={searchValue}
                        onChangeText={onChangeValue}
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
            </SharedElement>
            </TouchableOpacity>
        </Box>
    );
};

export default Hero;
