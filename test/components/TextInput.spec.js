import React from 'react'
import TestUtils, {scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils'
import { expect } from 'chai'
import TextInput from '../../src/components/TextInput'

describe('TextInput', () => {
  it('render correctly', () => {
    const component = TestUtils.renderIntoDocument(<TextInput />)

    const textBox = scryRenderedDOMComponentsWithTag(component, 'input')

    expect(textBox.length).to.be.eql(1)
  })

  it('invoke callback when on change', () => {
    let text
    const onSave = (value) => {
      text = value
    }

    const component = TestUtils.renderIntoDocument(<TextInput onSave={onSave}/>)

    const textBox = scryRenderedDOMComponentsWithTag(component, 'input')

    Simulate.keyDown(textBox[0], {target: {value: 'todo'}, which: 13})

    expect(text).to.be.eql('todo')
  })
})
