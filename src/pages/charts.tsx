import React from 'react'
import ColumnChart from '../components/Charts/ColumnCharts/ColumnCharts'
import styles from './charts.module.css'
import PieChart from '../components/Charts/PieCharts/PieCharts'
import Layout from '@theme/Layout'

const Charts = () => {
  return (
    <Layout>
      <div className={styles.charts_page}>
        <div className={styles.column_chart}>
          <ColumnChart />
          <div className={styles.caption}>Caption goes here</div>
        </div>
        <div className={styles.pie_chart}>
          <PieChart />
          <div className={styles.caption}>Caption goes here</div>
        </div>
        <div className={styles.column_chart}>
          <ColumnChart />
          <div className={styles.caption}>Caption goes here</div>
        </div>
      </div>
    </Layout>
  )
}

export default Charts
