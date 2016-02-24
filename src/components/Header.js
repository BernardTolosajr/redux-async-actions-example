import React, { Component } from 'react'
import TextInput from './TextInput'
import { postTodo } from '../actions/todos'

class Header extends Component {
  handleSave(text) {
    const { dispatch } = this.props

    dispatch(postTodo(text))
  }

  render() {
    return <div className="header">
      <h1>todos</h1>
      <TextInput onSave={this.handleSave.bind(this)}/>
    </div>
  }
}

export default Header
