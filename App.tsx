import "react-native-reanimated";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
    AntDesign,
    Feather,
    FontAwesome5,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { useAssets } from "expo-asset";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

export default function App() {
    const [assets] = useAssets([
        require("./assets/empty.png"),
        require("./assets/resume.png"),
        require("./assets/job-offers.png"),
    ]);

    const [fontsLoaded] = useFonts({
        ...AntDesign.font,
        ...MaterialIcons.font,
        ...FontAwesome5.font,
        ...MaterialCommunityIcons.font,
        ...Fontisto.font,
        ...Feather.font,
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
        "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
    });

    if (!fontsLoaded || !assets) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <Navigation />
                <StatusBar />
            </Provider>
        );
    }
}
