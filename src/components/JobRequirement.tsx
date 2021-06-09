import React from "react"
import {  } from "react-native"

import { BoxProps } from "@shopify/restyle"
import { Box, Text } from "../utils/restyle"
import { Theme } from "../utils/theme"

interface JobRequirementProps extends BoxProps<Theme> {
    text: string
}

const JobRequirement: React.FC<JobRequirementProps> = ({text, ...rest}) => {
    return (
        <Box
            flexDirection='row'
            alignItems='flex-start'
            {...rest}
        >
            <Box marginRight='m' bg='primary1' width={10} height={10} style={{borderRadius: 5}}>

            </Box>
            <Box flexGrow={1} paddingRight='m'>
                <Text textBreakStrategy='highQuality' variant='description'>{text}</Text>
            </Box>
        </Box>
    )
}

export default JobRequirement