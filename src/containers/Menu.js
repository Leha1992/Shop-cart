import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import  * as actionsCart from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy'


const mapToStateProps = ({cart}) =>({
    totalPrice: cart.items.reduce((res,item) => res + item.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, 'id')
  }) 
  
  const  mapDispatchToProps = dispatch => ({
     ...bindActionCreators(actionsCart, dispatch)
  })
  
  
  export default connect(mapToStateProps, mapDispatchToProps)(Menu);