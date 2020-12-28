export const CounterButton = {
  template: `<button 
                type="button"
                :count="count"
                @click="handleClick(count)"
                >{{ count }}</button>`,
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  model: {
    prop: 'count',
    event: 'increment',
  },
  methods: {
    handleClick(count){
      console.log('clicked', count);
      this.$emit('increment', ++count);
      
    }
  }
};
