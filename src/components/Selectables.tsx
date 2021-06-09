import React, { useState } from "react";
import { ScrollView } from "react-native";

import { BoxProps } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { TouchableOpacity } from "react-native-gesture-handler";


interface SelectablesProps extends BoxProps<Theme> {
    items: string[] | [];
    value: string | null;
    onChange(value: string): void;
}

const Selectables: React.FC<SelectablesProps> = ({
    items = [],
    value,
    onChange,
    ...rest
}) => {
    const [selected, setSelected] = useState(value);
    return (
        <Box {...rest}>
            <ScrollView
                
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {items.length > 0 &&
                    items.map((it, index) => {
                        return (
                            <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setSelected(it);
                                onChange(it);
                            }}
                            >
                            <Box
                                paddingHorizontal='m'
                                paddingVertical='s'
                                marginLeft="m"
                                maxWidth={150}
                                borderWidth={selected === it ? 0 : 1}
                                
                                overflow="hidden"
                                bg={selected === it ? 'primary2' : 'white'}
                                borderRadius="m"
                              
                            >
                                <Text variant='body2' color={selected === it ? 'white' : 'black3'}> {it} </Text>
                            </Box>
                            </TouchableOpacity>
                        );
                    })}
            </ScrollView>
        </Box>
    );
};

export default Selectables;
