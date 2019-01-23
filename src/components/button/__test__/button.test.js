import React from 'react'
import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('render correctly', () => {
    const button = shallow(<Button primary>Click</Button>)
    expect(button.hasClass('primary')) 

    button.setProps({ icon: 'icon-search' })
    expect(button.find('i.icon-search').exists())

    button.setProps({ primary: false, warning: true })
    expect(button.hasClass('warning')) 

    expect(button).toMatchSnapshot()
  })
})