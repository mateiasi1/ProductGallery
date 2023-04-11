import React, { useContext } from "react";
import Home from "../components/home/home";
import { ThemeContext } from "../contexts/ThemeContext";

const HomePage = () => {
    const { themeValue, setThemeValue } = useContext(ThemeContext);
    debugger;
    if (themeValue === false) {
        setThemeValue(true);
    }
    return <Home />;
};

export default HomePage;
