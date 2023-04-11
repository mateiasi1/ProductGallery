import React from "react";
import "./productsListStyles.scss";

const Products = [
    {
        feature: "KAMPAGNE",
        imageURL: "/images/bathroom.png",
        sellPrice: "36.495",
        price: "21.595",
        coinSymbol: "DKK",
        name: "JKE DESIGN STENSBALLE",
    },

    {
        feature: "DEMO PRIS",
        imageURL: "/images/livingroom.png",
        sellPrice: "36.495",
        price: "41.995",
        coinSymbol: "DKK",
        name: "HB4 TAGLEJLIGHED",
    },
    {
        feature: "NYHED",
        imageURL: "/images/kitchen.png",
        sellPrice: "116.495",
        price: "121.795",
        coinSymbol: "DKK",
        name: "MULTIFORM< METTES KOKKEN",
    },
];
const ProductsList = () => {
    return (
        <div className="productsContainer">
            {Products.map((product) => (
                <div
                    className="card productContainer"
                    style={{ width: "18rem" }}
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
    );
};

export default ProductsList;
