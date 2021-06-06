import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack";
import theme from "../utils/theme";
import { ThemeProvider } from "@shopify/restyle";

const Navigation = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default Navigation;
