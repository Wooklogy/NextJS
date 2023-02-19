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
