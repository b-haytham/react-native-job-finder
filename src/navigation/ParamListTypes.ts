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
    Job_Detail: {
        job: Job
    }
}