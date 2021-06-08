import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface AvatarProps extends BoxProps<Theme> {
    size: number;
    type: "square" | "round";
    source: ImageSourcePropType;
}

const Avatar: React.FC<AvatarProps> = ({ source, size, type, ...rest }) => {
    const theme = useTheme<Theme>();
    return (
        <Box
            bg="white"
            elevation={10}
            style={{
                borderRadius: type === "square" ? size / 4 : size / 2,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,

                elevation: 8,
            }}
            {...rest}
        >
            <Image
                width={size}
                height={size}
                style={{
                    width: size,
                    height: size,
                    borderRadius: type === "round" ? size / 2 : size / 4,
                    borderWidth: 2,
                    borderColor: theme.colors.primary1,
                }}
                resizeMode="cover"
                source={source}
            />
        </Box>
    );
};

export default Avatar;
