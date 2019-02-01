import axios from 'axios'

export function test() {
  return axios({
    method: 'post',
    url: '/api/trending_notes',
    data: {
      page: 4,
      seen_snote_ids: [
        39993627,
        39208168,
        40256550,
        35618164,
        37192021,
        40377093,
        39231047,
        37075900,
        36553227,
        40412651,
        37486983,
        38596400,
        38714124,
        40099379,
        30774616,
        37367124,
        39400651,
        37933449,
        40296168,
        40278195,
        38279853
      ]
    },
    transformRequest: [
      function(data) {
        let ret = ''
        for (let item in data) {
          console.log(typeof(data[item]))
          ret += `${item}=${data[item]}&`
        }
        return ret
      }
    ]
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
