import React, { FC, ReactNode } from "react";
import Header from "../header/index";
import Footer from "../footer/index";

interface Props {
    children?: ReactNode;
    // any props that come into the component
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div style={{ minHeight: "100vh" }}>{children}</div>
            <Footer />
        </>
    );
};
export default Layout;
