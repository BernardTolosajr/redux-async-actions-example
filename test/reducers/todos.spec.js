import {List, Map, fromJS} from 'immutable'
import { expect } from 'chai'
import todos from '../../src/reducers/todos'

describe('todos reducer', () => {
  it('handle FETCH_TODOS', () => {
    const initialState = Map({isFetching: false, items: []})

    const action = {
      type: 'FETCH_TODOS',
      items: []
    }

    const nextState = todos(initialState, action)

    expect(nextState).to.equal(fromJS({
      isFetching: true,
      items: []
    }))
  })

  it('handle RECEIVE_POSTS', () => {
    const initialState = Map({isFetching: true, items: []})

    const action = {
      type: 'RECEIVE_TODOS',
      items: [{id: 1, text: 'foo'}]
    }

    const nextState = todos(initialState, action)

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: [{id: 1, text: 'foo'}]
    }))
  })

  it('handle initial state', () => {
    const action = {
      type: 'ADD_TODO',
      state: Map({
        id: 1,
        text: 'foo'
      })
    }

    const nextState = todos(undefined, action)

    expect(nextState).to.equal(fromJS([
      {id: 1, text: 'foo'}
    ]))
  })

  it.only('handle ADD_TODO', () => {
    const initialState = Map({isFetching: false, items: List(Map({id: 2, text: 'bar'}))})

    const action = {
      type: 'ADD_TODO',
      state: Map({
        id: 1,
        text: 'foo'
      })
    }

    const nextState = todos(initialState, action)

    expect(nextState).to.equal(fromJS([
      {id: 1, text: 'foo'},
      {id: 2, text: 'bar'}
    ]))
  })

  it('handle TOGGLE_ITEM', () => {
    const initialState = List.of([
      {id: 1, text: 'bar'}, {id: 2, text: 'foo'}
    ])

    const action = {
      type: 'TOGGLE_ITEM',
      id: 1
    }

    const nextState = todos(initialState, action)

    expect(nextState).to.eql([
      {id: 1, text: 'bar', completed: true},
      {id: 2, text: 'foo'},
    ])
  })
})
