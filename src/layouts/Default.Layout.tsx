import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    return <>{children}</>;
};
