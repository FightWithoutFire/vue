import request from '@/utils/request'

export function getTeacherList(params) {
  return request({
    url: '/eduService/teacher/getTeacherList',
    method: 'get',
    params
  })
}
