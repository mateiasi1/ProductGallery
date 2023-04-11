import React, { useContext } from "react";
import "./logoStyles.scss";

const Logo = () => {
    return (
        <>
            <img src={"/images/logo.png"} alt="logo" className="logoSize" />
        </>
    );
};

export default Logo;
