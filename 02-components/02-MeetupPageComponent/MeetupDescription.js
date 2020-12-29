export const MeetupDescription = {
  template: `
    <div>
      <h3>Описание</h3>
      <p class="meetup-description">{{ description }}</p>
    </div>
  `,
  props: {
    description: {
      type: String
    }
  }
};
