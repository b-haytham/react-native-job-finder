import { CompositeNavigationProp, RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { AppStackParamList, AuthStackParamList, MainStackParamList } from "./ParamListTypes"

//--------------------------
// auth stack navigation props
export type LoginScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Login'>,
    StackNavigationProp<AppStackParamList>
>
export type RegisterScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Register'>,
    StackNavigationProp<AppStackParamList>
>
//----------------------------------------



//--------------------------------
// main stack navigation props
export type HomeScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Home'>,
    StackNavigationProp<AppStackParamList>
>
//--------------------------------



//-------------------------
// auth stack route props
export type LoginScreenRouteProps = RouteProp<AuthStackParamList, 'Login'>
export type RegisterScreenRouteProps = RouteProp<AuthStackParamList, 'Register'>
//-------------------------



//------------------------
//main stack route props 
export type HomeScreenRouteProps = RouteProp<MainStackParamList, 'Home'>
//-------------------------


