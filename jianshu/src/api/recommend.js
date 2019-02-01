import axios from 'axios'

export function getAuthorList(
  seen_ids = '',
  count = 5,
  only_unfollowed = true
) {
  return axios({
    method: 'get',
    url: '/api/users/recommended',
    params: {
      seen_ids: seen_ids,
      count: count,
      only_unfollowed: only_unfollowed
    },
    headers: {
      Accept: 'application/json'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getArticleList() {
  return axios({
    method: 'get',
    url: '/api',
    params: {}
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
