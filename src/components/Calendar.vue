<template>
    <div style="text-align: center">
        <p>{{monthNow}}</p>
        <div class="item">
            <span class="week" v-for="day in days">{{day}}</span>
            <p class="days" v-for="one in daysCount">{{one}}</p>
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
                monthNow: 'getMonthNow'
            })
        },
        methods: {
            nextMonth() {
                this.$store.commit('nextDate', 1)
            },
            prevMonth() {
                this.$store.commit('prevDate', 1);
            }

        },
    }
</script>