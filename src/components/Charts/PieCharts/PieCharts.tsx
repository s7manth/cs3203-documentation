import { PIE_OPTION } from "@site/src/data/chart_config";
import { PIE_SERIES_DATA } from "@site/src/data/test";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useColorMode } from "@docusaurus/theme-common";

const PieChart = (props) => {
  const { colorMode, setColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <div id="pie_chart">
      <ReactApexChart
        options={{
          ...PIE_OPTION,
          theme: { mode: colorMode },
          chart: {
            background: `${colorMode === "dark" ? "#424242" : "white"}`,
          },
        }}
        series={PIE_SERIES_DATA}
        type="donut"
      />
    </div>
  );
};

export default PieChart;
