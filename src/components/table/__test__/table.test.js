import React from 'react'
import { shallow } from 'enzyme'
import Table from '..'
import { columns, data } from './mock'

describe('Table', () => {
  it('should render correctly', () => {
    const table = shallow(<Table columns={columns} data={data} />)
    expect(table).toMatchSnapshot()
  }) 
})
