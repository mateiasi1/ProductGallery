import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/layout";
import ProductsPage from "./pages/productsPage";
import HomePage from "./pages";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <Router>
            <ThemeContextProvider>
                <Layout>
                    <Routes>
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Layout>
            </ThemeContextProvider>
        </Router>
    );
}

export default App;
