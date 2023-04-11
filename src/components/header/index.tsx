import React, { FC } from "react";
import DropDownMenu from "./dropdown/dropdownMenu";
import Logo from "./logo/logo";
import "./index.scss";
import ContactAndSocial from "./contactAndSocial/contactAndSocial";

const Header = () => {
    return (
        <nav className="header">
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
