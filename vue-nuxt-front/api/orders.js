import request from '@/utils/request'
export default {

  createOrders(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'post'
    })
  },
  getOrderInfo(id) {
    return request({
      url: `/eduorder/order/getOrderInfo/${id}`,
      method: 'get'
    })
  },
  createNative(id) {
    return request({
      url: `/eduorder/paylog/createNative/${id}`,
      method: 'get'
    })
  },
  queryPayStatus(id) {
    return request({
      url: `/eduorder/paylog/queryPayStatus/${id}`,
      method: 'get'
    })
  }
}
