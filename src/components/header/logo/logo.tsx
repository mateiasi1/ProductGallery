import React, { useContext } from "react";
import "./logoStyles.scss";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <>
            <img
                src={"/images/logo.png"}
                alt="logo"
                className="logoSize"
                onClick={() => navigate("/")}
            />
        </>
    );
};

export default Logo;
