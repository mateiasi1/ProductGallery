import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ContactPhone = () => {
    const { themeValue } = useContext(ThemeContext);
    return (
        <p style={{ padding: "0px 10px 0px 10px", margin: 0 }}>
            <a
                href="tel:97 32 01 08"
                style={{
                    textDecoration: "none",
                    color: themeValue ? "#fff" : "#000",
                }}
            >
                <FontAwesomeIcon
                    icon={faPhoneVolume}
                    style={{
                        color: themeValue ? "#fff" : "#000",
                        marginRight: "10px",
                    }}
                />
                97 32 01 08
            </a>
        </p>
    );
};

export default ContactPhone;
