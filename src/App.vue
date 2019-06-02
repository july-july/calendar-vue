<template>
  <div id="app">
    <div class="calendar-container">
      <div class="calendar-header">
        <div class="controls-container">
          <add-event></add-event>
          <update-calendar></update-calendar>
        </div>
       <div class="search-container">
        <search-component></search-component>
       </div>
      </div>
      <div class="calendar-body">
        <calendar></calendar>
      </div>
    </div>

  </div>
</template>
<script>
  import Calendar from './components/Calendar.vue'
  import AddEvent from './components/AddEvent.vue'
  import UpdateCalendar from './components/UpdateCalendar.vue'
  import SearchComponent from './components/SearchEvent.vue'
  export default {
      components: {
          Calendar, AddEvent,UpdateCalendar, SearchComponent
      }
  }

</script>
<style lang="scss" src="./assets/css/index.scss"></style>