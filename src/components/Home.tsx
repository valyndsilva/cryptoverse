import React from "react";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

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

    if (isFetching) return <Loader />;

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
          Top 12 Cryptocurrencies in the world
        </Title>
        <Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={4} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      {/* Latest News */}
      <News simplified />
    </>
  );
}

export default Home;
