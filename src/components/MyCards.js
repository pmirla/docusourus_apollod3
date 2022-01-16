import React from 'react'
import Layout from '@theme/Layout'
import Masonry from 'react-masonry-css'
import NoteCard from './NoteCard'
import Container from '@material-ui/core/Container'
import useFetchData from "./UseFetchData";
import styles from '../pages/styles.module.css';


export default function MyCards(props) {
    const { jsonUrl } = props;
      const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
      };
    
      var items = <></>
      const [{ data, isLoading, isError }] = useFetchData({
        // initialFetchUrl: 'https://secret-ocean-49799.herokuapp.com/https://storage.googleapis.com/nytimes_quiz/sampleData.json'
        initialFetchUrl: jsonUrl
      });
      if (!isLoading)
        if (typeof data.res !== "undefined") {
          var fetchedData = data.res;
             // Convert array to JSX items
            items = fetchedData.map(function(item) {
           return  <div key={item.id}>
             <NoteCard key={item.id} note={item}/>
          </div>
      
      });
        }

      
  return (
    <Container>
    {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <>
        <Masonry
            breakpointCols={breakpoints}
            className={styles.my_masonry_grid}
            columnClassName={styles.my_masonry_grid_column}
            >
          {[items]}
       </Masonry>
        </>
      )}
      </Container>
  );
}



<MyCards/>