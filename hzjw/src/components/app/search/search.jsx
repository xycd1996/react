import React, { Component } from 'react'
import { SearchBar, List, WingBlank, WhiteSpace } from 'antd-mobile'
import styles from './search.module.sass'
import PropTypes from 'prop-types'

const Item = List.Item
const Brief = Item.Brief

export default class search extends Component {
  static propTypes = {
    closeSearch: PropTypes.func,
    queryPlatform: PropTypes.func,
    platList: PropTypes.array,
    errMsg: PropTypes.string,
    clearSearch: PropTypes.func,
    selectedPlat: PropTypes.func
  }

  static defaultProps = {
    platList: [],
    errMsg: ''
  }

  render() {
    const {
      closeSearch,
      queryPlatform,
      platList,
      errMsg,
      clearSearch,
      selectedPlat
    } = this.props
    return (
      <div className={styles.search}>
        <SearchBar
          placeholder="输入平台名称，如“PP基金”"
          ref={ref => (this.autoFocusInst = ref)}
          showCancelButton={true}
          onCancel={closeSearch}
          onChange={queryPlatform}
          onClear={clearSearch}
        />
        <List>
          {platList.length ? (
            platList.map(item => {
              return (
                <Item
                  arrow="horizontal"
                  multipleLine
                  key={item.id}
                  onClick={() => selectedPlat(item.name, item.id)}
                >
                  {item.name}
                  <Brief>{item.company}</Brief>
                </Item>
              )
            })
          ) : (
            <WingBlank>
              <WhiteSpace />
              <i>{errMsg}</i>
              <WhiteSpace />
            </WingBlank>
          )}
        </List>
      </div>
    )
  }

  componentDidMount() {
    this.autoFocusInst.focus()
  }

  componentWillUnmount() {
    this.props.clearSearch()
  }
}
