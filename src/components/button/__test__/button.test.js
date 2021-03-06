import React from 'react'
import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('should render primary style', () => {
    const button = shallow(<Button primary>Click</Button>)
    expect(button).toMatchSnapshot()
  })

  it('should render warning style', () => {
    const button = shallow(<Button warning>Click</Button>)
    expect(button).toMatchSnapshot()
  })
  
  it('should render with icon', () => {
    const button = shallow(<Button icon="icon-search">Click</Button>)
    expect(button).toMatchSnapshot()
    expect(button.find('i.icon-search').exists())
  })
})