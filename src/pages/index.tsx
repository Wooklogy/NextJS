import CustomCarousel from "@/components/carousel/Carousel.comp";
import CustomCopySVG from "@/components/svg/Clipboard.svg";
import CustomText from "@/components/text/Text.comp";
import AppStyle from "@/styles/app.styles";
import { Row } from "antd";

const MainHomePage: React.FC = () => {
    return (
        <Row>
            <CustomCarousel
                ratioX={16}
                ratioY={9}
                row_count={3}
                arrow={true}
                arrow_size={"5rem"}
                overflow={"hidden"}
                elements={[
                    <>
                        <CustomText
                            weight={"bold"}
                            size="lg"
                            style_type={"primary"}
                            active_color={"#ffffff"}
                        >
                            <CustomCopySVG
                                value="zsdadz"
                                active_color={AppStyle.primary_color}
                            ></CustomCopySVG>
                            zsdadz
                        </CustomText>
                    </>,
                    <>
                        <CustomText
                            weight={"bold"}
                            size="lg"
                            style_type={"primary"}
                            active_color={"#ffffff"}
                        >
                            <CustomCopySVG
                                value="zsdadz"
                                active_color={AppStyle.primary_color}
                            ></CustomCopySVG>
                            zsdadz
                        </CustomText>
                    </>,
                    <>
                        <CustomText
                            weight={"bold"}
                            size="lg"
                            style_type={"primary"}
                            active_color={"#ffffff"}
                        >
                            <CustomCopySVG
                                value="zsdadz"
                                active_color={AppStyle.primary_color}
                            ></CustomCopySVG>
                            zsdadz
                        </CustomText>
                    </>,
                    <>
                        <CustomText
                            weight={"bold"}
                            size="lg"
                            style_type={"primary"}
                            active_color={"#ffffff"}
                        >
                            <CustomCopySVG
                                value="zsdadz"
                                active_color={AppStyle.primary_color}
                            ></CustomCopySVG>
                            zsdadz
                        </CustomText>
                    </>,
                    <>
                        <CustomText
                            weight={"bold"}
                            size="lg"
                            cursor="pointer"
                            style_type={"primary"}
                            active_color={"#ffffff"}
                        >
                            <CustomCopySVG
                                value="zsdadz"
                                active_color={AppStyle.primary_color}
                            ></CustomCopySVG>
                            zsdadz
                        </CustomText>
                    </>,
                ]}
            ></CustomCarousel>
        </Row>
    );
};
export default MainHomePage;
