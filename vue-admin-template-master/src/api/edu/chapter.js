import request from '@/utils/request'

export default {
  getAllChapterVideo(id) {
    return request({
      url: `/eduService/chapter/getChapterVideo/${id}`,
      method: 'get'
    })
  },
  addChapter(chapter) {
    return request({
      url: `/eduService/chapter/addChapter`,
      method: 'post',
      data: chapter
    })
  },
  getChapter(chapterId) {
    return request({
      url: `/eduService/chapter/getChapterInfo/${chapterId}`,
      method: 'get'
    })
  },
  updateChapter(chapter) {
    return request({
      url: `/eduService/chapter/updateChapter`,
      method: 'post',
      data: chapter
    })
  },
  deleteChapter(chapterId) {
    return request({
      url: `/eduService/chapter/${chapterId}`,
      method: 'delete'
    })
  },
}
