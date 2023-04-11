import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./indexStyle.scss";
import ContactPhone from "../shared/contactPhone/contactPhone";

const Footer = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <div className="contentBox">
                    <img
                        src={"images/footerBackground.png"}
                        className="d-block w-100"
                        alt="..."
                        style={{ height: "300px" }}
                    />
                    <div className="contactBox">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "400px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <p
                                    style={{
                                        padding: "0px 5px 0px 5px",
                                        margin: 0,
                                    }}
                                >
                                    <a
                                        href="mailto:Info@vestjyskmarketing.dk"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="envelope"
                                        />
                                        Info@vestjyskmarketing.dk
                                    </a>
                                </p>
                                <div
                                    className="vr"
                                    style={{
                                        color: "#fff",
                                        margin: "0px 10px 0px 10px",
                                    }}
                                ></div>
                                <ContactPhone />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    padding: "10px 0px 10px 0px",
                                }}
                            >
                                <p
                                    style={{
                                        padding: "0px 5px 0px 5px",
                                        margin: 0,
                                    }}
                                >
                                    <a
                                        href="https://www.google.com/maps/place/Vestjysk+Marketing/@56.0920543,8.245618,17z/data=!3m1!4b1!4m5!3m4!1s0x464a5b3c623209d5:0x854320eab73f6b3e!8m2!3d56.0920513!4d8.2478067?shorturl=1"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className="envelope"
                                        />
                                        Info@vestjyskmarketing.dk
                                    </a>
                                </p>
                                <div
                                    className="vr"
                                    style={{
                                        color: "#fff",
                                        margin: "0px 10px 0px 10px",
                                    }}
                                ></div>
                                <p
                                    style={{
                                        padding: "0px 5px 0px 5px",
                                        margin: 0,
                                        color: "#fff",
                                    }}
                                >
                                    6950 Ringkøbing
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "400px",
                                display: "flex",
                                flexDirection: "column",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={"images/logoFooter.png"}
                                className="d-block"
                                alt="..."
                                style={{ width: "200px" }}
                            />
                        </div>
                        <div
                            style={{
                                width: "400px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }}
                        >
                            <img
                                src={"images/gaggenau-logo.png"}
                                className="d-block"
                                alt="..."
                                style={{
                                    width: "100px",
                                    height: "30px",
                                    margin: 0,
                                    marginRight: "20px",
                                }}
                            />
                            <img
                                src={"images/Gazelle.png"}
                                className="d-block"
                                alt="..."
                                style={{ width: "100px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="copyrightColor">
                    Copyright @2019 Frontend - Alle rettgheder forbeholdes
                </p>
                {/* <p className="copyrightColor">Vestjysk Marketing</p> */}
                <img
                    src={"images/logo-light.svg"}
                    className="d-block"
                    alt="..."
                    style={{ width: "100px" }}
                />
            </div>
        </div>
    );
};

export default Footer;
