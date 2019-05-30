import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const state = {
    dateCtx: moment().locale('ru'),
    firstDay: moment(),
    lastDay: moment()
}

const mutations = {
    nextDate(state, payload) {
        state.dateCtx = state.dateCtx.clone().add(payload, 'month')
    },
    prevDate(state, payload) {
        state.dateCtx = state.dateCtx.clone().subtract(payload, 'month')
    },
    firstDay (state) {
            state.firstDay= state.dateCtx.startOf('month');
    },
    lastDay (state) {
        state.lastDay = state.dateCtx.endOf('month');
    }

}

//getters отдает информацию из state, принимает параметры, при этом мы можем выбрать именно то свойство какое нужно

const getters = {
    getDaysCount: (state) => [...Array(state.firstDay.daysInMonth())].map((_, i) => state.firstDay.clone().add(i, 'day')),
    getMonthNow: state => state.dateCtx.format('MMMM YYYY').toString(),
    getFirstDay: state => state.firstDay.isoWeekday(),
    getLastDay: state => state.lastDay.isoWeekday()
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})
