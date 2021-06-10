import React, { ReactNode, useState } from "react"
import { Dimensions, TouchableOpacity } from "react-native"

import { BoxProps } from "@shopify/restyle"
import { Box, Text } from "../../utils/restyle"
import { Theme } from "../../utils/theme"

interface CategoryCardProps extends BoxProps<Theme> {
    title: string
    icon?: ReactNode
    selected?: boolean 
    width: number
    onPress?(): void
    selectable?:boolean 
}


const CategoryCard: React.FC<CategoryCardProps> = ({onPress, selectable, width, title, icon, selected, ...rest}) => {
    const [isSelected, setIsSelected] = useState(selected ? true : false)
    return (
        <TouchableOpacity onPress={() => {
            if(selectable) {
                setIsSelected(!isSelected)
            }else {
                onPress!()
            }
        }}>
        <Box 
            elevation={10}
            borderWidth={2}
            width={width }
            minHeight={200}
            margin='s'
            p='m'
            borderRadius='m'
            bg={isSelected ? 'primary1' : 'white'}
            borderColor={isSelected ? 'white' : 'primary1'}
            justifyContent='center'
            alignItems='center'
        >
            <Text textAlign='center' variant='body2' color={isSelected ? 'white' : 'primary1'}>{title}</Text>
        </Box>
        </TouchableOpacity>
    )
}

export default CategoryCard