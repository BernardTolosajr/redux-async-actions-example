import { expect } from 'chai'
import { addTodo, toggle } from '../../src/actions/todos'

describe('Todo Actions', () => {
  it('handle ADD_TODO', () => {
    const state = {
      id: 1,
      text: 'foo'
    }

    expect(addTodo(state)).to.be.eql({
      type: 'ADD_TODO',
      state: {
        id: 1,
        text: 'foo'
      }
    })
  })

  it('handle toggle', () => {
    expect(toggle(1)).to.be.eql({
      type: 'TOGGLE',
      id: 1
    })
  })
})
