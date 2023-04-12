import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import ContactPhone from "../../shared/contactPhone/contactPhone";
import SocialIcons from "../../shared/contactPhone/socialIcons";
import "./contactAndSocialStyles.scss";

const ContactAndSocial = () => {
    const { themeValue } = useContext(ThemeContext);
    return (
        <div className="rootContact">
            <div
                className="vr"
                style={{ color: themeValue ? "#fff" : "#000" }}
            ></div>
            <div className="contactContainer">
                <ContactPhone />
            </div>
            <div
                className="vr"
                style={{ color: themeValue ? "#fff" : "#000" }}
            ></div>
            <div className="contactContainer">
                <SocialIcons />
            </div>
        </div>
    );
};

export default ContactAndSocial;
