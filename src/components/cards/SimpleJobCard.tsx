import React from "react";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { Job } from "../../redux/data_types";
import { Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SimpleJobCardProps extends BoxProps<Theme> {
    job: Job;
    onImagePress(): void
}

const SimpleJobCard: React.FC<SimpleJobCardProps> = ({ job, onImagePress , ...rest }) => {
    return (
        <Box
            bg='white'
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p="s"
            borderRadius="m"
            {...rest}
        >
            <Box flexDirection="row" alignItems="center">
                <TouchableOpacity onPress={onImagePress}>
                <SharedElement id={`image-${job.id}`}>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={{ uri: job.company.image }}
                    resizeMode='contain'
                />
                </SharedElement>
                </TouchableOpacity>
                <Box marginLeft='s'>
                    <Box maxWidth={200}>
                        <SharedElement id={`job_title-${job.id}`}>
                        <Text textAlign="justify" variant="body2">
                            {job.job_title}
                        </Text>
                        </SharedElement>
                    </Box>
                    <Text variant="description">{job.type}</Text>
                </Box>
            </Box>
            <Box position='absolute' right={10} bottom={10}>
                {job.salary && <Text variant="description">{`${job.salary.min}k - ${job.salary.max}k`}</Text>}
            </Box>
        </Box>
    );
};

export default SimpleJobCard;
