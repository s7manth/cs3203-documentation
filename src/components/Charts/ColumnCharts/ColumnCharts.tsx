import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useColorMode } from '@docusaurus/theme-common'

const ColumnChart = (props) => {
  const { colorMode, setColorMode } = useColorMode()
  console.log(colorMode)
  return (
    <div id="column_chart">
      <ReactApexChart
        options={{
          ...props.COLUMN_OPTION,
          theme: { mode: colorMode },
          chart: {
            ...props.COLUMN_OPTION.chart,
            background: `${colorMode === 'dark' ? '#424242' : 'white'}`,
          },
        }}
        series={props.COLUMN_SERIES_DATA}
        type="bar"
      />
    </div>
  )
}

export default ColumnChart
