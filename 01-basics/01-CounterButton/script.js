import Vue from './vue.esm.browser.js';

const app = new Vue ({
    el: '#app',
    data: {
        currentNum: 0,
    },
    methods: {
        addPlusOne () {
            return this.currentNum += 1;
        },
    }
})
// Рекомендуется использовать МЕТОД в качестве обработчика события
