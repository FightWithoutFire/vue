import request from '@/utils/request'
export default {
  sendCode(phone) {
    return request({
      url: `/edumsm/msm/send/${phone}`,
      method: 'get'
    })
  },

  registerMember(registerVo) {
    return request({
      url: '/educenter/member/register',
      method: 'post',
      data: registerVo
    })
  }
}
