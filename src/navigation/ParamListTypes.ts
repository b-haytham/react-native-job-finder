import { NavigatorScreenParams } from "@react-navigation/core"

export type AppStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>
    Main: NavigatorScreenParams<MainStackParamList>
}

export type AuthStackParamList = {
    Login: undefined
    Register: undefined
}


export type MainStackParamList = {
    Home: undefined
}