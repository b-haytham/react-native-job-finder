import { CompositeNavigationProp, RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { AppStackParamList, AuthStackParamList, MainStackParamList } from "./ParamListTypes"

export type OnBoardingScreenNavigationProps = StackNavigationProp<AppStackParamList, 'OnBoarding'>
export type OnBoardingScreenRouteProps = RouteProp<AppStackParamList, 'OnBoarding'>

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
export type JobDetailScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Job_Detail'>,
    StackNavigationProp<AppStackParamList>
>
export type ProfileScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Profile'>,
    StackNavigationProp<AppStackParamList>
>
export type FavouriteScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Favourites'>,
    StackNavigationProp<AppStackParamList>
>
export type ApplicationScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Applications'>,
    StackNavigationProp<AppStackParamList>
>
export type CategoriesScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Categories'>,
    StackNavigationProp<AppStackParamList>
>
export type JobListingScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Job_Listing'>,
    StackNavigationProp<AppStackParamList>
>
export type SearchScreenNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MainStackParamList, 'Search'>,
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
export type JobDetailScreenRouteProps = RouteProp<MainStackParamList, 'Job_Detail'>
export type ProfileScreenRouteProps = RouteProp<MainStackParamList, 'Profile'>
export type FavouriteScreenRouteProps = RouteProp<MainStackParamList, 'Favourites'>
export type ApplicationScreenRouteProps = RouteProp<MainStackParamList, 'Applications'>
export type CategoriesScreenRouteProps = RouteProp<MainStackParamList, 'Categories'>
export type JobListingScreenRouteProps = RouteProp<MainStackParamList, 'Job_Listing'>
export type SearchScreenRouteProps = RouteProp<MainStackParamList, 'Search'>
//-------------------------


