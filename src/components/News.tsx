import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/bingNewsApi";
import { useGetCryptosQuery } from "../services/coinRankingApi";
import demoImage from "../assets/cryptonews.jpg";
import Loader from "./Loader";
const { Text, Title } = Typography;
const { Option } = Select;

interface Props {
  simplified?: boolean;
}
function News({ simplified }: Props) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 8 : 15,
  });
  console.log(cryptoNews);

  const { data: cryptosList } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <>
          <Title level={2} className="main-title">
            Latest crypto news around the word
          </Title>
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              onChange={(value) => setNewsCategory(value)}
              optionFilterProp="children"
              filterOption={(input, option: any) =>
                option!.children!.toLowerCase().indexOf(input.toLowerCase()) >=
                0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {cryptosList?.data?.coins.map((crypto: any) => (
                <Option value={crypto.name}>{crypto.name}</Option>
              ))}
            </Select>
          </Col>
        </>
      )}
      {cryptoNews.value.map((news: any, i: number) => (
        <Col xs={24} sm={12} lg={12} xl={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>
                  {news.name}
                </Title>
              </div>
              <img
                style={{ maxWidth: "250px", maxHeight: "100px" }}
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt="News"
              />
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
