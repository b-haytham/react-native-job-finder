import React from 'react'

import { BoxProps } from '@shopify/restyle'
import { Box } from '../../utils/restyle'
import { Theme } from '../../utils/theme'
import { Job } from '../../redux/data_types'

interface MainJobCardProps extends BoxProps<Theme>{
    job: Job
}

const MainJobCard: React.FC<MainJobCardProps> = ({ job, ...rest}) =>{
    return (
        <Box
            {...rest}
        >

        </Box>
    )
}



export default MainJobCard