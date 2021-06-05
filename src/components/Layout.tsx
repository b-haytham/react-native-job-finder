import React, { ReactNode } from "react";
import {
    Icon,
    Layout as DefaultLayout,
    LayoutProps as DefaultLayoutProps,
} from "@ui-kitten/components";

import Constants from "expo-constants";
import Header from "./Header";
import { Dimensions, View } from "react-native";

interface LayoutProps extends DefaultLayoutProps {
    no_padding?: boolean;
    headerProps?: {
        title: string;
        subTitle: string;
        left?: ReactNode;
        right?: ReactNode;
    };
}

const { width, height } = Dimensions.get("screen");

const Layout: React.FC<LayoutProps> = ({
    headerProps,
    no_padding,
    children,
    ...rest
}) => {
    return (
        <DefaultLayout
            style={{
                flex: 1,
                paddingTop: no_padding ? 0 : Constants.statusBarHeight,
            }}
            {...rest}
        >
            {headerProps && (
                <Header
                    width={width}
                    height={height * 0.2}
                    title={headerProps.title}
                    subTitle={headerProps.subTitle}
                    left={headerProps.left}
                    right={headerProps.right}
                />
            )}
            <DefaultLayout
                level='1'
                style={{
                    position: "absolute",
                    top: height * 0.15,
                    width,
                    height: height * 0.9,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    overflow: "hidden",
                    zIndex: 10,
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
            </DefaultLayout>
        </DefaultLayout>
    );
};

export default Layout;
