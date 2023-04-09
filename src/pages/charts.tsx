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
            <div className={styles.text_before_charts}>
            <h1>
                How was testing done? 
              </h1>
            </div>
            <div className={styles.totality}>
            <div className={styles.text_before_charts}>
              <ul>
                <li>
                  <strong>Unit Testing</strong>
                  <ul>
                    <li>
                      Unit testing is done mainly on the public APIs of every module. The developers in charge of each component will identify these APIs as they progress with their implementation and break the components into smaller modules.
                    </li>
                    <li>
                      The person who implemented a module will be responsible to write test cases to verify that the implementation works as intended. Extensive test cases derived from module specifications should be written to cover as many edge cases as possible. The module being tested should also be well documented so that the code reviewer knows what to expect and potentially identify test cases that have been missed out.
                    </li>
                  </ul>
                </li>
                <br></br>
                  <li>
                  <strong>Integration Testing</strong>
                  <ul>
                  <li>
                    Integration testing is done to verify the interaction between SP and PKB, and between QPS and PKB. Integration testing will start when a minimally workable version of the required components is done.
                  </li>
                  <li>
                    As more features are being rollout and tested with unit testing, more test cases will be added to the existing compilation of integration test cases to verify the new feature able to interact with other components and work as intended. This also serves to verify that the introduction of it does not break any of our existing code.
                  </li>
                  </ul>
                </li>
                <br></br>
                <li><strong>Autotester/System Testing</strong>
                <ul>
                <li>We used pairwise testing by figuring out the discrete combinations of Query calls based on the arguments for single clauses.</li>
                <li>For multiclause arguments, we tested varying levels of dependencies and shared synonyms between the clauses.</li>
                <li>We tested multiclause arguments for all such that clauses with a pattern clause. For invalid queries, we created test cases for both syntax error and semantic error cases.</li>
                </ul>
                </li>
              </ul>
            </div>
            <div className={styles.charts_page}>
              <div className={styles.pie_chart}>
                <PieChart />
                {/* <div className={styles.caption}>Unit Test Breakdown</div> */}
              </div>
              <br></br>
              <div className={styles.column_chart}>
                <ColumnChart />
                {/* <div className={styles.caption}>Test Cases Over Milestones</div> */}
              </div>
              {/* <div className={styles.column_chart}>
                <ColumnChart />
                <div className={styles.caption}>Caption goes here</div>
              </div> */}
            </div>
            </div>
          </Layout>
        )
      }}
    </BrowserOnly>
  )
}

export default Charts
