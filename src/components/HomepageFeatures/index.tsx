import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;

  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Source Processor",
    description: (
      <>
        <div>
          <a href="https://github.com/srj31">Sourabh Raj Jaiswal</a>
        </div>
        <div>
          <a href="https://github.com/flairekq">Yong Kai Qi</a>
        </div>
      </>
    ),
  },
  {
    title: "Program Knowledge Base",
    description: (
      <>
        <div>
          <a href="https://github.com/naranghardik16">Hardik Narang</a>
        </div>
        <div>
          <a href="https://github.com/s7manth">Sumanth Yalamarty</a>
        </div>
      </>
    ),
  },
  {
    title: "Query Processing System",
    description: (
      <>
        <div>
          <a href="https://github.com/hanhuiice">Wu HanHui</a>
        </div>
        <div>
          <a href="https://github.com/isabelteo">Isabel Teo Jing Lin</a>
        </div>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h2>Components and Team Members</h2>
        </div>
        <hr></hr>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
