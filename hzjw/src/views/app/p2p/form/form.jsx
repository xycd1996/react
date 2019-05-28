import React, { Component } from 'react'
import {
  List,
  InputItem,
  DatePicker,
  TextareaItem,
  Button,
  WingBlank,
  WhiteSpace,
  Toast
} from 'antd-mobile'
import { createForm } from 'rc-form'
import store from '@/store'
import Search from '@components/app/search/search'
import Scroll from '@components/app/scroll/scroll'
import { queryPlatform, submitRegisterForm } from '@api/p2p'
import { validateIdCard, validatePhone } from '@common/js/common'
import { parseTime } from '@common/js/timeFilter'

const Item = List.Item
// const nowTimeStamp = Date.now()
// const now = new Date(nowTimeStamp)

@createForm()
class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchPlat: false,
      platList: [],
      errMsg: '',
      platName: '',
      platId: undefined,
      submitState: false
    }
    console.log(store.getState())
    this.searchPlatform = this.searchPlatform.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
    this.queryPlatform = this.queryPlatform.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.selectedPlat = this.selectedPlat.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validateIdCard = this.validateIdCard.bind(this)
    this.validatePhone = this.validatePhone.bind(this)
  }
  render() {
    const {
      searchPlat,
      platList,
      errMsg,
      platName,
      platId,
      submitState
    } = this.state
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div>
        <Scroll>
          <form style={{ background: '#f5f5f9' }}>
            <List renderHeader='平台名称'>
              <InputItem
                {...getFieldProps('pid', {
                  normalize: (val, prev, all) => {
                    return platId
                  },
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('pid')}
                onClick={this.searchPlatform}
                placeholder='点击查询可登记平台'
                editable={false}
                value={platName}
              >
                平台名称
              </InputItem>
            </List>
            <List renderHeader='基本信息'>
              <InputItem
                {...getFieldProps('name', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('name')}
                placeholder='请填写姓名'
              >
                姓名
              </InputItem>
              <InputItem
                {...getFieldProps('idcard', {
                  rules: [
                    { required: true },
                    { validator: this.validateIdCard }
                  ]
                })}
                error={!!getFieldError('idcard')}
                onErrorClick={() => {
                  Toast.info(getFieldError('idcard'))
                }}
                placeholder='请填写身份证号'
              >
                身份证号
              </InputItem>
              <InputItem
                {...getFieldProps('phone', {
                  rules: [{ required: true }, { validator: this.validatePhone }]
                })}
                error={!!getFieldError('phone')}
                onErrorClick={() => {
                  Toast.info(getFieldError('phone'))
                }}
                type='phone'
                placeholder='请填写联系电话'
              >
                联系电话
              </InputItem>
              <InputItem
                {...getFieldProps('idCardAddr', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('idCardAddr')}
                placeholder='请填写户籍地'
              >
                户籍地
              </InputItem>
              <InputItem
                {...getFieldProps('realAddr', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('idCardAddr')}
                placeholder='请填写实际居住地'
              >
                实际居住地
              </InputItem>
            </List>
            <List renderHeader='登记平台信息'>
              <InputItem
                {...getFieldProps('platAccount', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('platAccount')}
                placeholder='请填写平台账号'
              >
                平台账号
              </InputItem>
              <DatePicker
                {...getFieldProps('firstRegisTime', {
                  initialValue: undefined,
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('firstRegisTime')}
                mode='date'
                extra='请选择时间 >'
              >
                <Item>首次投资时间</Item>
              </DatePicker>
              <InputItem
                {...getFieldProps('totRegisMoney', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('totRegisMoney')}
                type='money'
                moneyKeyboardAlign='left'
                placeholder='请填写总投资金额'
              >
                总投资金额
              </InputItem>
              <InputItem
                {...getFieldProps('totObtMoney', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('totObtMoney')}
                type='money'
                moneyKeyboardAlign='left'
                placeholder='请填写取回本息金额'
              >
                取回本息金额
              </InputItem>
              <InputItem
                {...getFieldProps('noObtMoney', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('noObtMoney')}
                type='money'
                moneyKeyboardAlign='left'
                placeholder='请填写未兑付金额'
              >
                未兑付金额
              </InputItem>
              <InputItem
                {...getFieldProps('regisPayBank', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('regisPayBank')}
                placeholder='请填写付款银行/平台'
              >
                付款平台
              </InputItem>
              <InputItem
                {...getFieldProps('regisPayAccount', {
                  rules: [{ required: true }]
                })}
                error={!!getFieldError('regisPayAccount')}
                placeholder='请填写付款账户'
              >
                付款账户
              </InputItem>
            </List>
            <List renderHeader='更多平台信息（选填）'>
              <InputItem
                {...getFieldProps('platGatherBank')}
                placeholder='请填写平台收款银行/平台'
              >
                平台收款行
              </InputItem>
              <InputItem
                {...getFieldProps('platGatherAccount')}
                placeholder='请填写平台收款账号'
              >
                平台收款账号
              </InputItem>
              <TextareaItem
                {...getFieldProps('mark')}
                placeholder='请填写投资情况描述'
                title='情况描述'
                rows={3}
                count={300}
              />
            </List>
            <WingBlank>
              <WhiteSpace />
              <Button
                loading={submitState}
                disabled={submitState}
                onClick={this.onSubmit}
                type='primary'
              >
                {submitState ? '正在提交' : '提交'}
              </Button>
              <WhiteSpace />
            </WingBlank>
          </form>
        </Scroll>
        <div className='search-plat'>
          {searchPlat ? (
            <Search
              closeSearch={this.closeSearch}
              queryPlatform={this.queryPlatform}
              platList={platList}
              errMsg={errMsg}
              clearSearch={this.clearSearch}
              selectedPlat={this.selectedPlat}
            />
          ) : null}
        </div>
      </div>
    )
  }

  searchPlatform() {
    this.setState({
      searchPlat: true
    })
  }

  queryPlatform(name) {
    queryPlatform(name).then(res => {
      if (res.code === 200) {
        const platList = res.data
        this.setState({
          platList,
          errMsg: ''
        })
      }
      if (res.code === 104) {
        const errMsg = res.msg
        this.setState({
          platList: [],
          errMsg
        })
      }
    })
  }

  closeSearch() {
    this.setState({
      searchPlat: false
    })
  }

  clearSearch() {
    this.setState({
      platList: [],
      errMsg: ''
    })
  }

  selectedPlat(platName, platId) {
    this.setState({
      platName,
      searchPlat: false,
      platId
    })
  }

  onSubmit() {
    this.props.form.validateFields({ force: true }, error => {
      if (!error) {
        this.setState({
          submitState: true
        })
        let data = this.props.form.getFieldsValue()
        data['firstRegisTime'] = parseTime(data['firstRegisTime'])
        submitRegisterForm(data).then(res => {
          if (res.code !== 200) return
          this.props.history.push({
            pathname: './result',
            state: res.data
          })
        })
      } else {
        let data = this.props.form.getFieldsValue()
        data['firstRegisTime'] = parseTime(data['firstRegisTime'])
        console.log(data)
        Toast.fail('请输入完整信息')
      }
    })
  }

  validate(value, method, callback, msg) {
    if (value && method(value)) {
      callback()
    } else {
      callback(new Error(msg))
    }
  }

  validateIdCard(rule, value, callback) {
    const msg = '请输入合法身份证号'
    this.validate(value, validateIdCard, callback, msg)
  }
  validatePhone(rule, value, callback) {
    const msg = '请输入合法手机号'
    this.validate(value, validatePhone, callback, msg)
  }
}

export default form
