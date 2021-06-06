import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Constants from "expo-constants";
import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box } from "../utils/restyle";

interface LoginProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}

const Login: React.FC<LoginProps> = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Box
                padding='xl'
                bg='primary'
            >
                
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
});

export default Login;
