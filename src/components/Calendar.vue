<template>
    <div class="calendar-body-inner">
        <div class="date-switch">
            <div class="switch prev" @click="prevMonth"></div>
            <span class="current-date">{{monthNow}}</span>
            <div class="switch next" @click="nextMonth"></div>

            <button class="btn btn-grey today-button" @click="todayDate">Сегодня</button>
        </div>
        <div class="calendar-items">
            <div class="item not-current-month" v-for="prev in monthBefore">
                <p class="day">{{prev.format('D, dd')}}</p>
                <p v-for="item in eventFilter(prev.format('YYYY-MM-DD'))">
                    <span class="event-name">{{ item.name}}</span>
                    <span class="event-persons">{{ item.person}}</span>
                </p>
            </div>

            <div class="item" v-for="(one, key) in daysCount"
                 :class="{'blue-background' : eventFilter(one.format('YYYY-MM-DD')).length}">

                <div class="subItem" v-if="eventFilter(one.format('YYYY-MM-DD')).length" :id="key"
                     @click="showInfo(key)"></div>

                <div class="subItem " v-else :id="key" @click="showInfo(key)"></div>

                <add-event-popup v-on:closeInfo="showInfo" :index="key" :day="one"></add-event-popup>
                <p class="day">{{one.format('D, dd')}}</p>

                <p v-for="item in eventFilter(one.format('YYYY-MM-DD'))">
                    <span class="event-name">{{ item.name}}</span>
                    <span class="event-persons">{{ item.person}}</span>
                    <edit-info v-on:closeInfo="showInfo"
                               :events="events"
                               :index="key" :event="item"></edit-info>
                </p>
            </div>


            <div class="item not-current-month" v-for="last in monthAfter">
                <p class="day">{{last.format('D, dd')}}</p>
                <p v-for="item in eventFilter(last.format('YYYY-MM-DD'))">
                    <span class="event-name">{{ item.name}}</span>
                    <span class="event-persons">{{ item.person}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import EditInfo from './EditInfo.vue'
    import AddEventPopup from './AddEventPopup.vue'
    import moment from 'moment'

    export default {
        name: 'Calendar',
        data() {
            return {
                days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница",
                    "Суббота", "Воскресенье"],
                monthBefore: '',
                monthAfter: '',
            }
        },
        components: {
            EditInfo, AddEventPopup
        },
        computed: {
            ...mapGetters({
                daysCount: 'getDaysCount',
                monthNow: 'getMonthNow',
                firstDay: 'getFirstDay',
                lastDay: 'getLastDay',
                events: 'getEvents'
            })

        },
        methods: {
            nextMonth() {
                this.$store.commit('nextDate', 1)
                this.initFirstAndLastDay()
                this.countBeforeDays()
                this.countAfterDays()

            },
            prevMonth() {
                this.$store.commit('prevDate', 1);
                this.initFirstAndLastDay()
                this.countBeforeDays()
                this.countAfterDays()
            },
            initFirstAndLastDay () {
                this.$store.commit('firstDay');
                this.$store.commit('lastDay');
            },
            countBeforeDays() {
                let firstDayBefore = this.$store.state.dateCtx;
                let monthBeforeCount = firstDayBefore.clone().subtract(1, 'month').startOf('month')
                let monthBeforeArray = [...Array(monthBeforeCount.daysInMonth())].map((_, i) => monthBeforeCount.clone().add(i, 'day'))
                this.monthBefore = monthBeforeArray.slice(monthBeforeArray.length - (this.firstDay - 1), monthBeforeArray.length)
            },
            countAfterDays() {
                let lastDayAfter = this.$store.state.dateCtx;
                let monthAfterCount = lastDayAfter.clone().add(1, 'month').startOf('month')
                let monthAfterArray = [...Array(monthAfterCount.daysInMonth())].map((_, i) => monthAfterCount.clone().add(i, 'day'))
                this.monthAfter = monthAfterArray.slice(0, 42 - lastDayAfter.daysInMonth() - (this.firstDay - 1) )

            },
            eventFilter (i) {
                return this.events.filter((el) => {
                    return el.date === i

                })

            },
            showInfo(key) {
               document.getElementById(key).classList.toggle('showInfo')
            },
            todayDate () {
                let today = moment().clone().locale('ru')
                this.$store.commit('today', today)
                this.initFirstAndLastDay()
                this.countBeforeDays()
                this.countAfterDays()

            },
        },
        mounted () {
            this.initFirstAndLastDay()
            this.countBeforeDays()
            this.countAfterDays()
        },
    }
</script>