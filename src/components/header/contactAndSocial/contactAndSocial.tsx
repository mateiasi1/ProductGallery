import React, { FC, useContext } from "react";
import { FontAwesomeIcon, Props } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import "./contactAndSocialStyles.scss";
import ContactPhone from "../../shared/contactPhone/contactPhone.tsx";

const ContactAndSocial = () => {
    return (
        <div className="rootContact">
            <div className="vr" style={{ color: "#fff" }}></div>
            <div className="phoneContainer">
                <ContactPhone />
            </div>
            <div className="vr" style={{ color: "#fff" }}></div>
        </div>
    );
};

export default ContactAndSocial;
