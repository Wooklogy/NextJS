import { translatePxValue } from "@/utils/globals.util";
import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { randomUUID } from "crypto";
import { useRecoilValue } from "recoil";
import { resizeState } from "@/states/config.state";
import AppStyle from "@/styles/app.styles";
const DEFAULT_GAP = 6;
const DEFAULT_VIEW_COUNT = 4;
const DEFAULT_RATIO_X = 16;
const DEFAULT_RATIO_Y = 9;

export interface CustomCarouselProps
    extends Pick<React.HTMLAttributes<HTMLDivElement>, "onClick" | "style"> {
    arrow?: boolean;
    arrow_size?: number | string;
    arrow_color?: string;
    width?: number;
    height?: number;
    row_count?: number;
    autoplay?: boolean;
    autoplay_time?: number;
    // rem
    gap?: number;
    ratioX?: number;
    ratioY?: number;
    wrap?: boolean;
    elements?: React.ReactNode[] | React.ReactElement[];
    spare?: number;
    overflow?: "hidden" | "visible";
}

const CustomCarousel: React.FC<PropsWithChildren<CustomCarouselProps>> = (
    props
) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const ulRef = React.useRef<HTMLUListElement>(null);
    const resize = useRecoilValue(resizeState);
    const [containerUl, setContainerUl] = React.useState<number>(0);
    const [currentX, setCurrentX] = React.useState<number>(1);
    const [sizePerRatio, setSizePerRatio] = React.useState<{
        width: number;
        height: number;
    }>();
    const [sizePerWidth, setSizePerWidth] = React.useState<number>(0);

    //todo autoplay
    // React.useEffect(() => {}, [props.autoplay, props.autoplay_time]);

    React.useEffect(() => {
        const spare = props?.spare || 0;
        const container_width = Math.floor(divRef.current?.clientWidth || 0);
        const container_ul = Math.floor(ulRef.current?.clientWidth || 0);

        const gaps = props?.gap
            ? props.gap * (props.row_count || DEFAULT_VIEW_COUNT) - 1
            : DEFAULT_GAP * (props.row_count || DEFAULT_VIEW_COUNT) - 1;

        const realWidth = container_width - gaps - spare;

        const widthPerOne = realWidth / (props.row_count || DEFAULT_VIEW_COUNT);

        const heightPerOne =
            (widthPerOne / (props.ratioX || DEFAULT_RATIO_X)) *
            (props.ratioY || DEFAULT_RATIO_Y);

        setSizePerRatio({
            width: Math.floor(widthPerOne),
            height: Math.floor(heightPerOne),
        });
        const elementWidth =
            Math.floor(widthPerOne) + (props.gap || DEFAULT_GAP);
        if (props.overflow === "hidden") {
            setContainerUl(
                elementWidth *
                    ((props?.elements?.length && props.elements.length + 1) ||
                        0)
            );
        } else {
            setContainerUl(container_ul);
        }
        setSizePerWidth(elementWidth);
    }, [
        props.row_count,
        props.ratioX,
        props.ratioY,
        props.gap,
        props.wrap,
        props.spare,
        resize,
        divRef.current?.clientWidth,
        ulRef.current?.clientWidth,
        props.overflow,
        props.elements,
    ]);
    const handleRight = () => {
        if ((props.row_count || 0) >= (props.elements?.length || 0)) {
            return;
        }

        const minWidth = containerUl - sizePerWidth * (props.row_count || 0);
        if (-sizePerWidth * currentX > -minWidth) {
            setCurrentX(currentX + 1);
        }
    };
    const handleLeft = () => {
        const minWidth = 0;

        if (-sizePerWidth * currentX < minWidth) {
            setCurrentX(currentX - 1);
        }
    };
    return (
        <CustomCarouselStyle
            {...props}
            width={sizePerRatio?.width}
            height={sizePerRatio?.height}
            ref={divRef}
        >
            {props.children}
            {props.arrow && (
                <BiChevronLeft
                    className={"custom-carowsel-arrow"}
                    fontSize={translatePxValue(props.arrow_size || "1rem")}
                    onClick={handleLeft}
                    color={props.arrow_color || AppStyle.primary_color}
                />
            )}
            <div className="content-container">
                <ul
                    ref={ulRef}
                    style={{
                        transform: `translateX(${Math.min(
                            -sizePerWidth * (currentX - 1),
                            props.overflow === "hidden"
                                ? 0
                                : -sizePerWidth * (currentX - 1)
                        )}px)`,
                    }}
                >
                    {props?.elements?.map((item, idx) => {
                        const uuid = `${randomUUID}${idx}`;
                        return <ol key={uuid}>{item}</ol>;
                    })}
                </ul>
            </div>
            {props.arrow && (
                <BiChevronRight
                    className={"custom-carowsel-arrow"}
                    fontSize={translatePxValue(props.arrow_size || "1rem")}
                    onClick={handleRight}
                    color={props.arrow_color || AppStyle.primary_color}
                />
            )}
        </CustomCarouselStyle>
    );
};

export default CustomCarousel;

const CustomCarouselStyle = styled.div<CustomCarouselProps>`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .custom-carowsel-arrow {
        cursor: pointer;
        ${(props) =>
            props.overflow !== "hidden" &&
            css`
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
                &:first-of-type {
                    left: 0;
                }
                &:last-of-type {
                    right: 0;
                }
            `}
    }
    .content-container {
        list-style: none;
        height: ${(props) => props.height}px;
        overflow: ${(props) => props.overflow};
        flex: ${(props) =>
            props?.arrow && props.overflow == "hidden"
                ? `0 0 90%`
                : `0 0 100%`};
        ul {
            display: flex;
            padding: 0;
            transition: 250ms;
            transition-timing-function: spring(1 100 10 10);
            margin: 0;
            height: 100%;
            & > ol {
                ::marker {
                    display: none;
                }
                padding: 0;
                margin-right: ${(props) => props.gap || DEFAULT_GAP}px;
                width: ${(props) => props.width}px;
                min-width: ${(props) => props.width}px;
            }
        }

        ${(props) =>
            props.wrap &&
            css`
                overflow: initial;
                height: fit-content;
                ul {
                    flex-wrap: wrap;
                }
                ol {
                    min-height: ${props.height}px;
                    height: ${props.height}px;
                    margin-bottom: ${props.gap || DEFAULT_GAP}px;
                }
            `}
    }
    .ant-image {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        img {
            width: 100%;
        }
    }
`;
