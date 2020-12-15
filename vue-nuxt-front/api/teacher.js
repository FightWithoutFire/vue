import request from '@/utils/request'
export default {
  // 登录
  getTeacherList(page, limit) {
    return request({
      url: `/eduService/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  // 根据token获取用户信息
  getTeacherInfo(teacherId) {
    return request({
      url: `/eduService/teacherfront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
    // headers: {'token': cookie.get('guli_token')}
  }
}
