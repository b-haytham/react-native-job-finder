import { BoxProps } from "@shopify/restyle";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box } from "../../utils/restyle";
import { Theme } from "../../utils/theme";

interface BackDropProps extends BoxProps<Theme> {
    width: number;
    height: number;
    onPress(): void;
}

const BackDrop: React.FC<BackDropProps> = ({ width, height, onPress }) => {
    return (
        <Box
            position="absolute"
            width={width}
            height={height}
            style={StyleSheet.absoluteFillObject}
            bg="black1"
            opacity={0.2}
            zIndex={700}
            onTouchStart={onPress}
        >
            <TouchableWithoutFeedback style={{flex: 1}}  />
        </Box>
    );
};

export default BackDrop;
