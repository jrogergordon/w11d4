import { connect } from "react-redux"
import { allTodos } from "../../reducers/selectors"
import { receiveTodo } from "../../actions/todo_actions"
import Lmno from "./todo_list"

const mapStateToProps = state => {
    // console.log(Lmno)
    return {
    todos: allTodos(state)
}};
  
  const mapDispatchToProps = function(dispatch) {
    return {
    receiveTodo: todo => dispatch(receiveTodo(todo))
  }};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps)(Lmno);