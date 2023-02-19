import { clipBoard } from "@/tools/clipboard.app";
import AppStyle from "@/styles/app.styles";
import { translatePxValue } from "@/utils/globals.util";
import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { CustomTextProps } from "./Text.comp.d";

const CustomText: React.FC<PropsWithChildren<CustomTextProps>> = (props) => {
    const className = ` flex align-center justify-start ${
        props.italic && "text-italic"
    } ${props.underline && "text-underline"} ${
        props.text_overflow && "text-overflow"
    }`;
    const handleClipboard = () => {
        clipBoard(props?.clipboard_value || "");
    };
    return (
        <CustomTextStyle
            {...props}
            className={props.class_name + className}
            onClick={(e) => {
                props.clipboard && handleClipboard();
                props.onClick && props.onClick(e);
            }}
        >
            {props.children}
        </CustomTextStyle>
    );
};

export default CustomText;

const CustomTextStyle = styled.span<CustomTextProps>`
    font-family: ${(props) => props.font_family};
    cursor: ${(props) => props?.cursor};
    width: ${(props) =>
        (props.width && translatePxValue(props.width)) || "100%"};
    height: ${(props) =>
        (props.height && translatePxValue(props.height)) || "auto"};
    font-size: ${(props) => {
        const { size } = props;
        const fontSize =
            size === "ti"
                ? AppStyle.text.size.ti
                : size === "lg"
                ? AppStyle.text.size.lg
                : size === "sm"
                ? AppStyle.text.size.sm
                : size === "xl"
                ? AppStyle.text.size.xl
                : size === "xxl"
                ? AppStyle.text.size.xxl
                : size === "xxxl"
                ? AppStyle.text.size.xxxl
                : typeof size === "number"
                ? size
                : typeof size === "string"
                ? size
                : AppStyle.text.size.de;
        return translatePxValue(fontSize);
    }};
    font-weight: ${(props) => props.weight};
    color: ${(props) =>
        props?.color || AppStyle?.text?.color?.default || AppStyle.color};
    color: ${(props) =>
        props.style_type === "primary" && AppStyle.primary_color};
    ${(props) =>
        props.hover &&
        css`
            :hover {
                color: ${props.active_color ||
                AppStyle.primary_color ||
                AppStyle.color};
            }
        `}
    ${(props) =>
        props.toggle &&
        css`
            color: ${props.active_color ||
            AppStyle.primary_color ||
            AppStyle.color};
        `};
`;
