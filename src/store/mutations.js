import { SCORE_INCREMENT, UPDATE_CURRENT_ANWSER } from './mutations-type'

const mutations = {
  [SCORE_INCREMENT](state) {
    state.score += 20
  },
  [UPDATE_CURRENT_ANWSER](state) {
    state.currentQuestion += 1
  },
}
export default mutations