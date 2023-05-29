import React from "react";
import "./App.css";
import {
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Footer,
  Home,
  Navbar,
  News,
} from "./components";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Cryptoverse Dashboard</title>
      </Helmet>
      <div className="app">
        <Navbar />
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
