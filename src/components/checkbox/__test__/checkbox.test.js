import React from 'react'
import { mount } from 'enzyme'
import Checkbox from '..'

describe('Checkbox', () => {
  it('render correctly', () => {
    const checkbox = mount(<Checkbox>Checkbox</Checkbox>)   
    checkbox.setProps({ indeterminate: true })
    expect(checkbox.getDOMNode().indeterminate).toBeTruthy()
    expect(checkbox).toMatchSnapshot()
  })
})