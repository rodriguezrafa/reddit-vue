import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    localList: {},
    postList:{},
    postDetail: {}
  },
  mutations: {
    SET_POSTS_LIST: function(state, payload) {
      state.postList = payload;
    },
    CHANGE_POST: function(state, payload) {
      state.postDetail = payload;
    },
    DISMISS_POST: function(state, payload) {
      state.postList.splice(payload, 1);
    },
    DISMISS_ALL: function(state) {
      state.postList = [];
    }
  },
  actions: {
    getPosts: async function({commit, state}, payload) {

      const localStoraList =  JSON.parse(window.localStorage.getItem('reddit_postslist'));
      let newPayload = null;
      if (localStoraList &&localStoraList.length === payload.data.children.length) {
        newPayload = localStoraList;

      } else {
        newPayload =  payload.data.children;
      }
      commit('SET_POSTS_LIST', newPayload);
    },
    displayPost: async function({state, commit}, payload) {
      const postToDiplay = state.postList[payload].data;
      commit('CHANGE_POST', postToDiplay);
      if (!postToDiplay.clicked) {
        state.postList[payload].data.clicked = true;
        window.localStorage.setItem('reddit_postslist', JSON.stringify(state.postList));
      }
    },
    dismissPost: function({commit}, payload) {
      commit('DISMISS_POST', payload);
    },
    dismissAll: function({commit}) {
      commit('DISMISS_ALL');
    } 
  }
});
