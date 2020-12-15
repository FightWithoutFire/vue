import request from '@/utils/request'

export default {
  addVideo(video) {
    return request({
      url: `/eduService/video/addVideo`,
      method: 'post',
      data: video
    })
  },
  getVideo(videoId) {
    return request({
      url: `/eduService/video/getVideo/${videoId}`,
      method: 'get'
    })
  },
  updateVideo(video) {
    return request({
      url: `/eduService/video/updateVideo`,
      method: 'put',
      data: video
    })
  },
  deleteVideo(videoId) {
    return request({
      url: `/eduService/video/${videoId}`,
      method: 'delete'
    })
  },
  deleteAliyunVideo(id) {
    return request({
      url: `/eduVod/video/removeAliyunVideo/${id}`,
      method: 'delete'
    })
  }
}
