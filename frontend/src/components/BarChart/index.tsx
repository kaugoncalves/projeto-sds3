import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSucess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type SerieData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SerieData[];
};

function Barchart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(BASE_URL + "/sales/success-by-seller").then((response) => {
      const data = response.data as SaleSucess[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => round((100 * x.deals) / x.visited, 1));

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "% Sucess",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return chartData.labels.categories.length > 0 ? (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
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

export default Barchart;
