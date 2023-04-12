import React, { useContext } from "react";
import "./homeStyles.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
const Home = () => {
    const images = [
        { id: 1, url: "/images/homeBackground.png" },
        { id: 2, url: "/images/homeBackground.png" },
        { id: 3, url: "/images/homeBackground.png" },
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
                                key={image.id}
                                className="carousel-item active"
                                data-bs-interval="10000"
                            >
                                <img
                                    src={image.url}
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
                    <p className="caruselHOmeThin">GENNEMTÆNKTE</p>
                    <p className="carouselHomeBold">DETALJER</p>
                    <div className="buttonsContainer">
                        <button className="buttonDetailsProducts buttonStyleProducts">
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
