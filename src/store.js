import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const state = {
    dateCtx: moment(),
}

const mutations = {
    nextDate(state, payload) {
        state.dateCtx = state.dateCtx.clone().add(payload, 'month')
    },
    prevDate(state, payload) {
        state.dateCtx = state.dateCtx.clone().subtract(payload, 'month')
    },

}

const getters = {
    getDaysCount: (state) => state.dateCtx.daysInMonth(),
    getMonthNow: state => state.dateCtx.format('MMMM YYYY').toString(),
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})
