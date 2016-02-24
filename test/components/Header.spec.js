import React from 'react'
import TestUtils, {scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils'
import { expect } from 'chai'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('render correctly', () => {
    const component = TestUtils.renderIntoDocument(<Header />)

    const title = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(title[0].textContent).to.be.eql('todos')
  })

  it('render text input', () => {
    const component = TestUtils.renderIntoDocument(<Header />)

    const textbox = scryRenderedDOMComponentsWithTag(component, 'input')

    expect(textbox.length).to.equal(1)
  })
})
