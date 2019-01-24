import React from 'react'
import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('renders primary style', () => {
    const button = shallow(<Button primary>Click</Button>)
    expect(button).toMatchSnapshot()
  })

  it('renders warning style', () => {
    const button = shallow(<Button warning>Click</Button>)
    expect(button).toMatchSnapshot()
  })
  
  it('renders with icon', () => {
    const button = shallow(<Button icon="icon-search">Click</Button>)
    expect(button).toMatchSnapshot()
  })
})