import React from 'react'
import Layout from '@theme/Layout'
import MyCards from "../../components/MyCards"

export default function MyComponent() {
const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
  };
return (
    <Layout>
    <MyCards jsonUrl={'https://secret-ocean-49799.herokuapp.com/https://storage.googleapis.com/nytimes_quiz/sampleData1.json'}/>
    </Layout>
  );
}


<MyComponent/>