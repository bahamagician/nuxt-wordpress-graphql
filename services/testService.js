import {
  axios
} from '~/plugins/axios.js'

export const testService = {
  fetchPosts () {
    return axios.get('/posts')
  }
}
