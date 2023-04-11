import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/layout";
import ProductsPage from "./pages/productsPage";
import HomePage from "./pages";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
