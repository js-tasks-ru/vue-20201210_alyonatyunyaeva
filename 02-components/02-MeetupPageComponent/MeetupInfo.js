export const MeetupInfo = {
  template: `
    <div class="meetup__aside">
      <ul class="info-list">
        <li>
          <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
        </li>
        <li>
          <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
        </li>
        <li>
          <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
          <time>{{ localDate }}</time>
        </li>
      </ul>
    </div>
  `,

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  computed: {
    localDate () {
      const localDate = new Date(this.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      });
      return localDate;
    }
  },
};
