import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, Platform } from "react-native";

import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import Layout from "../components/Layout";

import Constants from "expo-constants";
import Button from "../components/forms/form_elements/Button";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../utils/theme";
import Input from "../components/forms/form_elements/Input";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

import * as Yup from "yup";
import { useFormik } from "formik";

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});
interface LoginProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}

const { width, height } = Dimensions.get("screen");

const HEADER_HEIGHT = height * 0.3;

const Login: React.FC<LoginProps> = ({ navigation, route }) => {
    const theme = useTheme<Theme>();

    const formik = useFormik({
        initialValues: {
            email: "John@doe.com",
            password: "password",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => navigation.navigate('Main', {screen: 'Home'}),
    });

    console.log(formik.errors);

    return (
        <Layout no_padding_top>
            <Box
                width={width}
                height={HEADER_HEIGHT}
                bg="primary1"
                style={{ borderBottomRightRadius: width / 2 }}
            >
                <Box
                    position="absolute"
                    top={HEADER_HEIGHT / 2 - Constants.statusBarHeight}
                    left={theme.spacing.m}
                >
                    <Text variant="headline" color="white">
                        Welcome!
                    </Text>
                    <Text variant="headline4" color="white">
                        Login
                    </Text>
                </Box>
            </Box>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView>
                    <Box marginHorizontal="m" marginTop="m">
                        <Input
                            error={formik.errors.email}
                            marginBottom="s"
                            onBlur={formik.handleBlur("email")}
                            textInputProps={{
                                placeholderTextColor: theme.colors.gray4,
                                placeholder: "E mail",
                                keyboardType: "email-address",
                                value: formik.values.email,
                                onChangeText: (text) =>
                                    formik.handleChange("email")(text),
                            }}
                            left_icon={
                                <Feather
                                    name="mail"
                                    size={24}
                                    color={theme.colors.primary1}
                                />
                            }
                            right_icon={
                                formik.errors.email ? (
                                    <Box
                                        width={20}
                                        height={20}
                                        justifyContent="center"
                                        alignItems="center"
                                        bg='error'
                                        style={{ borderRadius: 10 }}
                                    >
                                        <Entypo
                                            name="cross"
                                            size={20}
                                            color={theme.colors.white}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        width={20}
                                        height={20}
                                        justifyContent="center"
                                        alignItems="center"
                                        bg='primary1'
                                        style={{ borderRadius: 10 }}
                                    >
                                    <AntDesign
                                        name="check"
                                        size={20}
                                        color={theme.colors.white}
                                    />
                                    </Box>
                                )
                            }
                        />
                        
                        <Input
                            error={formik.errors.password}
                            left_icon={
                                <Feather
                                    name="lock"
                                    size={24}
                                    color={theme.colors.primary1}
                                />
                            }
                            marginBottom="s"
                            secureTextEntry
                            onBlur={formik.handleBlur("password")}
                            textInputProps={{
                                placeholder: "Password",
                                placeholderTextColor: theme.colors.gray4,
                                value: formik.values.password,
                                onChangeText: (text) =>
                                    formik.handleChange("password")(text),
                            }}
                            right_icon={
                                formik.errors.password ? (
                                    <Box
                                        width={20}
                                        height={20}
                                        justifyContent="center"
                                        alignItems="center"
                                        bg='error'
                                        style={{ borderRadius: 10 }}
                                    >
                                        <Entypo
                                            name="cross"
                                            size={20}
                                            color={theme.colors.white}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        width={20}
                                        height={20}
                                        justifyContent="center"
                                        alignItems="center"
                                        bg='primary1'
                                        style={{ borderRadius: 10 }}
                                    >
                                    <AntDesign
                                        name="check"
                                        size={20}
                                        color={theme.colors.white}
                                    />
                                    </Box>
                                )
                            }
                        />
                        
                        <Button
                            marginTop='m'
                            title="Login"
                            onPress={
                                formik.handleSubmit
                                // navigation.navigate("Main", { screen: "Home" })
                            }
                        />
                        <Box 
                            marginTop='m'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='center'

                        >
                            <Text variant='description'>Don't Have account ? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text variant='body2' color='primary1'>Register </Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </ScrollView>
            </KeyboardAvoidingView>
        </Layout>
    );
};

export default Login;
