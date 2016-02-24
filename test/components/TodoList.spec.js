import React from 'react'
import TestUtils, {Simulate, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils'
import { expect } from 'chai'
import TodoList from '../../src/components/TodoList'

describe('Todo List', () => {
  it('render list', () => {
    const items = [{id: 1, text: 'buy milk'}, {id: 2, text: 'goto shopping'}]

    const component = TestUtils.renderIntoDocument(<TodoList items={items}/>)

    const li = scryRenderedDOMComponentsWithTag(component, 'li')

    expect(li.length).to.be.eql(2)
    expect(li[0].textContent).to.be.eql('buy milk')
    expect(li[1].textContent).to.be.eql('goto shopping')
  });

  it('render checked item', () => {
    const items = [
      {id: 1, text: 'buy milk', completed: true},
      {id: 2, text: 'goto shopping'}]

    const component = TestUtils.renderIntoDocument(<TodoList items={items}/>)

    const check = scryRenderedDOMComponentsWithTag(component, 'input')

    expect(check.length).to.be.eql(2)
    expect(check[0].hasAttribute('checked')).to.be.equal(true)
    expect(check[1].hasAttribute('checked')).to.be.equal(false)
  })

  it('togle item', () => {
    const items = [
      {id: 1, text: 'buy milk'},
      {id: 2, text: 'goto shopping'}]

    let id
    const onToggle = (value) => id = value

    const component = TestUtils.renderIntoDocument(
      <TodoList items={items} onToggle={onToggle}/>)

    const input = scryRenderedDOMComponentsWithTag(component, 'input')

    Simulate.change(input[0], {target: {value: 0}})

    expect(id).to.be.eql(1)
  })
})

