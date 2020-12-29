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
      <MeetupCover :title="meetup.title"/>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <MeetupDescription :description="meetup.description"/>
            <MeetupAgenda :agenda="meetup.agenda"/>
          </div>
          <div class="meetup__aside">
            <ul class="info-list">
              <li>
                <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
              {{ meetup.organizer }}
              </li>
              <li>
                <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
              {{ meetup.place }}
              </li>
              <li>
                <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
                <time datetime="2020-02-31">{{ meetup.localDate }}</time>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>`,

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    // MeetupInfo
  },

  props: {
    meetup: {
      type: Object,

    }
  },

  computed: {
    imageUrl() {
      console.log('this.props.meetup.imageId', this.props.meetup.imageId);
      return this.props.meetup?.imageId ? getMeetupCoverLink(this.props.meetup) : '';
    },
    coverStyle() {
      return this.imageUrl ? {'--bg-url': `url('${this.imageUrl}')`} : {};
    },
  },
};
