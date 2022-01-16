import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import MyCards from "../components/MyCards"
import D3axisVideo from '@site/static/img/D3AxisVideo4.mp4';
import D3AxisGIF from '@site/static/img/D3AxisGIF.gif';


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

      <div className="col-6 col-s-9">
        <video playsinline autoPlay={true} width={"100%"} muted loop>
          <source src={D3axisVideo} type="video/mp4" />
          <source src={D3axisVideo} type="video/ogg" />
          Your browser does not support HTML5 video.
        </video>
     </div>


  
      <div className="container">
       </div>
      
       <div className="hero  text--center" style={{height: '1rem'}}>
        <div className="container">
          <p className="hero__subtitle">{`Our Expertise`}</p>
        </div>
       </div>

        <HomepageFeatures />
        <div className="hero  text--center" style={{height: '1rem'}}>
        <div className="container">
          <p className="hero__subtitle">{`Top Machine Learning Stories in 2021`}</p>
        </div>
       </div>

        <MyCards jsonUrl={'https://secret-ocean-49799.herokuapp.com/https://storage.googleapis.com/nytimes_quiz/sampleData1.json'}/>

        <div className="color" style={{backgroundColor: 'var(--ifm-color-primary-lighter)'}} />

    </Layout>
  );
}
