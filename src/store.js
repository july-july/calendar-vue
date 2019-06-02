import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const state = {
    dateCtx: moment().locale('ru'),
    firstDay: moment(),
    lastDay: moment(),
    event: [
        {
            name: 'Поездка в Москву',
            date: '2019-06-12',
            person: 'я',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            name: 'Поездка в Питер',
            date: '2019-06-14',
            person: 'я',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            name: 'Встреча с друзьями',
            date: '2019-06-18',
            person: 'я, друзья',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },

        {
            name: 'Генеральная уборка',
            date: '2019-07-01',
            person: 'я',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            name: 'Поездка в Москву',
            date: '2019-09-01',
            person: 'я',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            name: 'Поездка в Москва',
            date: '2019-08-01',
            person: 'я',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]
}

const mutations = {
    nextDate(state, payload) {
        state.dateCtx = state.dateCtx.clone().add(payload, 'month')
    },
    prevDate(state, payload) {
        state.dateCtx = state.dateCtx.clone().subtract(payload, 'month')
    },
    firstDay (state) {
        state.firstDay = state.dateCtx.clone().startOf('month');
    },
    lastDay (state) {
        state.lastDay = state.dateCtx.clone().endOf('month');
    },
    addEvent(state, payload) {
        state.event.push(payload)
    },
    today(state, payload) {
        state.dateCtx = payload
    }

}
const getters = {
    getDaysCount: (state) => [...Array(state.dateCtx.daysInMonth())]
        .map((_, i) =>
            state.firstDay.clone().add(i, 'day')),

    getMonthNow: state => state.dateCtx.format('MMMM YYYY').toString(),
    getFirstDay: state => state.firstDay.isoWeekday(),
    getLastDay: state => state.lastDay.isoWeekday(),
    getEvents: state => state.event
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})
