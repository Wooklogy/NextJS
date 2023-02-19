import { GlobalStyleProps } from "./styles.d";

const AppStyle: GlobalStyleProps = {
    color: "#4E4E4E",
    primary_color: "#FFB45B",
    text: {
        color: {
            default: "#4E4E4E",
            invert: "#ffffff",
            secondarly: "#828282",
            error: "#F15555",
        },
        size: {
            ti: "0.75rem",
            de: "1rem",
            sm: "1.25rem",
            lg: "1.725rem",
            xl: "2rem",
            xxl: "2.25rem",
            xxxl: "2.75rem",
            abstract: "2.5rem",
            title: "3rem",
        },
    },
    checkbox: {},
    input: {
        placehoder_color: "rgba(255,255,255,0.75)",
        text_color: "#4E4E4E",
        input_bg: "#D9D9D9",
    },
};
export default AppStyle;
