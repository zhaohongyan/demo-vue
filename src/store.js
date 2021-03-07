import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, INCREMENT_ASYNC } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    asyncCount: 0,
    todos: [
      { id: 1, text: 'text1', done: true },
      { id: 2, text: 'text2', done: false }
    ]
  },
  //Mutation 必须是同步函数
  mutations: {
    // increment(state) {
    //   state.count++
    // },
    [INCREMENT](state, payload) {
      state.count += payload.amount
    },
    [INCREMENT_ASYNC](state, payload) {
      state.asyncCount += payload.amount
    },
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  actions: {
    // increment(context) {
    //   context.commit('increment')
    // },
    [INCREMENT]({ commit }) {
      commit(INCREMENT)
    },
    [INCREMENT_ASYNC]({ commit, state }, payload) {
      console.log(commit, state)
      setTimeout(() => {
        commit(INCREMENT_ASYNC, payload)
      }, 1000)
    },
    // async actionA({ commit }) {
    //   commit('gotData', await getData())
    // },
    // async actionB({ dispatch, commit }) {
    //   await dispatch('actionA') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  },

})

export default store;