import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import  * as actionsFilter from '../actions/filter'
import Filter from '../components/Filter'

const mapToStateProps = ({books,filter}) =>({
    filterBy: filter.filterBy
}) 
  
const  mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actionsFilter, dispatch)
})
  
  
export default connect(mapToStateProps, mapDispatchToProps)(Filter)