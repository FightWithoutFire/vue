import request from '@/utils/request'
export default {

  getCourseList(page, limit, searchObj) {
    return request({
      url: `/eduService/courseFront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

  getAllSubject() {
    return request({
      url: `/eduService/subject/getAllSubject`,
      method: 'get'
    })
  },

  getCourseInfo(courseId) {
    return request({
      url: `/eduService/courseFront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }
}
