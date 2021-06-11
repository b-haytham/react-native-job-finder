import React, { ReactNode } from "react";
import { NativeSyntheticEvent, StyleProp, TextInputFocusEventData, TextInputProps, TextStyle } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../../utils/restyle";
import { Theme } from "../../../utils/theme";
import { TextInput } from "react-native-gesture-handler";

interface InputProps extends BoxProps<Theme> {
    textInputProps?: TextInputProps;
    textInputStyles?: StyleProp<TextStyle>;
    secureTextEntry?: boolean;
    left_icon?: ReactNode;
    right_icon?: ReactNode;
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined 
    error?: string | undefined
}

const Input: React.FC<InputProps> = ({
    textInputProps,
    textInputStyles,
    secureTextEntry,
    left_icon,
    right_icon,
    error,
    onBlur,
    ...rest
}) => {
    return (
        <Box
        {...rest}
        >
        <Box
            paddingHorizontal="m"
            paddingVertical="s"
            borderRadius="m"
            borderWidth={2}
            borderColor="primary1"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          
        >
            <Box flexDirection="row" alignItems="center">
                {left_icon && left_icon}
                <TextInput
                    onBlur={onBlur}
                    style={[
                        { marginLeft: left_icon ? 10 : 0 },
                        textInputStyles,
                    ]}
                    secureTextEntry={secureTextEntry}
                    {...textInputProps}
                />
            </Box>
            {right_icon && right_icon}
        </Box>
        {error && <Text paddingLeft='m' variant='small' color='error' opacity={.7}>{error}</Text>}
        </Box>
    );
};

export default Input;
