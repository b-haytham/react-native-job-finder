import React from "react";
import { Image } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { Job } from "../../redux/data_types";

interface MainJobCardProps extends BoxProps<Theme> {
    job: Job;
}

const MainJobCard: React.FC<MainJobCardProps> = ({ job, ...rest }) => {
    return (
        <Box bg="primary1" {...rest} p="m" borderRadius="m" elevation={10}>
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
                    <Image
                        source={{ uri: job.company.image }}
                        style={{ width: 50, height: 50 }}
                    />
                </Box>
                <FontAwesome5 name="heart" size={30} color="white" />
            </Box>
            <Box>
                <Text variant="body" color="white">
                    {job.company.name}
                </Text>
                <Text variant="headline3" color="white">
                    {job.job_title}
                </Text>
                <Box flexDirection="row">
                    <Text variant="body2" color="white">
                        {`${job.salary}k/m - `}
                    </Text>
                    <Text variant="body" color="white">
                        {`${job.type}`}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default MainJobCard;
