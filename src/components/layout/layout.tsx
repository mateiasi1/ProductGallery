import React, { FC } from "react";
import Header from "../header/index.tsx";
import Footer from "../footer/index.tsx";

type Props = {
    headerBlack?: boolean;
    children: any;
};
const Layout: FC<Props> = ({ children, headerBlack }) => {
    return (
        <>
            <Header />
            <div style={{ minHeight: "100vh" }}>{children}</div>
            <Footer />
        </>
    );
};
export default Layout;
