import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import * as TodoActions from '../actions/todos'

class App extends Component {
  render() {
    const { items, actions, dispatch} = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} actions={actions} dispatch={dispatch} />
        <TodoList items={items} onToggle={actions.toggle} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    items: state.get('items').toJSON()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
