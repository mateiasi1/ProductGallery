import React, { FC, ReactNode } from "react";
import Header from "../header/index";
import Footer from "../footer/index";
import "./layoutStyles.scss";
interface Props {
    children?: ReactNode;
    // any props that come into the component
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div className="layoutChildrenContainer">{children}</div>
            <Footer />
        </>
    );
};
export default Layout;
