import React from 'react'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./my-markdown-page.md';
import styles from '../styles.module.css';

function MyComponent() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Hello!</h1>
      <article className={styles.contents}>Lorem Ipsum</article>
    </main>
  );
}


export default function MyReactPage() {
    return (
        <Layout>
        <h1> My React Page </h1>
        <p>This is my React page</p>
        </Layout>
    )
}

<MyComponent/>