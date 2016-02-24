import React, { Component } from 'react'

class TodoList extends Component {
  getItems() {
    return this.props.items
  }

  handleToggle(id) {
    this.props.onToggle(id)
  }

  render() {
    return <ul className="todo-list">
      {this.getItems().map(item => {
        return <li key={item.id}>
          {item.text}
          <input type="checkbox"
            checked={item.completed}
            onChange={this.handleToggle.bind(this, item.id)}
          />
        </li>
      })}
    </ul>
  }
}

export default TodoList
