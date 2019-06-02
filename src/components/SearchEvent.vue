<template>
    <div>
        <span class="loop">🔍</span>
        <input type="text" v-model="search" placeholder="Событие, дата">
        <div class="search-result popup-event" v-if="search">
            <div class="overflow-auto">
                <div class="search-item " v-for="item in searchEvent">
                    <span class="title">{{item.name}}</span>
                    <span class="date">{{changeFormatMonth(item.date)}}</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import moment from 'moment'
    export default {
        name: 'SearchEvent',
        data () {
            return {
                search: ''
            }
        },
        computed: {
            ...mapGetters({
                events: 'getEvents'
            }),
            searchEvent () {
               return this.events.filter( (el) => {
                   return el.name.toLowerCase().includes(this.search.toLowerCase()) ||
                       el.date.includes(this.search) ||
                       el.person.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        methods : {
            changeFormatMonth (date) {
                return moment(date).locale('ru').format('D MMMM')
            },
        }
    }
</script>