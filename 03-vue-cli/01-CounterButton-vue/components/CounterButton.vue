<template>
    <button 
            type="button"                
            @click="handleClick(count)"
    >{{ count }}</button>
</template>

<script>
    export default {
        name: 'CounterButton',

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
</script>

<style></style>
