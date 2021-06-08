import { BoxProps } from "@shopify/restyle"
import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Box } from "../utils/restyle"
import { Theme } from "../utils/theme"

import Constants from 'expo-constants'

interface LayoutProps extends BoxProps<Theme> {
    no_padding_top?: boolean
}

const Layout: React.FC<LayoutProps> = ({children, no_padding_top, ...rest}) => {
    return (
        <Box
            style={{flex: 1, paddingTop:  no_padding_top ? 0 : Constants.statusBarHeight}}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Layout