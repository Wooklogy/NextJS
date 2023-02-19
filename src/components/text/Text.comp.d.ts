import React from "react";

export interface CustomTextProps
    extends Pick<React.HTMLAttributes<HTMLSpanElement>, "onClick"> {
    font_family?: string;
    class_name?: string;
    line_height?: number | string;
    italic?: boolean;
    underline?: boolean;
    clipboard?: boolean;
    clipboard_value?: string;
    cursor?:
        | "auto"
        | "default"
        | "none"
        | "context-menu"
        | "help"
        | "pointer"
        | "progress"
        | "wait"
        | "cell"
        | "crosshair"
        | "text"
        | "vertical-text"
        | "alias"
        | "copy"
        | "move"
        | "no-drop"
        | "not-allowed"
        | "e-resize"
        | "n-resize"
        | "ne-resize"
        | "nw-resize"
        | "s-resize"
        | "se-resize"
        | "sw-resize"
        | "w-resize"
        | "ew-resize"
        | "ns-resize"
        | "nesw-resize"
        | "nwse-resize"
        | "col-resize"
        | "row-resize"
        | "all-scroll"
        | "zoom-in"
        | "zoom-out"
        | "grab"
        | "grabbing";
    color?: string;
    active_color?: string;
    text_overflow?: boolean;
    width?: string | number;
    height?: string | number;
    hover?: boolean;
    toggle?: boolean;
    vertical?: "start" | "center" | "end";
    style_type?: "gradiant" | "primary" | "error" | "warn" | "info" | "success";
    weight?:
        | 100
        | 200
        | 300
        | 400
        | 500
        | 600
        | 700
        | 800
        | 900
        | "lighter"
        | "normal"
        | "bold"
        | "bolder";

    size?:
        | "ti"
        | "sm"
        | "lg"
        | "xl"
        | "xxl"
        | "xxxl"
        | "title"
        | "abstract"
        | string
        | number;
}
