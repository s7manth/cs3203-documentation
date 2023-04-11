import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { DataRow } from "../components/Table/Table";
import styles from "./api_table.module.css";
import { API_ROWS } from "../data/api_data";

const Charts = () => {
  return (
    <BrowserOnly>
      {() => {
        const Layout = require("@theme/Layout").default;
        const CollapsibleTable = require("../components/Table/Table").default;
        const outer_colum_names = ["Component", "Count"];

        return (
          <Layout title={`Charts for tests`} description="">
            <div className={styles.table}>
              <CollapsibleTable
                outer_column_names={outer_colum_names}
                outer_rows={API_ROWS}
              />
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
};

export default Charts;
