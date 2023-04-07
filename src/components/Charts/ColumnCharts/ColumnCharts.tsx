import { COLUMN_OPTION } from '@site/src/data/chart_config'
import { COLUMN_SERIES_DATA } from '@site/src/data/test'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useColorMode } from '@docusaurus/theme-common'
import { ApexOptions } from 'apexcharts'

const ColumnChart = (props) => {
  const { colorMode, setColorMode } = useColorMode()
  console.log(colorMode)
  return (
    <div id="column_chart">
      <ReactApexChart
        options={{
          ...COLUMN_OPTION,
          theme: { mode: colorMode },
          chart: {
            ...COLUMN_OPTION.chart,
            background: `${colorMode === 'dark' ? '#424242' : 'white'}`,
          },
        }}
        series={COLUMN_SERIES_DATA}
        type="bar"
      />
    </div>
  )
}

export default ColumnChart
