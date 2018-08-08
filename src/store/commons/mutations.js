
import {
    CHANGE_USER_STATE,
    CHANGE_USER_INFO
} from './const'
const mutations = {
    [CHANGE_USER_STATE](state, payload) {
        state.user_state = payload.user_state
        console.log(state.user_state)
    },
    [CHANGE_USER_INFO](state, payload) {
        state.user_info = payload.user_info
    }
}

export default mutations