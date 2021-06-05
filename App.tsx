import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { } from "react-native";

import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { myTheme } from "./src/utils/theme";

export default function App() {

    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    })

    if(!fontsLoaded) {
        return <AppLoading />
    }else {
        return (
            <Provider store={store}>
                <Navigation />
                <StatusBar backgroundColor={myTheme["color-primary-500"]} />
            </Provider>
        );
    }

}
