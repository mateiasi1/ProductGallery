import React, { useState } from "react";
import "./productsListStyles.scss";

const Products = [
    {
        id: 1,
        feature: "KAMPAGNE",
        imageURL: "/images/bathroom.png",
        sellPrice: "36.495",
        price: "21.595",
        coinSymbol: "DKK",
        name: "JKE DESIGN STENSBALLE",
    },

    {
        id: 2,
        feature: "DEMO PRIS",
        imageURL: "/images/livingroom.png",
        sellPrice: "36.495",
        price: "41.995",
        coinSymbol: "DKK",
        name: "HB4 TAGLEJLIGHED",
    },
    {
        id: 3,
        feature: "NYHED",
        imageURL: "/images/kitchen.png",
        sellPrice: "116.495",
        price: "121.795",
        coinSymbol: "DKK",
        name: "MULTIFORM< METTES KOKKEN",
    },
    {
        id: 4,
        feature: "KAMPAGNE",
        imageURL: "/images/bathroom.png",
        sellPrice: "36.495",
        price: "21.595",
        coinSymbol: "DKK",
        name: "JKE DESIGN STENSBALLE",
    },

    {
        id: 5,
        feature: "DEMO PRIS",
        imageURL: "/images/livingroom.png",
        sellPrice: "36.495",
        price: "41.995",
        coinSymbol: "DKK",
        name: "HB4 TAGLEJLIGHED",
    },
    {
        id: 6,
        feature: "NYHED",
        imageURL: "/images/kitchen.png",
        sellPrice: "116.495",
        price: "121.795",
        coinSymbol: "DKK",
        name: "MULTIFORM< METTES KOKKEN",
    },
    {
        id: 7,
        feature: "NYHED",
        imageURL: "/images/kitchen.png",
        sellPrice: "116.495",
        price: "121.795",
        coinSymbol: "DKK",
        name: "MULTIFORM< METTES KOKKEN",
    },
    {
        id: 8,
        feature: "NYHED",
        imageURL: "/images/kitchen.png",
        sellPrice: "116.495",
        price: "121.795",
        coinSymbol: "DKK",
        name: "MULTIFORM< METTES KOKKEN",
    },
];
const ProductsList = () => {
    const imagePerRow = 6;
    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

    return (
        <div className="productPageContainer">
            <div className="productsContainer">
                {Products.slice(0, next).map((product) => (
                    <div
                        className="card productContainer"
                        style={{ width: "18rem" }}
                        key={product.id}
                    >
                        <img
                            className="card-img-top productImage"
                            src={product.imageURL}
                            alt="Card image cap"
                        />
                        <div className="productFeatureContainer">
                            <p className="productFeature">{product.feature}</p>
                        </div>
                        <div className="productButtonContainer">
                            <p className="btn btn-primary productButton">
                                {product.name} &gt;
                            </p>
                        </div>
                        <div className="card-body productCardBody">
                            <h5 className="card-title productCardPrice">
                                {product.price + product.coinSymbol}
                            </h5>
                            <p className="card-text productCardText">
                                <s>{product.sellPrice + product.coinSymbol}</s>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {next < Products?.length && (
                <button className="seeAllOffers" onClick={handleMoreImage}>
                    SE ALLE TILBUD
                </button>
            )}
        </div>
    );
};

export default ProductsList;
