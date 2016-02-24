import fetch from 'isomorphic-fetch'

export function fetchTodo() {
  return {
    type: 'FETCH_TODOS',
    items: []
  }
}

export function recieveTodos(items) {
  return {
    type: 'RECEIVE_TODOS',
    items
  }
}

export function addTodo(state) {
  return {
    type: 'ADD_TODO',
    state
  }
}

export function toggle(id) {
  return {
    type: 'TOGGLE',
    id
  }
}

export function requestTodos() {
  return dispatch => {

    dispatch(fetchTodo())

    return requestRemoteTodos()
    .then(response => response.json())
    .then(json => dispatch(recieveTodos(json)))
  }
}

export function postTodo(text) {
  return dispatch => {
    return postToRemote(text)
      .then(response => response.json())
      .then(json => dispatch(addTodo(json))
           ).catch(error => console.log('error:', error))
  }
}

function requestRemoteTodos() {
  return fetch('http://localhost:3000')
}

function postToRemote(text) {
  const data = JSON.stringify({text})

  return fetch('http://localhost:3000/', {
               method: 'post',
               headers: {
                 'Content-Type': 'application/json'
               },
               body: data
  })
}
