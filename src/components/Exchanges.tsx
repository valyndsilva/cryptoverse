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
