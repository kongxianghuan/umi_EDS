import * as React from 'react'
import { mount } from 'enzyme'
import Table from '..'
import { columns, data } from './mock'

describe('Table', () => {
  it('should render correctly', () => {
    const filterColumns = columns.map(col => {
      return col.title === 'country' ? {...col, filterable: true} : col
    })
    const table = mount(<Table columns={filterColumns} data={data} />)
    const filterItem = table.find('.item').findWhere(item => item.text() === 'China')
    filterItem.simulate('click')
    expect(table.find('tbody tr').length).toBe(3)
    expect(table).toMatchSnapshot()
  })
})
