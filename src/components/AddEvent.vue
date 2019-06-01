<template>
    <div style="text-align: center">
       <p> <input type="text" v-model="event.name"></p>
       <p><input type="date"  v-model="event.date"></p>
        <p><input type="text"  v-model="event.person"></p>
        <p> <textarea v-model="event.description" name="" id="" cols="30" rows="10"></textarea></p>
        <button @click="addEvent">Добавить</button>

    </div>
</template>
<script>
    export default {
        name: 'AddEvent',
        data () {
            return {
                event: {
                    name: '',
                    date: '',
                    person: '',
                    description: ''
                }
            }
        },
        methods: {
            addEvent () {
                this.$store.commit('addEvent', this.event)
            }
        }
    }
</script>