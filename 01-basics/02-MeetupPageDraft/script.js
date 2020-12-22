import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

const getDateOnlyString = (date) => {
  const YYYY = date.getUTCFullYear();
  const MM = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const DD = date.getUTCDate().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}`;
};

export const app = new Vue({
  el: '#app',

  data: {
    rawMeetup: null,
  },

  async mounted() {
    this.rawMeetup = await this.getRawMeetup();
  },

  computed: {
    convertedMeetup() {
      if (!this.rawMeetup){
        return {}
      }
      return {
        ...this.rawMeetup,
        date: new Date(this.rawMeetup.date),
        localDate: new Date(this.rawMeetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
        }),
        dateOnlyString: getDateOnlyString(new Date(this.rawMeetup.date)), 
        agenda: this.rawMeetup.agenda ? this.rawMeetup.agenda.map(
          (agendaItem) => {
            return {
              ...agendaItem,
              title: agendaItem.title ? agendaItem.title : agendaItemTitles[agendaItem.type],
              iconFileName: agendaItemIcons[agendaItem.type],
            };
          }) : [],
      }
    },
    imageUrl() {
      return this.rawMeetup?.imageId ? getMeetupCoverLink(this.rawMeetup) : '';
    },
    coverStyle() {
      return this.imageUrl ? {'--bg-url': `url('${this.imageUrl}')`}: {};
    },
  },

  methods: {
    async getRawMeetup() {
      const result = await fetch(`${API_URL}/meetups/${MEETUP_ID}`);
      return await result.json();
    },
  },
});
