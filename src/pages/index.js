import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import MyCards from "../components/MyCards"
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tech">
            Our Projects - 5min ⏱️⏱️
          </Link>
        </div> */}
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <div className="hero hero--primary text--center" style={{height: '25rem'}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{`We are Full Stack Data Scientists`}</p>
        </div>
      </div>


      <div className="container">
       </div>
        <HomepageFeatures />
        <div className="hero hero--primary text--center" style={{height: '1rem'}}>
        <div className="container">
          <p className="hero__subtitle">{`Top Machine Learning Stories in 2021`}</p>
        </div>
        </div>

        <MyCards jsonUrl={'https://secret-ocean-49799.herokuapp.com/https://storage.googleapis.com/nytimes_quiz/sampleData1.json'}/>


    </Layout>
  );
}
