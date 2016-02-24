import { List, Map } from 'immutable'

function addTodo(state, newState) {
  return state.get('items').push(newState)
}

function toggleItem(state, id) {
  return state.get(0).map(item => {
    if (item.id === id) {
      return {
        id: id,
        text: item.text,
        completed: true
      }
    }

    return item
  })
}

export default function todos(state = Map({items: List()}), action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return state.merge({isFetching: true, items: action.items})
    case 'RECEIVE_TODOS':
      return state.merge({isFetching: false, items: action.items})
    case 'TOGGLE_ITEM':
      return toggleItem(state, action.id)
    case 'ADD_TODO':
      return addTodo(state, action.state)
  }

  return state;
}
