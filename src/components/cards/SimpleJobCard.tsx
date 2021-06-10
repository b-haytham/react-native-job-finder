import React from "react";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../../utils/restyle";
import { Theme } from "../../utils/theme";
import { Job } from "../../redux/data_types";
import { Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

interface SimpleJobCardProps extends BoxProps<Theme> {
    job: Job;
    onImagePress(): void;
    in_favourite?: boolean
    onDelete?(): void
}

const SimpleJobCard: React.FC<SimpleJobCardProps> = ({
    job,
    onImagePress,
    in_favourite,
    onDelete,
    ...rest
}) => {
    const theme = useTheme<Theme>();
    return (
        <Box
            bg="white"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p="s"
            borderRadius="m"
            {...rest}
        >
            {in_favourite && <Box
                position="absolute"
                alignItems="center"
                justifyContent="center"
                bg="primary3"
                width={20}
                height={20}
                top={theme.spacing.s}
                right={theme.spacing.s}
                elevation={15}
                style={{ borderRadius: 10 }}
            >
                <TouchableOpacity onPress={onDelete}>
                    <Entypo name="cross" size={15} color={"white"} />
                </TouchableOpacity>
            </Box>}
            <Box flexDirection="row" alignItems="center">
                <TouchableOpacity onPress={onImagePress}>
                    <SharedElement id={`image-${job.id}`}>
                        <Image
                            style={{ width: 80, height: 80 }}
                            source={{ uri: job.company.image }}
                            resizeMode="contain"
                        />
                    </SharedElement>
                </TouchableOpacity>
                <Box marginLeft="s">
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
            <Box position="absolute" right={10} bottom={10}>
                {job.salary && (
                    <Text variant="description">{`${job.salary.min}k - ${job.salary.max}k`}</Text>
                )}
            </Box>
        </Box>
    );
};

export default React.memo(SimpleJobCard);
