import { resizeState } from "@/states/config.state";
import React, { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

const DefaultApp: React.FC<PropsWithChildren> = (props) => {
    const [, setResize] = useRecoilState(resizeState);
    const { i18n } = useTranslation();

    React.useEffect(() => {}, [i18n.language]);
    const handleResize = () => {
        setResize(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const { children } = props;

    return <>{children}</>;
};

export default DefaultApp;
