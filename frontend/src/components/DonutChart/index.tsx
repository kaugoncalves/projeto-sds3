import axios from "axios";
import Chart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
};
function DonutChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    axios.get(BASE_URL + "/sales/amount-by-seller").then((response) => {
      const data = response.data as SaleSum[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => x.sum);

      setChartData({ labels: myLabels, series: mySeries });
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };
  return chartData.labels.length > 0 ? (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  ) : (
    <img
      style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      src="https://www.blogson.com.br/wp-content/uploads/2017/10/d9933c4e2c272f33b74ef18cdf11a7d5.gif"
      alt="loading..."
    />
  );
}

export default DonutChart;
