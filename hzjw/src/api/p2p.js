import axios from 'axios'
import { Toast } from 'antd-mobile'

export function queryPlatform(platName, actId) {
  return axios({
    method: 'POST',
    url: '/hzjwztc/api/p2p/queryPlat.action',
    params: {
      query: {
        actId: actId,
        data: {
          name: platName
        }
      }
    }
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export function submitRegisterForm(formData, actId) {
  return axios({
    method: 'POST',
    url: '/hzjwztc/api/p2p/addAccus.action',
    params: {
      query: {
        actId: sessionStorage.getItem('accId'),
        data: formData
      }
    }
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      Toast.fail('提交失败')
    })
}

export function getRecordList() {}
