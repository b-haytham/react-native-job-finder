import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import Layout from '../components/Layout'

import { RegisterScreenNavigationProps, RegisterScreenRouteProps } from '../navigation/ScreensNavigationRouteProps'
import { Theme } from '../utils/theme'

import Constants from 'expo-constants'
import { Box, Text } from '../utils/restyle'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Input from '../components/forms/form_elements/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Button from '../components/forms/form_elements/Button'

const registerSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    confirm_password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
});

interface RegisterProps{
    navigation: RegisterScreenNavigationProps
    route: RegisterScreenRouteProps
}

const { width, height } = Dimensions.get('screen')
const HEADER_HEIGHT = height * .3

const Register: React.FC<RegisterProps> = ({ navigation, route }) =>{
    const theme = useTheme<Theme>()
    const formik = useFormik({
        initialValues: {
            full_name: 'John Doe',
            email: "John@doe.com",
            password: "password",
            confirm_password: 'password'
        },
        validationSchema: registerSchema,
        onSubmit: (values) => navigation.navigate('Login'),
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
                        Register
                    </Text>
                </Box>
            </Box>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView>
                    <Box marginHorizontal="m" marginTop="m">
                    <Input
                            error={formik.errors.full_name}
                            marginBottom="s"
                            onBlur={formik.handleBlur("full_name")}
                            textInputProps={{
                                placeholderTextColor: theme.colors.gray4,
                                placeholder: "Full Name",
                                keyboardType: "email-address",
                                value: formik.values.full_name,
                                onChangeText: (text) =>
                                    formik.handleChange("full_name")(text),
                            }}
                            left_icon={
                                <Ionicons
                                    name="person-outline"
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
                        <Input
                            error={formik.errors.confirm_password}
                            left_icon={
                                <Feather
                                    name="lock"
                                    size={24}
                                    color={theme.colors.primary1}
                                />
                            }
                            marginBottom="s"
                            secureTextEntry
                            onBlur={formik.handleBlur("confirm_password")}
                            textInputProps={{
                                placeholder: "Confirm Password",
                                placeholderTextColor: theme.colors.gray4,
                                value: formik.values.confirm_password,
                                onChangeText: (text) =>
                                    formik.handleChange("confirm_password")(text),
                            }}
                            right_icon={
                                formik.errors.confirm_password ? (
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
                            title="Register"
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
                            <Text variant='description'>You Have an account ? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text variant='body2' color='primary1'>Login </Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </ScrollView>
            </KeyboardAvoidingView>
        </Layout>
    )
}

export default Register