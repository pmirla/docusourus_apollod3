import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'We build and deploy Machine Learning models',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
         Built prediction models for clients in investments, healthcare, retail and e-commerc
      </>
    ),
  },
  {
    title: 'We assist in data architecture design and process automation',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Expertise with DataBricks Spark, Amazon AWS, Microsoft Azure and Google Cloud.
      </>
    ),
  },
  {
    title: 'We train your staff to fasten digital transformation ',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Developed customized tools for transforming data into insights. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
