import React from "react";
import { Image } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { Job } from "../../redux/data_types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/core";

interface MainJobCardProps extends BoxProps<Theme> {
    job: Job;
    status?: "Pending" | "Viewed" | "Accepted" | "Selected" | "Rejected";
}

const MainJobCard: React.FC<MainJobCardProps> = ({ job, status, ...rest }) => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation()
    return (
        <Box
            bg="white"
            {...rest}
            p="m"
            borderRadius="m"
            elevation={5}
            borderWidth={2}
            borderColor="primary1"
        >
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box
                    bg="white"
                    width={70}
                    height={70}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="m"
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Job_Detail', {job: job})}>
                <SharedElement id={`image-${job.id}`}>
                    <Image
                        source={{ uri: job.company.image }}
                        style={{ width: 70, height: 70 }}
                        resizeMode="contain"
                    />
                    </SharedElement>
                    </TouchableOpacity>
                </Box>
                <Box
                    paddingHorizontal="m"
                    paddingVertical="s"
                    borderRadius={"m"}
                    borderWidth={1}
                    style={{
                        borderColor:
                            status === "Selected"
                                ? theme.colors.success
                                : status === "Viewed"
                                ? "#FFCC00"
                                : theme.colors.black3,
                    }}
                >
                    <Text
                        variant="body2"
                        style={{
                            color:
                                status === "Selected"
                                    ? theme.colors.success
                                    : status === "Viewed"
                                    ? "#FFCC00"
                                    : theme.colors.black3,
                        }}
                    >
                        {status}
                    </Text>
                </Box>
            </Box>
            <Box>
                <Text variant="body">{job.company.name}</Text>
                <SharedElement id={`job_title-${job.id}`}>
                <Text variant="headline3">{job.job_title}</Text>
                </SharedElement>
                {job.salary && (
                    <Box flexDirection="row" justifyContent="space-between">
                        <Text variant="body2">
                            {`${job.salary.min}k/m - ${job.salary.max}k/m`}
                        </Text>
                        <Text variant="body">{`${job.type}`}</Text>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default MainJobCard;
