import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "@ui-kitten/components";

import Constants from "expo-constants";
import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import Layout from "../components/Layout";
import Text, { Fonts } from "../components/Text";
import { IconContainer } from "../components/Header";

interface LoginProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}

const Login: React.FC<LoginProps> = ({ navigation, route }) => {
    return (
        <Layout
            no_padding
            level="4"
            style={styles.container}
            headerProps={{
                title: 'Login',
                subTitle: 'Please Login',
                left: (
                    <IconContainer>
                    <Icon
                        name="arrow-ios-back-outline"
                        style={{ width: 25, height: 25 }}
                        fill="#000"
                    />
                    </IconContainer>
                ),
                right: (
                    <IconContainer>
                    <Icon
                        name="arrow-ios-back-outline"
                        style={{ width: 25, height: 25 }}
                        fill="#000"
                    />
                    </IconContainer>
                ),
            }}
        >
            
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
});

export default Login;
