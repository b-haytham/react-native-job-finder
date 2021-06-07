import { BoxProps, TextProps } from "@shopify/restyle"
import React from "react"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Box, Text } from "../../../utils/restyle"
import { Theme } from "../../../utils/theme"

interface ButtonProps extends BoxProps<Theme> {
    textProps?: TextProps<Theme>
    title: string
    onPress(): void
}

const Button: React.FC<ButtonProps> = ({title, textProps, onPress,  ...rest}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <Box
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            paddingVertical='m'
            borderRadius='m'
            bg='primary1'
            {...rest}
        >
            <Text variant='body2' color='white' {...textProps}>{title}</Text>
        </Box>
        </TouchableOpacity>
    )
}

export default Button