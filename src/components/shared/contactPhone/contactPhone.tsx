import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const ContactPhone = () => {
    return (
        <p style={{ padding: "0px 5px 0px 5px", margin: 0 }}>
            <a
                href="tel:97 32 01 08"
                style={{
                    textDecoration: "none",
                    color: "#fff",
                }}
            >
                <FontAwesomeIcon
                    icon={faPhoneVolume}
                    style={{
                        color: "#fff",
                        marginRight: "10px",
                    }}
                />{" "}
                97 32 01 08
            </a>
        </p>
    );
};

export default ContactPhone;
