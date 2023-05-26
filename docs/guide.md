# Cryptoverse Project Setup Guide:

```
npx create-react-app cryptoverse --template typescript
cd cryptoverse
code .
```

## To add TypeScript to an existing Create React App project, first install it:

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

## Organize src directory:

Delete unnecessary files from src directory: App.test.ts, reportWebVitals.ts, setupTests.ts, logo.svg

### In src/index.tsx:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


```

### In src/index.css:

```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

### In src/App.tsx:

```
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

    </div>
  );
}

export default App;

```

### In src/App.css:

```
.App {
  text-align: center;
}
```

## Cleaup public/index.html:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Cryptoverse</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

## Install Project Dependencies:

```
npm install antd @ant-design/icons react-router-dom react-redux @reduxjs/toolkit axios chart.js react-chartjs-2 html-react-parser millify moment
npm start
```

## Update src/index.tsx:

You need to enclose the App with BrowserRouter to be able to use Link components in your project or it will give errors.

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```

## Update src/App.css:

```
:root {
  --text-primary: #000;
  --bgPrimary: #fff;
  --bgSecondary: #f9f9f9;
  --pink: #0071bd;
  --light-blue: #e6f7ff;
  --border: #d9d9d9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a:hover {
  color: var(--pink) !important;
}

.app {
  display: flex;
  overflow: hidden;
}

.navbar {
  flex: 0.2;
  background-color: rgb(0, 21, 41);
}

.main {
  flex: 0.8;
  width: 100%;
  margin-left: 262px;
}
.routes {
  padding: 20px;
}
.nav-container {
  position: fixed;
  left: 0;
  margin: 10px;
  height: 100vh;
  margin: 0px;
  background-color: rgb(0, 21, 41);
}

.logo-container {
  background-color: #001529;
  display: flex;
  padding: 20px;
  align-items: center;
  width: 100%;
}
.logo {
  margin: 0 0 0 15px;
}
.logo a {
  color: white;
}
.menu-control-container {
  display: none !important;
  position: absolute !important;
  right: 10px !important;
  top: 25px !important;
  font-size: 1.2rem !important;
  background-color: var(--bgSecondary) !important;
  border: none !important;
}

.loader {
  height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1300px) {
  .main {
    margin-left: 50px;
  }
}

@media screen and (max-width: 1170px) {
  .main {
    margin-left: 50px;
  }
}

@media screen and (max-width: 1000px) {
  .main {
    margin-left: 262px;
    /* margin-left: 100px; */
  }
}

@media screen and (max-width: 800px) {
  .app {
    flex-direction: column;
    overflow: hidden;
  }

  .navbar {
    flex: 1;
  }

  .main {
    flex: 1;
    margin-top: 90px;
    margin-left: 0px;
    margin-right: 10px;
  }

  .nav-container {
    height: 8vh;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: var(--bgSecondary);
  }

  .menu-control-container {
    display: block !important;
  }

  .ant-menu {
    position: absolute;
    right: 0px;
  }
  .home-title {
    font-size: 1.4rem !important;
  }
  .show-more {
    font-size: 1.3rem !important;
  }
}

.coin-detail-container {
  margin: 30px;
}

.coin-heading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid var(--border);
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
}

.coin-heading-container .coin-name {
  font-weight: 900;
  color: var(--pink);
}

.coin-heading-container p {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 20px;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.stats-container h2 {
  font-weight: 700;
  font-size: 1.4rem;
  margin-top: 20px;
  color: var(--pink);
}

.coin-details-heading {
  font-weight: 700 !important;
  margin-top: 20px !important;
  color: var(--pink) !important;
}

.coin-stats {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  font-size: 1rem;
  opacity: 0.9;
  padding: 20px;
}

.coin-stats-name {
  display: flex;
  gap: 10px;
  font-size: 1rem;
}

.stats {
  font-weight: 800;
}

.coin-value-statistics-heading p {
  font-size: 1rem;
  opacity: 0.9;
}

.coin-desc-link {
  display: flex;
  gap: 40px;
  margin-top: 40px;
  padding-top: 20px;
}

.coin-desc-link h2 {
  font-weight: 700;
  color: var(--pink);
}

.coin-desc-link p {
  font-size: 1rem;
  opacity: 0.9;
}

.coin-desc-link a {
  color: var(--pink);
}

.coin-desc-link h3 {
  font-weight: 700;
}

.coin-desc {
  flex: 0.5;
}

.coin-links {
  padding: 0px 20px;
  flex: 0.5;
}

.coin-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding: 20px;
}

.link-name {
  text-transform: capitalize;
  font-size: 1rem;
}

.coin-link a {
  color: var(--pink);
  font-weight: 700;
  font-size: 1rem;
}

.coin-link:hover,
.coin-stats:hover {
  background-color: var(--bgSecondary);
}

@media screen and (max-width: 1000px) {
  .stats-container {
    flex-direction: column;
  }
  .coin-desc-link {
    flex-direction: column;
  }
  .stats-container h2 {
    margin-top: 0px;
  }
}

@media screen and (max-width: 500px) {
  .coin-links {
    padding: 0px;
  }
  .coin-detail-container {
    margin: 0;
  }
}
@media screen and (max-width: 500px) {
  .heading {
    margin-top: 20px;
  }
}

.select-news {
  width: 180px;
}
.news-card {
  min-height: 300px !important;
}
.news-image-container {
  display: flex !important;
  justify-content: space-between !important;
}
.news-title {
  width: 70%;
}

.news-image-container .img {
  width: 100px;
  height: 100px;
}
.news-card p {
  color: black;
  margin: 10px 0px !important;
}
.provider-container {
  display: flex;
  justify-content: space-between;
}
.provider-name {
  margin-left: 10px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  color: #0071bd;
}
.chart-title {
  color: #0071bd !important;
}
.price-container {
  display: flex !important;
  gap: 20px !important;
  align-items: center !important;
  flex-wrap: wrap !important;
}
.price-change {
  font-weight: 900 !important;
}
.current-price {
  margin-top: 0px !important;
  font-weight: 900 !important;
}
.home-heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}
.show-more {
  margin-top: 0px !important;
}
.exchange-image {
  margin: 0px 10px !important;
}
.search-crypto {
  margin: 20px auto 30px auto;
  width: 250px;
}
.crypto-card-container {
  min-height: 65vh !important;
}
.crypto-card {
  min-width: 250px;
}
.crypto-card .crypto-image {
  width: 35px;
}
.select-timeperiod {
  width: 200px !important;
  margin-top: 20px !important;
}

.footer {
  background-color: #001529;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
}
```

## Create src/components:

### Create src/components/Navbar.tsx:

Refere (this)[https://ant.design/components/menu#components-menu-demo-horizontal]

```
import React, { useState } from "react";
import { Avatar, Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import icon from "../assets/cryptoverse.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

function Navbar() {
  const items: MenuProps["items"] = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
      key: "home",
    },
    {
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
      icon: <FundOutlined />,
      key: "cryptocurrencies",
    },
    {
      label: <Link to="/exchanges">Exchanges</Link>,
      icon: <MoneyCollectOutlined />,
      key: "exchanges",
    },
    {
      label: <Link to="/news">News</Link>,
      icon: <BulbOutlined />,
      key: "news",
    },
  ];

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };


  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        theme="dark"
        items={items}
      />
    </div>
  );
}

export default Navbar;

```

### Create src/components/Home.tsx:

```
import React from "react";

function Home() {
  return <div>Home</div>;
}

export default Home;

```

### Create src/components/Exchanges.tsx:

```
import React from "react";


function Exchanges() {
  return <div>Exchanges</div>;
}

export default Exchanges;

```

### Create src/components/Cryptocurrencies.tsx:

```
import React from "react";

function Cryptocurrencies() {
  return <div>Cryptocurrencies</div>;
}

export default Cryptocurrencies;

```

### Create src/components/CryptoDetails.tsx:

```
import React from "react";

function CryptoDetails() {
  return <div>CryptoDetails</div>;
}

export default CryptoDetails;
```

### Create src/components/News.tsx:

```
import React from "react";
function News() {
  return <div>News</div>;
}

export default News;

```

### Create src/components/Footer.tsx:

```
import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Cryptoverse. All Rights Reserved.{" "}
      </Typography.Title>
      <Space>
        <Link to={"/"}>Home</Link>
        <Link to={"/exchanges"}>Exchanges</Link>
        <Link to={"/news"}>News</Link>
      </Space>
    </>
  );
}

export default Footer;

```

## Create src/components/index.tsx:

```
export { default as Navbar } from "./Navbar";
export { default as Home } from "./Home";
export { default as Exchanges } from "./Exchanges";
export { default as Cryptocurrencies } from "./Cryptocurrencies";
export { default as CryptoDetails } from "./CryptoDetails";
export { default as News } from "./News";
export { default as Footer } from "./Footer";

```

## Update src/App.tsx:

```
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

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
```

## Update src/components/Home.tsx:

```
import React from "react";
import { Col, Row, Statistic, Typography } from "antd";

const { Title } = Typography;

function Home() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="5"/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5"/></Col>
        <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
      </Row>
    </>
  );
}

export default Home;

```

## Setup Redux Toolkit and API Dev:

Refer (Redux Toolkit)[https://redux-toolkit.js.org/introduction/getting-started] and (RTK Query)[https://redux-toolkit.js.org/rtk-query/overview]

### Go to (Rapi API)[www.rapidapi.com]:

Subscribe to RapidAPI to use get access to different APIs.

We will be using the Coinranking API to fetch the data.
Search for (Coinranking)[https://rapidapi.com/Coinranking/api/coinranking1]

Go to Endpoints tab > Test Endpoint > Code Snippets > Copy the code for options.

### Create .env in the root directory:

Paste the keys from the options code here.

```
X_RAPIDAPI_KEY=
X_RAPIDAPI_HOST=
```

### Setting up your Redux Store and API service:

Refer (this)[https://redux-toolkit.js.org/tutorials/rtk-query/#setting-up-your-store-and-api-service]

#### Create a (Redux Store)[https://redux-toolkit.js.org/tutorials/quick-start]:

Create app/store.ts:

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```

#### Provide the Redux Store to React:

Update src/index.ts:

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
```

#### Create src/services/coinRankingApi.ts:

We need to create an api service to fetch data from the Rapid API server:

```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const coinRankingApi = createApi({
  reducerPath: "coinRankingApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => "/coins",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery } = coinRankingApi;

```

#### Add the service to your store:

Refer (this)[https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store]

In src/app/store.ts:

```
import { configureStore } from "@reduxjs/toolkit";
import { coinRankingApi } from "../services/coinRankingApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [coinRankingApi.reducerPath]: coinRankingApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinRankingApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

```

## Use the RTK Query in a component:

Once a service has been defined, you can import the hooks to make a request.

### To remove the error message: 'Cryptocurrencies' cannot be used as a JSX component.:

Add this line about the code giving the error message:

```
{/* @ts-expect-error Server Component */}
```

### In src/components/Home.tsx:

```
import React from "react";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

function Home() {
    const params = {
      // from rapid API options in the code snippets for GET Coins endpoint
       referenceCurrencyUuid: "yhjMzLPhuIDl", //  US Dollar
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      // limit: "50",
       limit: "10",
       offset: "0",
     };
     // Using a query hook automatically fetches the data and returns query values
    const { data, isFetching } = useGetCryptosQuery(params);
    console.log(data);

  const globalStats = data?.data?.stats;
  //   console.log(globalStats);

  const totalCryptocurrencies = millify(globalStats?.total);
  const totalExchanges = millify(globalStats?.totalExchanges);
  const totalMarketCap = millify(globalStats?.totalMarketCap);
  const total24hVolume = millify(globalStats?.total24hVolume);
  const totalMarkets = millify(globalStats?.totalMarkets);
  const totalCoins = millify(globalStats?.totalCoins);

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={totalCryptocurrencies}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={total24hVolume} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Coins" value={totalCoins} />
        </Col>
      </Row>

      {/* Cryptocurrencies */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      {/* @ts-expect-error Server Component */}
      <Cryptocurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News />
    </>
  );
}

export default Home;
```

### In src/components/Cyrptocurrencies.tsx:

```
import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";

function Cryptocurrencies() {
  const params = {
    // from rapid API options in the code snippets for GET Coins endpoint
     referenceCurrencyUuid: "yhjMzLPhuIDl", // US Dollar
     timePeriod: "24h",
     "tiers[0]": "1",
     orderBy: "marketCap",
     orderDirection: "desc",
     limit: "100",
     offset: "0",
   };
   const { data: cryptosList, isFetching } = useGetCryptosQuery(params);

  console.log(cryptosList?.data?.coins);
  const cryptosCoinsData = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState(cryptosCoinsData);


  if (isFetching) return "Loading...";

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
```

You should be able to see the data being fetched from the coinRanking API.

### Update src/services/coinRankingApi.ts with a count:

```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const coinRankingApi = createApi({
  reducerPath: "coinRankingApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery } = coinRankingApi;

```

### Add a count variable to the src/components/Crtpyocurrencies.tsx:

Add count variable and set it as the param to the query function.

```
import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";

interface Props {
  simplified?: boolean;
}
function Cryptocurrencies({ simplified }: Props) {
  const count = simplified ? 10 : 100;
  // const params = {
  //   // from rapid API options in the code snippets for GET Coins endpoint
  //   referenceCurrencyUuid: "yhjMzLPhuIDl", // US Dollar
  //   timePeriod: "24h",
  //   "tiers[0]": "1",
  //   orderBy: "marketCap",
  //   orderDirection: "desc",
  //   limit: "100",
  //   offset: "0",
  // };
  // const { data: cryptosList, isFetching } = useGetCryptosQuery(params);

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  console.log(cryptosList?.data?.coins);
  const cryptosCoinsData = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState(cryptosCoinsData);


  if (isFetching) return "Loading...";

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;

```

### Update src/components/Home.tsx:

Set the count in useGetCryptosQuery to 10.

```
import React from "react";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

function Home() {
//   const params = {
//     // from rapid API options in the code snippets for GET Coins endpoint
//     referenceCurrencyUuid: "yhjMzLPhuIDl", //  US Dollar
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   };
//   // Using a query hook automatically fetches the data and returns query values
//   const { data, isFetching } = useGetCryptosQuery(params);
//   console.log(data);

   const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
//   console.log(globalStats);

  const totalCryptocurrencies = millify(globalStats?.total);
  const totalExchanges = millify(globalStats?.totalExchanges);
  const totalMarketCap = millify(globalStats?.totalMarketCap);
  const total24hVolume = millify(globalStats?.total24hVolume);
  const totalMarkets = millify(globalStats?.totalMarkets);
  const totalCoins = millify(globalStats?.totalCoins);
  //   if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={totalCryptocurrencies}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={total24hVolume} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Coins" value={totalCoins} />
        </Col>
      </Row>

      {/* Cryptocurrencies */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      {/* <News simplified /> */}
    </>
  );
}

export default Home;
```

## Add an input to Cryptocurrencies for search:

In src/components/Crypotcurrencies.tsx:

```
import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";

interface Props {
  simplified?: boolean;
}
function Cryptocurrencies({ simplified }: Props) {
  const count = simplified ? 10 : 100;
  // const params = {
  //   // from rapid API options in the code snippets for GET Coins endpoint
  //   referenceCurrencyUuid: "yhjMzLPhuIDl", // US Dollar
  //   timePeriod: "24h",
  //   "tiers[0]": "1",
  //   orderBy: "marketCap",
  //   orderDirection: "desc",
  //   limit: "100",
  //   offset: "0",
  // };
  // const { data: cryptosList, isFetching } = useGetCryptosQuery(params);

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  console.log(cryptosList?.data?.coins);
  const cryptosCoinsData = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // setCryptos(cryptosCoinsData);
    const filteredData = cryptosCoinsData?.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency: any) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;

```

## Create News Page:

### Create a new endpoint to fetch news from Rapid API:

#### Create src/services/bingNewsApi.ts:

First go to Rapid API and search (Bing News Search)[https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1]

Click "Subscribe to Test" > Choose a free plan > Subscribe.
Click on Endpoints tab > Code Snippets and copy the url, params and headers in the options variable.

```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

export const bingNewsApi = createApi({
  reducerPath: "bingNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptoNewsQuery } = bingNewsApi;


```

### Add the reducer to the app/store.ts:
```
import { configureStore } from "@reduxjs/toolkit";
import { coinRankingApi } from "../services/coinRankingApi";
import { bingNewsApi } from "../services/cyptoNewsApi";

export const store = configureStore({
  reducer: {
    [coinRankingApi.reducerPath]: coinRankingApi.reducer,
    [bingNewsApi.reducerPath]: bingNewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinRankingApi.middleware)
      .concat(bingNewsApi.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

### Update src/components/News.tsx:
```
import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cyptoNewsApi";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import demoImage from "../assets/cryptonews.jpg";
const { Text, Title } = Typography;
const { Option } = Select;

interface Props {
  simplified?: boolean;
}
function News({ simplified }: Props) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);

  const { data: cryptosList } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            onChange={(value) => setNewsCategory(value)}
            optionFilterProp="children"
            filterOption={(input, option: any) =>
              option!.children!.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {cryptosList?.data?.coins.map((crypto: any) => (
              <Option value={crypto.name}>{crypto.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news: any, i: number) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="News"
                />
              </div>
              <p>
                {news?.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("seconds").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;

```

### Update src/components/Home.tsx:
```
import React from "react";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

function Home() {
  //   const params = {
  //     // from rapid API options in the code snippets for GET Coins endpoint
  //     referenceCurrencyUuid: "yhjMzLPhuIDl", //  US Dollar
  //     timePeriod: "24h",
  //     "tiers[0]": "1",
  //     orderBy: "marketCap",
  //     orderDirection: "desc",
  //     limit: "50",
  //     offset: "0",
  //   };
  //   // Using a query hook automatically fetches the data and returns query values
  //   const { data, isFetching } = useGetCryptosQuery(params);
  //   console.log(data);

  const { data, isFetching } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;
  //   console.log(globalStats);

  const totalCryptocurrencies = millify(globalStats?.total);
  const totalExchanges = millify(globalStats?.totalExchanges);
  const totalMarketCap = millify(globalStats?.totalMarketCap);
  const total24hVolume = millify(globalStats?.total24hVolume);
  const totalMarkets = millify(globalStats?.totalMarkets);
  const totalCoins = millify(globalStats?.totalCoins);

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={totalCryptocurrencies}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={totalMarketCap} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={total24hVolume} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Coins" value={totalCoins} />
        </Col>
      </Row>

      {/* Cryptocurrencies */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      {/* @ts-expect-error Server Component */}
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>

      {/* @ts-expect-error Server Component */}
      <News simplified />
    </>
  );
}

export default Home;

```

### Update src/App.tsx:
```
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

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {/* @ts-expect-error Server Component */}
              <Route path="/" element={<Home />} />
              <Route path="/exchanges" element={<Exchanges />} />
              {/* @ts-expect-error Server Component */}
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              {/* @ts-expect-error Server Component */}
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
```

## Create CryptoDetails Page:

### Create a new endpoint in src/services/coinRankingApi.ts called getCryptoDetails:
```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const coinRankingApi = createApi({
  reducerPath: "coinRankingApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = coinRankingApi;

```

### In src/components/CryptoDetails.tsx:
```
import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  ThunderboltOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../services/coinRankingApi";

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails() {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  // console.log(cryptoDetails);

  // if (isFetching) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.supply?.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </Title>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Statistics
            </Title>
            <p>An overview showing the statistics of allcryptocurrencies</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails?.name}?
          </Title>
          {HTMLReactParser(cryptoDetails?.description)}
          {/* description is a raw html so we need to parse it */}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails?.name} Links
          </Title>
          {cryptoDetails?.links?.map((link: any) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
}

export default CryptoDetails;

```

### Create a new endpoint in src/services/coinRankingApi.ts:
```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const coinRankingApi = createApi({
  reducerPath: "coinRankingApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({coinId,timePeriod}) => `/coin/${coinId}/history?timeperiod=${timePeriod}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = coinRankingApi;

```

### Create Chart:
In src/components/LineChart.tsx:
```
import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

type Props = {
  coinHistory: any;
  currentPrice: any;
  coinName: any;
};

const { Title } = Typography;
export default function LineChart({
  coinHistory,
  currentPrice,
  coinName,
}: Props) {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  console.log(coinPrice);
  console.log(coinTimestamp);
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };



  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      {/* @ts-expect-error Server Component */}
      <Line data={data} options={options} />
    </>
  );
}

```

### Update src/components/CryptoDetails.tsx:
Add the LineChart component.
```
import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  ThunderboltOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/coinRankingApi";
import LineChart from "./LineChart";

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails() {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  // console.log(cryptoDetails);

  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
console.log(coinHistory);
  if (isFetching) return "Loading...";

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.supply?.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </Title>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      {/* Line Chart */}
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />
      {/* Statistics Container */}
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        {/* Other Statistics Container */}
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Statistics
            </Title>
            <p>An overview showing the statistics of all cryptocurrencies</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      {/* Description and Links */}
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails?.name}?
          </Title>
          {HTMLReactParser(cryptoDetails?.description)}
          {/* description is a raw html so we need to parse it */}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails?.name} Links
          </Title>
          {cryptoDetails?.links?.map((link: any) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
}

export default CryptoDetails;

```

## Update src/components/NavBar.tsx:
```
import React, { useEffect, useState } from "react";
import { Avatar, Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import icon from "../assets/cryptoverse.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<number>();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize! < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const items: MenuProps["items"] = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
      key: "home",
    },
    {
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
      icon: <FundOutlined />,
      key: "cryptocurrencies",
    },
    {
      label: <Link to="/exchanges">Exchanges</Link>,
      icon: <MoneyCollectOutlined />,
      key: "exchanges",
    },
    {
      label: <Link to="/news">News</Link>,
      icon: <BulbOutlined />,
      key: "news",
    },
  ];

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(true)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          theme="dark"
          items={items}
        />
      )}
    </div>
  );
}

export default Navbar;

```

## Create src/components/Loader.tsx:
```
import React from "react";
import { Spin } from "antd";

const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;

```

## Create src/services/coinGeckoApi.ts:
```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coingecko.p.rapidapi.com";

export const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coingecko.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => `/exchanges`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetExchangesQuery
} = coinGeckoApi;

```

## Add coinGeckoApi service to redux store app/store.ts:
```
import { configureStore } from "@reduxjs/toolkit";
import { coinRankingApi } from "../services/coinRankingApi";
import { coinGeckoApi } from "../services/coinGeckoApi";
import { bingNewsApi } from "../services/bingNewsApi";

export const store = configureStore({
  reducer: {
    [coinRankingApi.reducerPath]: coinRankingApi.reducer,
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
    [bingNewsApi.reducerPath]: bingNewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinRankingApi.middleware)
      .concat(coinGeckoApi.middleware)
      .concat(bingNewsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

```

## Create src/components/Exchanges.tsx:
```
import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";
import Loader from "./Loader";
import {
  useGetExchangesQuery,
} from "../services/coinGeckoApi";

export default function Exchanges() {
  const { data: exchangesList, isFetching } = useGetExchangesQuery({});
  console.log(exchangesList);
  const [exchanges, setExchanges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = exchangesList?.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setExchanges(filteredData);
  }, [exchangesList, searchTerm]);

    if (isFetching) return <Loader />;


const columns = [
  {
    title: "Rank",
    dataIndex: "trust_score_rank",
    key: "trust_score_rank",
  },
  {
    title: "",
    dataIndex: "image",
    key: "image",
    width: 50,
    maxWidth: 50,
    borderRadius: "50%",
    render: (image: string) => <img src={`${image}`} alt="logo" />,
  },
  {
    title: "Exchange Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Year Est.",
    dataIndex: "year_established",
    key: "year_established",
  },
  {
    title: "24h Trade Volume",
    dataIndex: "trade_volume_24h_btc",
    key: "trade_volume_24h_btc",
  },
  {
    title: "Trust Score",
    dataIndex: "trust_score",
    key: "trust_score",
  },
];

  return (
    <>
      { 
        <div className="search-crypto">
          <Input
            placeholder="Search Exchanges"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      }

      <Table dataSource={exchanges} columns={columns} />
    </>
  );
}

```

## Update src/App.tsx:
```
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

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
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
  );
}

export default App;

```