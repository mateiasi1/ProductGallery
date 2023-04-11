import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products.tsx";
import HomePage from "./pages/index.tsx";
import Layout from "./components/layout/layout.tsx";
export default function App() {
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

function Users() {
    return <h2>Users</h2>;
}
