import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import Loader from "./Loader";

interface Props {
  simplified?: boolean;
}
function Cryptocurrencies({ simplified }: Props) {
  const count = simplified ? 12 : 100;
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
  // console.log(cryptosList?.data?.coins);
  const cryptosCoinsData = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // setCryptos(cryptosCoinsData);
    const filteredData = cryptosCoinsData?.filter((coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosCoinsData, searchTerm]);

    if (isFetching) return <Loader />;

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
                extra={<img className="crypto-image" src={currency.iconUrl} alt=""/>}
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
