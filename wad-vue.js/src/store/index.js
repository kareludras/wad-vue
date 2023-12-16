import Vuex from 'vuex';
import posts from '@/assets/data.json';

export default new Vuex.Store({
  state: {
    posts: posts
  },
  mutations: {
    likePost(state, idOfPost) {
      const post = state.posts.find(post => post.id === idOfPost);
      if (post) {
        post.likes++;
      }
    },
  },
  actions: {
    likePost({ commit }, idOfPost) {
      commit('likePost', idOfPost);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    }
  },
  getters: {
    getPosts: state => state.posts
  }
});