import React from "react";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { Job } from "../../redux/data_types";
import { Image } from "react-native";

interface SimpleJobCardProps extends BoxProps<Theme> {
    job: Job;
}

const SimpleJobCard: React.FC<SimpleJobCardProps> = ({ job, ...rest }) => {
    return (
        <Box
            elevation={10}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p="s"
            borderRadius="m"
            {...rest}
        >
            <Box flexDirection="row" alignItems="center">
                <Image
                    style={{ width: 80, height: 80 }}
                    source={{ uri: job.company.image }}
                />
                <Box>
                    <Box maxWidth={200}>
                        <Text  textAlign='justify' variant="body2"> {job.job_title} </Text>
                    </Box>
                    <Text variant="description"> {job.type} </Text>
                </Box>
            </Box>
            <Box>
                <Text variant="body2">{`${job.salary}k`}</Text>
            </Box>
        </Box>
    );
};

export default SimpleJobCard;
