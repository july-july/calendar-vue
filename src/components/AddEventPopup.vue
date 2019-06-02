<template>
    <div class="popup-event info-event">
        <div>
            <p class="info-date">{{day.format('D MMMM')}}</p>
            <input type="text" v-model="event.name" placeholder="Событие">
            <input type="text" v-model="event.person" placeholder="Имена участников">
            <textarea v-model="event.description" placeholder="Описание" cols="30" rows="10"></textarea>
            <button class="btn btn-grey" :class="{disabled : !event.name}" @click="addNewEvent(index)">Готово
            </button>
            <button class="btn btn-grey" @click="stopCreatingEvent(index)">Удалить
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AddEventPopup',
        data () {
            return {
                event : {
                    name: '',
                    date: this.day.format('YYYY-MM-DD'),
                    person: '',
                    description : ''
                }
            }
        },
        props: ['day', 'index'],
        methods: {
            addNewEvent (i) {
                this.$store.commit('addEvent', this.event)
                console.log(this.event, 'new event')
                this.closeInfo(i)
            },
            closeInfo(i) {
                this.$emit('closeInfo', i);
            },
            stopCreatingEvent (i) {
                this.closeInfo(i)
                this.event = {
                    name: '',
                    date: this.day.format('YYYY-MM-DD'),
                    person: '',
                    description: ''
                }
            }
        }
    }
</script>