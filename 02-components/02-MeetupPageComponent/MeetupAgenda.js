import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div>
      <h3>Программа</h3>
      <div class="meetup-agenda">
        <p class="meetup-agenda__empty" v-if="!agenda?.length">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
        <MeetupAgendaItem 
          class="meetup-agenda__item" 
          v-for="agendaItem in agenda" 
          :agendaItem="agendaItem" 
          :key="agendaItem.id"
        />
      </div>
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



