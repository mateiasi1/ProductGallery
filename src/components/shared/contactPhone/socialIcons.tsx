import {
    faFacebookF,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const SocialIcons = () => {
    const { themeValue } = useContext(ThemeContext);
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ padding: "0px 10px 0px 10px", margin: 0 }}>
                <a
                    href="tel:97 32 01 08"
                    style={{
                        textDecoration: "none",
                        color: themeValue ? "#fff" : "#000",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{
                            color: themeValue ? "#fff" : "#000",
                            marginRight: "10px",
                        }}
                    />
                </a>
            </p>
            <p style={{ padding: "0px 10px 0px 10px", margin: 0 }}>
                <a
                    href="tel:97 32 01 08"
                    style={{
                        textDecoration: "none",
                        color: themeValue ? "#fff" : "#000",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        style={{
                            color: themeValue ? "#fff" : "#000",
                            marginRight: "10px",
                        }}
                    />
                </a>
            </p>
            <p style={{ padding: "0px 10px 0px 10px", margin: 0 }}>
                <a
                    href="tel:97 32 01 08"
                    style={{
                        textDecoration: "none",
                        color: themeValue ? "#fff" : "#000",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                            color: themeValue ? "#fff" : "#000",
                            marginRight: "10px",
                        }}
                    />
                </a>
            </p>
        </div>
    );
};
export default SocialIcons;
