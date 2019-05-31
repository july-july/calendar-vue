<template>
    <div style="text-align: center">
        <p>{{monthNow}}</p>
        <div class="item">
            <!--<div>-->
            <!--<span v-for="day in days">{{day}}</span>-->
            <!--</div>-->
            <p class="days" v-for="square in monthBefore">{{square.format('D')}}</p>
            <p class="days" v-for="one in daysCount">{{one.format('D')}}</p>
            <p class="days" v-for="last in monthAfter">{{last.format('D')}}</p>
        </div>

        <button @click="prevMonth">Назад</button>
        <button @click="nextMonth">Вперед</button>

    </div>
</template>
<script>
    // import moment  from 'moment'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Calendar',
        data() {
            return {
                days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница",
                    "Суббота", "Воскресенье"],
                monthBefore: '',
                monthAfter: ''
            }
        },
        computed: {
            ...mapGetters({
                daysCount: 'getDaysCount',
                monthNow: 'getMonthNow',
                firstDay: 'getFirstDay',
                lastDay: 'getLastDay',
            }),
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
                this.monthAfter = monthAfterArray.slice(0, 7 - this.lastDay)
            }
        },
        mounted () {
            this.initFirstAndLastDay()
            this.countBeforeDays()
            this.countAfterDays()
        }

    }
</script>