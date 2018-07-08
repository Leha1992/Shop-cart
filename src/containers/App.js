import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import orderBy from 'lodash/orderBy'
import * as addBooks from '../actions/books'
import App from '../components/App'


const sort = (books, filterBy, searchQuery) => {
  let booksItems =books.filter(book => book.title.toLowerCase().indexOf(searchQuery.toLowerCase())>=0)
    switch(filterBy){
      case 'price_high':
        return orderBy(booksItems,'price','desc');
      case 'price_low':
        return orderBy(booksItems,'price','asc');
      case 'author':
        return orderBy(booksItems,'author','asc');
      default:
        return booksItems
  }
}
 
const mapToStateProps = ({books, filter}) =>{
 return {
    books:books.items
    && sort(books.items,filter.filterBy, filter.searchQuery),
    isReady: books.isReady 
  }
} 
  
const  mapDispatchToProps = dispatch => ({
    ...bindActionCreators(addBooks, dispatch),
})

export default connect(mapToStateProps, mapDispatchToProps)(App);