import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',
  //:coverStyle="coverStyle"
  template: `
    <div>
      <MeetupCover 
        :title="meetup.title"
        :imageUrl="imageUrl"
      />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <MeetupDescription :description="meetup.description"/>
            <MeetupAgenda :agenda="meetup.agenda"/>
          </div>
          <MeetupInfo 
            :organizer="meetup.organizer"
            :place="meetup.place"
            :date="date"
          />
        </div>
    </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo
  },

  props: {
    meetup: {
      type: Object,
    }
  },

  computed: {
    imageUrl() {
      return this.meetup?.imageId ? getMeetupCoverLink(this.meetup) : '';
    },
    date(){
      return new Date(this.meetup.date);
    }
  },
};