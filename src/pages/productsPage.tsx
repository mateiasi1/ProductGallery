import React, { useContext } from "react";
import Products from "../components/products/products";
import { ThemeContext } from "../contexts/ThemeContext";

const ProductsPage = () => {
    const { themeValue, setThemeValue } = useContext(ThemeContext);
    if (themeValue === true) {
        setThemeValue(false);
    }
    return <Products />;
};

export default ProductsPage;
