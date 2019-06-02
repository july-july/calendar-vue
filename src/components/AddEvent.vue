<template>
    <div>
        <button class="btn" @click="isAdding = !isAdding" :style="{'background: #1768a9' : isAdding}">Добавить
        </button>
        <div class="popup-event" :class="{'isShow' :isAdding }">
            <span class="close" @click="isAdding= false">✕</span>
            <input type="text" v-model="event.name" placeholder="Событие">
            <input type="date" v-model="event.date" placeholder="День, месяц, год">
            <input type="text" v-model="event.person" placeholder="Имена участников">
            <textarea v-model="event.description" placeholder="Описание" cols="30" rows="10"></textarea>
            <button class="btn btn-grey" :class="{disabled : !event.name && !event.date}" @click="addEvent">Добавить
            </button>
        </div>


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
                },
                isAdding: false,
            }
        },
        methods: {
            addEvent () {
                this.$store.commit('addEvent', this.event)
                this.isAdding = false;
                this.event = {
                    name: '',
                    date: '',
                    person: '',
                    description: ''
                }
            },
        },
    }
</script>