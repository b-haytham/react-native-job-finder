import React from "react";
import {
    Text as UIText,
    TextProps as UITextProps,
} from "@ui-kitten/components";

export enum Fonts {
    PoppinsBold = "Poppins-Bold",
    PoppinsSemiBold = "Poppins-SemiBold",
    PoppinsMedium = "Poppins-Medium",
    PoppinsRegular = "Poppins-Regular",
    PoppinsThin = "Poppins-Thin",
    PoppinsItalic = "Poppins-Italic",
}

interface TextProps extends UITextProps {
    font?: Fonts;
    opacity?: number;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
}

const Text: React.FC<TextProps> = (props) => {
    return (
        <UIText
            style={{
                fontFamily: props.font ? props.font : Fonts.PoppinsRegular,
                fontWeight: props.fontWeight, 
                opacity: props.opacity,
            }}
            {...props}
        />
    );
};

export default Text;
