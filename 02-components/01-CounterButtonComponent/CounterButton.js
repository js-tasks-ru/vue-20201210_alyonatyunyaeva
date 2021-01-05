export const CounterButton = {
  template: `<button 
                type="button"                
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
      this.$emit('increment', count+1);
      
    }
  }
};
