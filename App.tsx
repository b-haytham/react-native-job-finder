import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { } from "react-native";

import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
            <StatusBar style="auto" />
        </Provider>
    );
}
