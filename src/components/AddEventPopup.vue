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
                    date: '',
                    person: '',
                    description : ''
                }
            }
        },
        props: ['day', 'index'],
        methods: {
            addNewEvent (i) {
                //Я знаю, что это похоже(если не есть) костыль. Но MomentJS не оставил мне выбора :(
                let newEvent = {
                    name: this.event.name,
                    date: this.day.format('YYYY-MM-DD'),
                    person: this.event.person,
                    description : this.event.description
                }
                this.$store.commit('addEvent', newEvent)
                this.closeInfo(i)
            },
            closeInfo(i) {
                this.$emit('closeInfo', i);
            },
            stopCreatingEvent (i) {
                this.closeInfo(i)
                this.event = {
                    name: '',
                    date: '',
                    person: '',
                    description: ''
                }
            }
        }
    }
</script>