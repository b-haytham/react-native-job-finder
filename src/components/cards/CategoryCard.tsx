import React, { ReactNode, useState } from "react"
import { Dimensions, TouchableOpacity } from "react-native"

import { BoxProps } from "@shopify/restyle"
import { Box, Text } from "../../utils/restyle"
import { Theme } from "../../utils/theme"
import { SharedElement } from "react-navigation-shared-element"
import { JobCategory } from "../../redux/data_types"

interface CategoryCardProps extends BoxProps<Theme> {
    category: JobCategory
    icon?: ReactNode
    selected?: boolean 
    width: number
    onPress?(): void
    selectable?:boolean 
}


const CategoryCard: React.FC<CategoryCardProps> = ({onPress, selectable, width, category, icon, selected, ...rest}) => {
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
            <SharedElement id={`category-${category.id}`}>

            <Text textAlign='center' variant='body2' color={isSelected ? 'white' : 'primary1'}>{category.name}</Text>
            </SharedElement>
        </Box>
        </TouchableOpacity>
    )
}

export default CategoryCard