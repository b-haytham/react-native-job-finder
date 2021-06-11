import { NavigatorScreenParams } from "@react-navigation/core"
import { Job, JobCategory } from "../redux/data_types"

export type AppStackParamList = {
    OnBoarding: undefined
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
    Search: undefined
    Job_Listing: {
        category?: JobCategory
    }
    Job_Detail: {
        job: Job
    }
}