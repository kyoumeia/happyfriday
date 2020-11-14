import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'

// 题目数据
import questions from '../datas/question.json'

const store = new Vuex.Store({
  state: {
    currentQuestion: 1,
    questions: questions.datas,
    score: 0
  },
  mutations,
  actions
})

export default store