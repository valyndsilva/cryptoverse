import React from "react";
// import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
// import {
//   Chart,
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
// } from "chart.js";

// Chart.register(
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale
// );


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  Legend
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

  // console.log(coinHistory?.data?.history);

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  // console.log({ coinPrice });

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(coinHistory?.data?.history[i].timestamp);
  }

  // console.log({ coinTimestamp });

  const dates = coinTimestamp.map((timestamp) =>
    new Date(timestamp * 1000).toLocaleDateString()
  );
  // console.log(dates); // Array of Date objects

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = dates;

const data = {
  labels,
  datasets: [
    {
      label: "Price in USD",
      data: coinPrice,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }
  ],
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
      <Line options={options} data={data} />;
    </>
  );
}
