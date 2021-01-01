export const MeetupDescription = {
  // <h3>Описание</h3>
  template: `
    <div>
      <p class="meetup-description">{{ description }}</p>
    </div>
  `,
  props: {
    description: String
  }
};
