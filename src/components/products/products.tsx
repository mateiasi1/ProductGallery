import React, { useContext } from "react";

import ProductsList from "./productsList";
import "./productsStyles.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const Products = () => {
    const images = [
        "/images/productsPageBackground.png",
        "/images/productsPageBackground.png",
        "/images/productsPageBackground.png",
    ];
    const { themeValue } = useContext(ThemeContext);
    return (
        <>
            <div className="bgProductImageContainer">
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
                        <p
                            style={{
                                fontSize: "1.5rem",
                                color: "black",
                                margin: 0,
                                marginLeft: "4px",
                            }}
                        >
                            KIG FORBI OG LAD DIG
                        </p>
                        <p
                            style={{
                                fontSize: "4.2rem",
                                fontWeight: "bold",
                                color: "black",
                                marginTop: "-25px",
                                marginLeft: 0,
                            }}
                        >
                            INSPIRERE...
                        </p>
                        <div className="buttonsContainer">
                            <button className="buttonDetailsProducts buttonStyleProducts">
                                HER BOR VI
                            </button>
                            <button className="buttonStyleProducts aboutUsButtonProducts">
                                HER BOR VI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductsList />
        </>
    );
};

export default Products;
