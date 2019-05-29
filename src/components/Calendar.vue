<template>
    <div style="text-align: center">
        <p>{{monthNow}}</p>
        <p>{{yearNow}}</p>
        <div class="item">
            <span class="week" v-for="day in days"></span>
            <p class="days" v-for="one in daysCount">{{one}}</p>
        </div>

        <button @click="nextMonth">Назад</button>
        <button>Вперед</button>

    </div>
</template>
<script>
    import moment  from 'moment'
    export default {
        name: 'Calendar',
        data () {
            return {
                days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница",
                    "Суббота", "Воскресенье"],
                today:''
            }
        },
        methods: {
            moment() {
                return moment().locale('ru');
            },
            nextMonth() {

                    this.moment = this.moment(this.moment()).add(1, 'month');
                console.log(this.moment)
            }
        },
        computed: {
            daysCount () {
                return this.moment().daysInMonth()
            },
            monthNow () {
                return this.moment().format('MMMM')
            },
            yearNow () {
                return this.moment().format('YYYY')
            }
        },
    }
</script>