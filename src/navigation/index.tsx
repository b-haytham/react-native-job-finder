import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const Navigation = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </ApplicationProvider>
    );
};

export default Navigation;
