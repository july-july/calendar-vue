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
            description: 'смслдлд  зщпкповджа  кеквдевжд зплпэжвадплажд лдлпжвадл ждлэж плапжал ждалпаж плвжплвжд лпжвалждвлп яжлрэжрлаэж леэж'
        },
        {
            name: 'Поездка в Москву',
            date: '2019-05-31',
            person: 'я',
            description: 'описние'
        },
        {
            name: 'Поездка в Москву',
            date: '2019-09-01',
            person: 'я',
            description: 'описние'
        },
        {
            name: 'Поездка в Москва',
            date: '2019-08-01',
            person: 'я',
            description: 'описние'
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

//getters отдает информацию из state, принимает параметры, при этом мы можем выбрать именно то свойство какое нужно

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
