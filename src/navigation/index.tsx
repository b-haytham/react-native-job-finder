import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { myTheme } from "../utils/theme";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const Navigation = () => {
    return (
        <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...myTheme}}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </ApplicationProvider>
        </>
    );
};

export default Navigation;
