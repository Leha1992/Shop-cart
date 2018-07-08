import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import BookCard from '../containers/BookCart';
import Filter from '../containers/Filter'
import Menu  from '../containers/Menu'

class App extends Component {
  
  componentWillMount() {
   const {addBooks} = this.props;
   axios.get('/books.json').then(res => {
     addBooks(res.data);
   })
  }

  render() {
   const {books, isReady, filterBy, setFilter} = this.props;
   return (
      <Container>
      <Menu/>
      <Filter filterBy={filterBy} setFilter={setFilter}/>
      <Card.Group  itemsPerRow={4}>
        {!isReady ? 'Loading': books.map(book => <BookCard key={book.id} {...book}/>)}
      </Card.Group>
      </Container>
    )
  }
}

export default App;
