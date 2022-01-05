import React from 'react'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./my-markdown-page.md';
import styles from '../styles.module.css';
import Masonry from 'react-masonry-css'
import NoteCard from '../../components/NoteCard'
import Container from '@material-ui/core/Container'

export default function MyComponent() {
    var items = [
      {id: 1, name: 'My First Item', category: 'work',title: 'tile1',details: 'details1'},
      {id: 2, name: 'Another item',category: 'money',title: 'tile1',details: 'details1'},
      {id: 3, name: 'Third Item',category: 'todos',title: 'tile1',details: 'details1'},
      {id: 4, name: 'Here is the Fourth',category: 'reminders',title: 'tile1',details: 'details1'},
      {id: 5, name: 'High Five',category: 'work',title: 'tile1',details: 'details1'}
    ];
       // Convert array to JSX items
       items = items.map(function(item) {
        return  <div key={item.id}>
            <NoteCard note={item}/>
          </div>
      
      });
      const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
      };
    
  return (
    <Layout>
    <Container>
    <main className={styles.main}>
      <h1 className={styles.heading}>Hello!</h1>
      <article className={styles.contents}>Lorem Ipsum</article>
    </main>
      <Masonry
        breakpointCols={breakpoints}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {items}
      </Masonry>
      </Container>
    </Layout>
  );
}



<MyComponent/>