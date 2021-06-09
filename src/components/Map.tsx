import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { useTheme } from "@shopify/restyle";
import MapView, { Marker } from "react-native-maps";
import { Box } from "../utils/restyle";
import { Theme } from "../utils/theme";

interface MapProps {
    width: number;
    height: number;
    coordinates: { lat: number; lan: number };
}

const Map: React.FC<MapProps> = ({ coordinates, width, height }) => {
    const theme = useTheme<Theme>();
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 1000);
    }, []);
    return (
        <Box
            borderBottomLeftRadius="l"
            borderBottomRightRadius="l"
            overflow="hidden"
        >
            {display ? (
                <MapView
                    mapPadding={{ bottom: 50, top: 0, left: 0, right: 0 }}
                    style={{ width, height }}
                    initialRegion={{
                        latitude: coordinates.lat,
                        longitude: coordinates.lan,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: coordinates.lat,
                            longitude: coordinates.lan,
                        }}
                    />
                </MapView>
            ) : (
                <Box bg="gray2" width={width} height={height} justifyContent='center' alignItems='center'>
                    <ActivityIndicator
                        size="small"
                        color={theme.colors.primary1}
                    />
                </Box>
            )}
        </Box>
    );
};

export default React.memo(Map);
