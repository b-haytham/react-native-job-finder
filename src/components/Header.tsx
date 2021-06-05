import React, { ReactNode } from "react";
import { View, StyleSheet, ViewProps } from "react-native";

import Constants from "expo-constants";
import Text, { Fonts } from "./Text";
import { myTheme } from "../utils/theme";

interface HeaderProps extends ViewProps {
    height: number;
    width: number;
    left?: ReactNode;
    right?: ReactNode;
    title: string;
    subTitle?: string;
}

export const IconContainer: React.FC = ({ children }) => {
    return (
        <View
            style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 10,
                overflow: "hidden",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
            }}
        >
            {children}
        </View>
    );
};

const Header: React.FC<HeaderProps> = ({
    height,
    width,
    left,
    right,
    title,
    subTitle,
    ...rest
}) => {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: myTheme["color-primary-500"],
                    width,
                    height,
                },
            ]}
            {...rest}
        >
            <View style={styles.contentContainer}>
                {left ? 
                    left
                 : (
                    <View style={{ height: 32, width: 32 }} />
                )}
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{ color: "white" }}
                        font={Fonts.PoppinsBold}
                        category="h3"
                    >
                        {title}
                    </Text>
                    {subTitle && (
                        <Text style={{ color: "#fff" }} category="c2">
                            {subTitle}
                        </Text>
                    )}
                </View>
                {right ? right : (
                    <View style={{ height: 32, width: 32 }} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default Header;
