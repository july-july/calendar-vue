<template>
    <div style="text-align: center">
        <p>{{monthNow}}</p>
        <div class="item">
            <!--<div>-->
                <!--<span v-for="day in days">{{day}}</span>-->
            <!--</div>-->
            <p class="days" v-for="square in firstDay-1"></p>
            <p class="days" v-for="one in daysCount">{{one.format('D')}}</p>
            <p class="days" v-for="last in 7-lastDay"></p>
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
                    "Суббота", "Воскресенье"]
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
                this.blankSquares()

            },
            prevMonth() {
                this.$store.commit('prevDate', 1);
                this.blankSquares()
            },
            blankSquares () {
                this.$store.commit('firstDay', 1);
            }
        },
        mounted () {
            this.blankSquares()
        }

    }
</script>