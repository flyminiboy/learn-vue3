import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            count:6
        }
    },
    mutations:{
        add(state) {
            state.count++
        }
    }
})