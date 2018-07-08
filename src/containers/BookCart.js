import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import  * as actionsCart from '../actions/cart'
import BookCard from '../components/BookCart'

const mapToStateProps = ({cart}, {id}) =>({
    addCount: cart.items.reduce((count,item) => count + (item.id === id ? 1:0), 0)
})  

const  mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actionsCart, dispatch)
})

export default connect(mapToStateProps, mapDispatchToProps)(BookCard);