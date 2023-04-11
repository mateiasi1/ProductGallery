import React from "react";
import "./homeStyles.scss";
const Home = () => {
    const images = [
        "/images/homeBackground.png",
        "/images/homeBackground.png",
        "/images/homeBackground.png",
    ];
    return (
        <div className="bgImageContainer">
            <div style={{ position: "relative" }}>
                <div
                    id="carouselExampleControls"
                    className="carousel slide image"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {images.map((image) => (
                            <div
                                className="carousel-item active"
                                data-bs-interval="10000"
                            >
                                <img
                                    src={image}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon carouselButtons"
                            aria-hidden="true"
                            style={{ fontSize: "10px !important" }}
                        ></span>
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon carouselButtons"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="textAndButton">
                    <img src={"/images/detaljer.png"} alt="logo" />
                    <div className="buttonsContainer">
                        <button className="buttonDetails buttonStyle">
                            SE CASES
                        </button>
                        <button className="buttonStyle aboutUsButton">
                            OM OS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
