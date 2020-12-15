import request from '@/utils/request'

export default {
  createStaData(day) {
    return request({
      url: `/staservice/sta/registerCount/${day}`,
      method: 'post'
    })
  }
}
