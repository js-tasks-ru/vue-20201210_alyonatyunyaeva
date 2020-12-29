import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div>
    <MeetupView v-if="meetup" :meetup="meetup"/>
  </div>`,

  components: {
    MeetupView,
  },

  data: {
    meetup: null,
  },

  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID);
  },

  computed: {
    // convertedMeetup() {
    //   if (!this.rawMeetup){
    //     return {}
    //   }
    //   return {
    //     ...this.rawMeetup,
    //     date: new Date(this.rawMeetup.date),
    //     localDate: new Date(this.rawMeetup.date).toLocaleString(navigator.language, {
    //       year: 'numeric',
    //       month: 'long',
    //       day: 'numeric',
    //       timezone: 'UTC',
    //       hour: 'numeric',
    //       minute: 'numeric',
    //     }),
    //     dateOnlyString: getDateOnlyString(new Date(this.rawMeetup.date)), 
    //     agenda: this.rawMeetup?.agenda ? this.rawMeetup.agenda.map(
    //       (agendaItem) => {
    //         return {
    //           ...agendaItem,
    //           title: agendaItem.title ? agendaItem.title : agendaItemTitles[agendaItem.type],
    //           iconFileName: agendaItemIcons[agendaItem.type],
    //         };
    //       }) : [],
    //   }
    // },
    // imageUrl() {
    //   return this.rawMeetup?.imageId ? getMeetupCoverLink(this.rawMeetup) : '';
    // },
    // coverStyle() {
    //   return this.imageUrl ? {'--bg-url': `url('${this.imageUrl}')`}: {};
    // },
  },
};
