export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="toPrevMonth"></button>
          <div>{{ dateStringify }}</div>
          <button class="rangepicker__selector-control-right" @click="toNextMonth"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div class="rangepicker__cell" v-bind:class="{ rangepicker__cell_inactive: day.isInactive }" v-for="day in daysArray">
          {{ day.dayNum }}
          <a v-if="day.todaysMeetups" v-for="meetup in day.todaysMeetups" :href="'/meetups/'+meetup.id" class="rangepicker__event">{{ meetup.title }}</a>
        </div>
      </div>
    </div>
  </div>`,

  props: {
    meetups: {
      type: Array,
      required: true,
    }
  },

  data() {
    return{
      date: new Date(),
    }
  },

  computed: {
    currentMonth(){
      return this.date.getMonth()
    },
    currentFullYear(){
      return this.date.getFullYear()
    },
    dateStringify(){
      return this.date.toLocaleString(navigator.language, {year: 'numeric', month: 'long',});
    },
    daysArray(){
      let currentDate;
      let prevDays;
      let nextDays;
      let firstDay = new Date(this.currentFullYear, this.currentMonth, 1).getDay();
      let lastDay = new Date(this.currentFullYear, this.currentMonth+1, 0).getDay();
      let daysArray = [];
      let todaysMeetups = [];
      
      firstDay === 0 ? prevDays = 6 : prevDays = firstDay - 1;
      lastDay === 0 ? nextDays = 0 : nextDays = 7 - lastDay;

      let i = 1 - prevDays; 
      let total = prevDays + (new Date(this.currentFullYear, this.currentMonth+1, 0).getDate()) + nextDays;

      while (daysArray.length < total) {
        currentDate = new Date(this.currentFullYear, this.currentMonth, i);
        todaysMeetups = this.meetups.filter((meetup)=>{
          let meetupDateStr = new Date(meetup.date).toLocaleString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric'});
          let currentDateStr = currentDate.toLocaleString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric'});
          return meetupDateStr === currentDateStr;
        });
        daysArray.push({
          dayDate: currentDate,
          dayNum: currentDate.getDate(),
          isInactive: (daysArray.length < prevDays) || (daysArray.length >= (total - nextDays)),
          todaysMeetups: todaysMeetups.length ? todaysMeetups : null,
        }
        );
        i++;
      }
      return daysArray;
    }
  },

  methods: {
    toPrevMonth(){
      this.date = new Date(this.currentFullYear, this.currentMonth-1);
    },
    toNextMonth(){
      this.date = new Date(this.currentFullYear, this.currentMonth+1);
    },
  }
};
