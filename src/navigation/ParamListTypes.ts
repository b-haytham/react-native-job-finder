import { NavigatorScreenParams } from "@react-navigation/core"
import { Job } from "../redux/data_types"

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
    Profile: undefined
    Favourites: undefined
    Applications: undefined
    Categories: undefined
    Job_Detail: {
        job: Job
    }
}