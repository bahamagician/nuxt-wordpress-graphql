import {
  testService
} from '~/services'

export const state = () => ({
  allPosts: []
})

export const getters = {
  posts: (state) => {
    return state.allPosts;
  }
}

export const mutations = {
  'FETCH_POSTS' (state, posts) {
    state.allPosts = posts;
  }
}

export const actions = {
  // fetchPosts ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //       testService.fetchPosts(payload)
  //       .then((response) => {
  //           commit('FETCH_POSTS', response.data)
  //           resolve(response.data);
  //       }, error => {
  //           reject(error);
  //       })
  //   })
  // },
  async fetchPosts ({commit}, payload) {
    const response = await testService.fetchPosts()
    commit('FETCH_POSTS', response.data)
    return response.data
  }
}