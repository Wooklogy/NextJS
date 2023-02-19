import { clipBoard } from "@/tools/clipboard.app";
import AppStyle from "@/styles/app.styles";
import { IconBaseProps } from "react-icons";
import { RiFileCopyLine } from "react-icons/ri";
import styled from "styled-components";

export interface FuncIconCopyProps extends IconBaseProps {
    value?: string;
    active_color?: string;
}

const CustomCopySVG: React.FC<FuncIconCopyProps> = (props) => {
    const handleClick = () => {
        if (!props?.value) return;
        clipBoard(props?.value || "");
    };
    return (
        <CustomCopySVGStyle
            {...props}
            onClick={handleClick}
        ></CustomCopySVGStyle>
    );
};
export default CustomCopySVG;
const CustomCopySVGStyle = styled(RiFileCopyLine)<FuncIconCopyProps>`
    cursor: pointer;
    &:hover {
        color: ${(props) => props.active_color || AppStyle.primary_color};
    }
`;
