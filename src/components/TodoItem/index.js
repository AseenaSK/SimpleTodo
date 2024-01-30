// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemsdetails, deleteUser} = props

  const {title, id} = todoItemsdetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="item-container">
        <p>{title}</p>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
