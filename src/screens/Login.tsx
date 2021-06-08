import React from "react";
import { StyleSheet, View, ScrollView, Button, Dimensions } from "react-native";

import Constants from "expo-constants";
import {
    LoginScreenNavigationProps,
    LoginScreenRouteProps,
} from "../navigation/ScreensNavigationRouteProps";
import { Box, Text } from "../utils/restyle";
import { useAppSelector } from "../redux/store";
import SimpleJobCard from "../components/cards/SimpleJobCard";
import MainJobCard from "../components/cards/MainJobCard";
import { useSharedValue } from "react-native-reanimated";
import FilterView from "../components/FilterView";

interface LoginProps {
    navigation: LoginScreenNavigationProps;
    route: LoginScreenRouteProps;
}

const { width, height } = Dimensions.get('screen')
const FILTER_VIEW_HEIGHT = height * .9

const Login: React.FC<LoginProps> = ({ navigation, route }) => {
    const jobs = useAppSelector(state => state.jobs.job_list)
    const filterViewTranslateY = useSharedValue(FILTER_VIEW_HEIGHT)
    return (
        <View style={styles.container}>
            <ScrollView>
                <Button title='Home' onPress={() => navigation.navigate('Main', {screen: 'Home'})} />
            <Box
                    borderRadius="l"
                    elevation={30}
                    margin="xl"
                    padding="xl"
                    bg='primaryDarker'
                ></Box>
                <Box
                    borderRadius="l"
                    elevation={30}
                    margin="xl"
                    padding="xl"
                    bg="primary1"
                ></Box>
                <Box
                    borderRadius="l"
                    elevation={30}
                    margin="xl"
                    padding="xl"
                    bg="primary2"
                ></Box>
                <Box
                    borderRadius="l"
                    elevation={30}
                    margin="xl"
                    padding="xl"
                    bg="primary3"
                ></Box>
                <Box borderRadius="l" margin="xl" padding="xl" bg="gray1"></Box>
                <Box borderRadius="l" margin="xl" padding="xl" bg="gray2"></Box>
                <Box borderRadius="l" margin="xl" padding="xl" bg="gray3"></Box>
                <Box borderRadius="l" margin="xl" padding="xl" bg="gray4"></Box>
                <Box
                    borderRadius="l"
                    margin="xl"
                    padding="xl"
                    bg="black1"
                ></Box>
                <Box
                    borderRadius="l"
                    margin="xl"
                    padding="xl"
                    bg="black2"
                ></Box>
                <Box
                    borderRadius="l"
                    margin="xl"
                    padding="xl"
                    bg="black3"
                ></Box>
                <Box
                    borderRadius="l"
                    margin="xl"
                    padding="xl"
                    bg="black4"
                ></Box>

               <Box
                margin="xl"
                padding="xl"
               >
                   <Text variant='headline' >Headline</Text>
                   <Text variant='headline2' >Headline 2</Text>
                   <Text variant='headline3' >Headline 3</Text>
                   <Text variant='body' >Body</Text>
                   <Text variant='body2' >Body 2</Text>
                   <Text variant='description' >Desciption</Text>
               </Box>
               <Box 
                   m='m' 
               >
                
                   <SimpleJobCard  job={jobs[0]} />
               </Box>
               <Box
                 m='m'      
               >
                   <MainJobCard  job={jobs[0]} />
               </Box>
               <Box>
                   <Button title='Filter' onPress={() => filterViewTranslateY.value = 0} />
               </Box>
            </ScrollView>
            <FilterView width={width} height={FILTER_VIEW_HEIGHT} translateY={filterViewTranslateY} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Constants.statusBarHeight,
    },
});

export default Login;
