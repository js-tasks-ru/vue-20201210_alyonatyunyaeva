export const MeetupCover = {
  template: `
    <div class="meetup-cover" :style="coverStyle">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>    
  `,
    
  props: {
    title:{
      type: String
    },
    coverStyle:{
      type: Object
    }
  }
};

{/* <div class="meetup-cover" style="--bg-url: url('https://course-vue.javascript.ru/api/images/2')">
        <h1 class="meetup-cover__title">Название митапа</h1>
    </div> */}