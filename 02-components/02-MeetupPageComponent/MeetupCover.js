export const MeetupCover = {
  template: `
    <div class="meetup-cover" :style="coverStyle">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>
  `,
    
  props: {
    title: String,
    imageUrl: String
  },
  computed: {
    coverStyle() {
      return this.imageUrl ? {'--bg-url': `url('${this.imageUrl}')`} : {};
    },
  },
};
