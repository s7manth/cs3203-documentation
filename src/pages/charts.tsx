import React from "react";
import styles from "./charts.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

import { COLUMN_OPTION_TEST_STATS } from "@site/src/data/chart_config";
import { COLUMN_SERIES_DATA_TEST_STATS } from "@site/src/data/test";

import { COLUMN_OPTION_COVERAGE } from "@site/src/data/chart_config";
import { COLUMN_SERIES_DATA_COVERAGE } from "@site/src/data/test";

const Charts = () => {
  return (
    <BrowserOnly>
      {() => {
        const Layout = require("@theme/Layout").default;
        const ColumnChart =
          require("../components/Charts/ColumnCharts/ColumnCharts").default;
        const PieChart =
          require("../components/Charts/PieCharts/PieCharts").default;
        return (
          <Layout title={`Charts for tests`} description="">
            <div className={styles.text_before_charts}>
              <h1>How was testing done?</h1>
            </div>
            <div className={styles.totality}>
              <div className={styles.text_before_charts}>
                <ul>
                  <li>
                    <strong>Unit Testing</strong>
                    <ul>
                      <li>
                        Unit testing is done mainly on the public APIs of every
                        module. The developers in charge of each component will
                        identify these APIs as they progress with their
                        implementation and break the components into smaller
                        modules.
                      </li>
                      <li>
                        The person who implemented a module will be responsible
                        to write test cases to verify that the implementation
                        works as intended. Extensive test cases derived from
                        module specifications should be written to cover as many
                        edge cases as possible. The module being tested should
                        also be well documented so that the code reviewer knows
                        what to expect and potentially identify test cases that
                        have been missed out.
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <strong>Integration Testing</strong>
                    <ul>
                      <li>
                        Integration testing is done to verify the interaction
                        between SP and PKB, and between QPS and PKB. Integration
                        testing will start when a minimally workable version of
                        the required components is done.
                      </li>
                      <li>
                        As more features are being rollout and tested with unit
                        testing, more test cases will be added to the existing
                        compilation of integration test cases to verify the new
                        feature able to interact with other components and work
                        as intended. This also serves to verify that the
                        introduction of it does not break any of our existing
                        code.
                      </li>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <strong>Autotester/System Testing</strong>
                    <ul>
                      <li>
                        We used pairwise testing by figuring out the discrete
                        combinations of Query calls based on the arguments for
                        single clauses.
                      </li>
                      <li>
                        For multiclause arguments, we tested varying levels of
                        dependencies and shared synonyms between the clauses.
                      </li>
                      <li>
                        We tested multiclause arguments for all such that
                        clauses with a pattern clause. For invalid queries, we
                        created test cases for both syntax error and semantic
                        error cases.
                      </li>
                    </ul>
                  </li>
                </ul>
                <h3 id="the-plan">The Plan</h3>
                <p>We followed a phased approach for testing. </p>
                <ul>
                  <li>
                  <strong>Basic Testing</strong>
                    <ul>
                      <li>
                        In the first phase of testing, we ensured testing the
                        basic functionality of the system or application, to
                        ensure that it works as intended and meets the
                        requirements specified.
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Extended Testing</strong>
                    <ul>
                      <li>
                        In the second phase of testing, we ensured testing the
                        system or application in more detail, to ensure that it
                        can handle more complex scenarios and edge cases, and
                        that it is robust and reliable.
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Extreme Testing</strong>
                    <ul>
                      <li>
                        In the third phase of testing, we tried subjecting the
                        system or application to extreme conditions or
                        scenarios, to test its resilience and stability.
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Pair Wise Testing</strong>
                    <ul>
                      <li>
                        In the last phase of testing, we tried optimizing the
                        testing process by selecting a subset of test cases that
                        cover all possible combinations of input parameters,
                        without testing every possible combination. This reduced
                        the number of test cases required while still ensuring
                        comprehensive coverage.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>
                  To attempt completeness, we required various complex Source
                  Programs following the grammar and the complex abstractions
                  that can we extracted. The test cases include:
                </p>
                <ul>
                  <li>Multiple procedures with all the statement types</li>
                  <li>
                    Ensuring indentation and spaces are not affecting the Parser
                  </li>
                  <li>
                    Container statements having multiple level of nesting and
                    overlapped with each other and other statements
                  </li>
                  <li>
                    Large chain of calling and called procedures to ensure
                    procedure variants of the design abstractions were valid
                  </li>
                  <li>
                    Large procedures combining these various complex test cases
                  </li>
                  <li>Invalid source files</li>
                </ul>
                <h3 id="unique-enhancements">Unique Enhancements</h3>
                <ul>
                  <li>
                  <strong>Google Benchmarking</strong>
                    <ul>
                      <li>
                        A tool for measuring the performance of code and
                        identifying areas for optimization, using statistical
                        analysis to provide accurate and reliable results.
                      </li>
                      <li>
                        Compared using different C++ structures using googlemock
                        over scaled iterations to test efficacy.
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Overkill and Stress tests for SPA</strong>
                    <ul>
                      <li>
                        Tests that simulate extreme usage scenarios to ensure
                        the stability and robustness of the system under high
                        loads.
                      </li>
                      <li>
                        Came up with a repository of handcrafted test cases to
                        check the limit of the application.
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Online Documentation</strong>
                    <ul>
                      <li>
                        A central repository of information about the project,
                        accessible to users and developers online, providing
                        detailed explanations of how the code works and how to
                        use it effectively.
                      </li>
                      <li>
                        Link to the deployment:{" "}
                        <a href="https://22s2-cp-spa-team-02-docs.vercel.app/">
                          https://22s2-cp-spa-team-02-docs.vercel.app/
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Lambdas and Functional Utility</strong>
                    <ul>
                      <li>
                        A programming paradigm that emphasizes the use of
                        functions as first-class citizens, allowing for more
                        concise and expressive code, especially when working
                        with containers or performing data transformations.
                      </li>
                      <li>
                        Built an SPA specific functional utility package to
                        process data in a clean and efficient manner; resulted
                        in DRY violation reduction and better SRP adherence
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>CI/CD</strong>
                    <ul>
                      <li>
                        Continuous Integration and Continuous Deployment, a set
                        of practices and tools that automate the building,
                        testing, and deployment of code, ensuring that changes
                        are thoroughly tested and safely released to production.
                      </li>
                      <li>
                        Builds for each CMake project, separately for unit
                        testing, integration testing, spa and autotester were
                        ensured upon each PR to milestone[1-3] branches and on
                        pushes to master branch
                      </li>
                    </ul>
                  </li>
                  <li>
                  <strong>Automation in Test Case Augmentation</strong>
                    <ul>
                      <li>
                        Automatically generate new test cases and augment
                        existing ones, improving the coverage and effectiveness
                        of the testing process.
                      </li>
                      <li>
                        Partially successful in augmenting complex source files
                        using a python script.
                      </li>
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
                  <ColumnChart
                    COLUMN_OPTION={COLUMN_OPTION_TEST_STATS}
                    COLUMN_SERIES_DATA={COLUMN_SERIES_DATA_TEST_STATS}
                  />
                  {/* <div className={styles.caption}>Test Cases Over Milestones</div> */}
                </div>
                <div className={styles.column_chart}>
                  <ColumnChart
                    COLUMN_OPTION={COLUMN_OPTION_COVERAGE}
                    COLUMN_SERIES_DATA={COLUMN_SERIES_DATA_COVERAGE}
                  />
                  {/* <div className={styles.caption}>Caption goes here</div> */}
                </div>
              </div>
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
};

export default Charts;
