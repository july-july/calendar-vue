<template>
  <div id="app">
    <add-event></add-event>
  <calendar></calendar>
  </div>
</template>
<script>
  import Calendar from './components/Calendar.vue'
  import AddEvent from './components/AddEvent.vue'
  export default {
      components: {
          Calendar, AddEvent
      }
  }

</script>
<style lang="scss" src="./assets/css/index.scss"></style>
