import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles/styles.less'

const TYPE_INLINE = 'inline'
const TYPE_BLOCK = 'block'

export class Dropdown extends Component {
  static propTypes = {
    label: PropTypes.string,
    operationName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operationItem: PropTypes.array,
    itemChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      menuOpened: false,
      selectedItem: '',
    }
  }

  handleOpenMenu = e => {
    this.setState({
      menuOpened: !this.state.menuOpened,
    })
  }

  handleCloseMenu = e => {
    this.setState({
      menuOpened: false,
    })
  }

  handleItemChange = selectedItem => {
    const { itemChange } = this.props
    this.setState({
      selectedItem,
    })
    itemChange && itemChange(selectedItem)
  }

  renderItem = () => {
    const { operationItem } = this.props
    const items = operationItem.map((_item, index) => {
      return (
        <div key={index} className={styles.item} onClick={() => this.handleItemChange(_item)}>
          {_item}
        </div>
      )
    })
    return items
  }

  render() {
    const { operationName, label, icon, type } = this.props
    const { menuOpened, selectedItem } = this.state
    return (
      <div className={`${styles.dropdown}`} style={{display: type === TYPE_INLINE ? 'inline-block' : 'flex'}}>
        {label ? <div className={styles['label-wrapper']}>{label}</div> : null}
        <div style={label ? { display: 'inline-block' } : null}>
          <button
            className={icon ? `${styles.icon} ${icon}` : `${styles.btn} ${styles.clickable}`}
            onClick={this.handleOpenMenu}
            onBlur={this.handleCloseMenu}>
            {selectedItem && !icon ? selectedItem : operationName}
          </button>
          <div className={`${styles.menu} ${menuOpened ? styles.visible : ''}`}>{this.renderItem()}</div>
        </div>
      </div>
    )
  }
}

export default Dropdown
