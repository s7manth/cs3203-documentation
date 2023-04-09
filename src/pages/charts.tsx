import React from 'react'
import styles from './charts.module.css'
import BrowserOnly from '@docusaurus/BrowserOnly'

const Charts = () => {
  return (
    <BrowserOnly>
      {() => {
        const Layout = require('@theme/Layout').default
        const ColumnChart = require('../components/Charts/ColumnCharts/ColumnCharts').default
        const PieChart = require('../components/Charts/PieCharts/PieCharts').default
        return (
          <Layout title={`Charts for tests`} description="">
            <div className={styles.charts_page}>
              <div className={styles.column_chart}>
                <ColumnChart />
                <div className={styles.caption}>Test Cases Over Milestones</div>
              </div>
              <div className={styles.pie_chart}>
                <PieChart />
                <div className={styles.caption}>Unit Test Breakdown</div>
              </div>
              <div className={styles.column_chart}>
                <ColumnChart />
                <div className={styles.caption}>Caption goes here</div>
              </div>
            </div>
          </Layout>
        )
      }}
    </BrowserOnly>
  )
}

export default Charts
