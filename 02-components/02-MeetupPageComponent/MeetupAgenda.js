import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div>
      <h3>Программа</h3>
      <div class="meetup-agenda">
        <p class="meetup-agenda__empty" v-if="!agenda?.length">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
        <div v-for="agendaItem in agenda">
          <MeetupAgendaItem :agendaItem="agendaItem"/>
        </div>
      </div>
    </div>
  `,

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
    }
  }
  
};



