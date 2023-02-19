export interface GlobalStyleProps {
    color: string | "#ffffff";
    primary_color?: string;
    text: {
        color: {
            default?: string;
            invert?: string;
            secondarly?: string;
            error?: string;
            warn?: string;
            info?: string;
        };
        size: {
            ti?: string;
            de?: string;
            sm?: string;
            lg?: string;
            xl?: string;
            xxl?: string;
            xxxl?: string;
            abstract?: string;
            title?: string;
        };
    };
    input: {
        placehoder_color?: string;
        text_color?: string;
        input_bg?: string;
    };
    checkbox: {};
}

export const GlobalStyle: GlobalStyleProps = {
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

    input: {
        placehoder_color: "rgba(255,255,255,0.75)",
        text_color: "#4E4E4E",
        input_bg: "#D9D9D9",
    },
};
