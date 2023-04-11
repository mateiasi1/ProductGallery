import React from "react";

const Products = [
    {
        feature: "KAMPAGNE",
        imageURL: "",
        sellPrice: "36.495",
        price: "21.595",
        coinSymbol: "DKK",
        name: "JKE DESIGN STENSBALLE",
    },

    {
        feature: "DEMO PRIS",
        imageURL: "",
        sellPrice: "36.495",
        price: "41.995",
        coinSymbol: "DKK",
        name: "HB4 TAGLEJLIGHED",
    },
    {
        feature: "NYHED",
        imageURL: "",
        sellPrice: "116.495",
        price: "121.795",
        coinSymbol: "DKK",
        name: "MULTIFORM< METTES KOKKEN",
    },
];
const ProductsList = () => {
    return (
        <>
            {Products.map((product) => (
                <div className="container">
                    <div className="row">
                        <div
                            className="col"
                            style={{ color: "#000", zIndex: 1 }}
                        >
                            {product.name}
                        </div>
                        <div className="col">{product.price}</div>
                        <div className="col">{product.sellPrice}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductsList;
