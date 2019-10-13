import request from '@/helpers/request'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

export default {
  getBlogs({page = 1, userId, atHpage} = {page: 1}) {
    return request(URL.GET_LIST, 'GET', {page, userId, atHpage})
  },

  getHpageBlogs({page = 1} = {page: 1}) {
    return this.getBlogs({page, atHpage: true})
  },

  getBlogsByUserId(userId, {page = 1, atHpage} = {page: 1}) {
    return this.getBlogs({userId, page, atHpage})
  },

  getDetail({blogId}) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId))
  },

  updateBlog({blogId}, {title, content, description, atHpage}) {
    return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', {title, content, description, atHpage})
  },

  deleteBlog({blogId}) {
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  },

  createBlog({title = '', content = '', description = '', atHpage = false} = {
    title: '',
    content: '',
    description: '',
    atHpage: false
  }) {
    return request(URL.CREATE, 'POST', {title, content, description, atHpage})
  }

}
