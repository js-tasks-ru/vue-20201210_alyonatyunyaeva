import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
      <div class="meetup-agenda">
        <p class="meetup-agenda__empty" v-if="!agenda.length">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
        <MeetupAgendaItem            
          v-for="agendaItem in agenda" 
          :agendaItem="agendaItem" 
          :key="agendaItem.id"
        />
      </div>
  `,

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      required: true, 
    }
  }
  
};



