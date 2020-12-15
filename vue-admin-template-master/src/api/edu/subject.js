import request from '@/utils/request'

export default {
  getAllSubject() {
    return request({
      url: `/eduService/subject/getAllSubject`,
      method: 'get'
    })
  }
}
