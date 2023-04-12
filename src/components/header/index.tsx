import React, { FC, useContext } from "react";
import DropDownMenu from "./dropdown/dropdownMenu";
import Logo from "./logo/logo";
import "./index.scss";
import ContactAndSocial from "./contactAndSocial/contactAndSocial";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
    const { themeValue } = useContext(ThemeContext);
    return (
        <nav className={`header ${themeValue && "isHeaderBlack"}`}>
            <div className="root">
                <div className="contactAndSocialContainer">
                    <ContactAndSocial />
                </div>
                <div className="dropdownAndLogoContianer">
                    <Logo />
                    <DropDownMenu />
                </div>
            </div>
        </nav>
    );
};

export default Header;
