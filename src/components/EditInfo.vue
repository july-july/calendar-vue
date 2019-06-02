<template>
    <div class="popup-event info-event">
        <span class="close" @click="closeInfo(index)">✕</span>
        <div v-if="isEditing">
            <p class="info-date">{{changeFormatMouth(event.date)}}</p>
            <input type="text" v-model="editedEvent.name" placeholder="Событие">
            <input type="text" v-model="editedEvent.person" placeholder="Имена участников">
            <textarea v-model="editedEvent.description" placeholder="Описание" cols="30" rows="10"></textarea>
            <button class="btn btn-grey" :class="{disabled : !editedEvent.name}" @click="editEvent(index)">Изменить</button>
        </div>
        <div v-else>
            <p class="info-date">{{changeFormatMouth(event.date)}}</p>
            <p class="info-name">{{event.name}}</p>
            <p>
                <span>Участники:</span>
                <span class="info-person">{{event.person}}</span></p>
            <p class="info-description">{{event.description}}</p>
            <button class="btn btn-grey" @click="isEditing = !isEditing">Изменить</button>
            <button class="btn btn-grey" @click="removeEvent(event)">Удалить</button>
        </div>

    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'EditEvent',
        data () {
            return {
                isEditing: false,
                editedEvent: {
                    name: this.event.name,
                    person: this.event.person,
                    description: this.event.description
                },
            }
        },
        props: ['index', 'event', 'events'],
        methods: {
            changeFormatMouth (date) {
                return moment(date).locale('ru').format('D MMMM')
            },
            closeInfo(key) {
                this.$emit('closeInfo', key)
                this.isEditing = false
            },
            editEvent (i) {
                this.event.name = this.editedEvent.name
                this.event.person = this.editedEvent.person
                this.event.description = this.editedEvent.description
                this.closeInfo(i)
            },
            removeEvent (el) {
                let index = this.events.indexOf(el)
                this.events.splice(index, 1);
            }
        }
    }
</script>