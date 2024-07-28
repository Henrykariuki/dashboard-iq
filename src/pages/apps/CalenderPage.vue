<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const calendarOptions = ref({
  plugins: [dayGridPlugin, timeGridPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  events: [
    {
      title: 'Event 1',
      start: '2024-07-01'
    },
    {
      title: 'Event 2',
      start: '2024-07-07',
      end: '2024-07-10'
    },
    {
      title: 'Event 3',
      start: '2024-07-09T12:30:00',
      allDay: false // will make the time show
    }
  ]
});
</script>
<template>
  <div class="px-8 pb-8">
    <div class="bg-white rounded-md ">
        <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

