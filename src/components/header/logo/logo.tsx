import React, { useContext } from "react";
import "./logoStyles.scss";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Logo = () => {
    const navigate = useNavigate();
    const { themeValue } = useContext(ThemeContext);

    return (
        <>
            <img
                src={`/images/${
                    themeValue === false ? "logoBlack" : "logo"
                }.png`}
                alt="logo"
                className="logoSize"
                onClick={() => navigate("/")}
            />
        </>
    );
};

export default Logo;
