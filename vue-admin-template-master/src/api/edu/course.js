import request from '@/utils/request'

export default {
  addCourseInfo(courseInfo) {
    return request({
      url: `/eduService/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  getListTeacher() {
    return request({
      url: `/eduService/teacher/findAll`,
      method: 'get'
    })
  },
  getCourseInfo(id) {
    return request({
      url: `/eduService/course/getCourseInfo/${id}`,
      method: 'get'
    })
  },
  updateCourseInfo(courseInfo) {
    return request({
      url: `/eduService/course/updateCourseInfo`,
      method: 'put',
      data: courseInfo
    })
  },
  getPublishCourseInfo(id) {
    return request({
      url: `/eduService/course/getPublishCourseInfo/${id}`,
      method: 'get'
    })
  },
  publishCourse(id) {
    return request({
      url: `/eduService/course/publishCourse/${id}`,
      method: 'post'
    })
  },
  getCourseList() {
    return request({
      url: `/eduService/course/getCourseList`,
      method: 'get'
    })
  },
  deleteCourse(id) {
    return request({
      url: `/eduService/course/${id}`,
      method: 'delete'
    })
  }
}
