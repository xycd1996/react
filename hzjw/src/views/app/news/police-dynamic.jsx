import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import { getSite } from '../../../api/news'
import Tags from '../../../components/app/tags/tags'
import * as codes from '../../../common/js/newsCode'

export default class PoliceDynamic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagsData: null
    }
  }
  render() {
    const { tagsData } = this.state
    return (
      <div className='police-dynamic'>
        {tagsData ? <Tags tags={tagsData} /> : null}
      </div>
    )
  }
  componentDidMount() {
    this.getSite(codes.PoliceDynamicCode)
  }

  getSite(code) {
    getSite(code).then(res => {
      if (res.code === 200) {
        this.setState({
          tagsData: res.data.details
        })
      } else {
        Toast.fail('数据加载失败!!!', 1)
      }
    })
  }
}
