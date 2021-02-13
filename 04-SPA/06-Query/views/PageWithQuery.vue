<template>
  <div class="container">
    <meetups-view 
      :view="view"
      :date="date"
      :participation="participation"
      :search="search"
      @update:view="handleUpdateView"
      @update:date="handleUpdateDate"
      @update:participation="handleUpdateParticipation"
      @update:search="handleUpdateSearch"
    />
  </div>
</template>

<script>
import MeetupsView from '../components/MeetupsView';

export default {
  name: 'PageWithQuery',
  components: { MeetupsView },
  data(){
    return {
    }
  },
  computed: {
    view(){
      return this.$route.query.view || 'list';
    },
    date(){
      return this.$route.query.date || 'all';
    },
    participation(){
      return this.$route.query.participation || 'all';
    },
    search(){
      return this.$route.query.search || `''`;
    },
  },
  methods: {
    handleUpdateView(value){
      this.routerReplacer('view', value)
    },
    handleUpdateDate(value){
      this.routerReplacer('date', value)
    },
    handleUpdateParticipation(value){
      this.routerReplacer('participation', value)
    },
    handleUpdateSearch(value){
      this.routerReplacer('search', value)
    },
    routerReplacer(param, value){
      const defaultValues = {
        view: 'list',
        date: 'all',
        participation: 'all',
        search:  '',
      };
      if (defaultValues[param] === value){
        const newQuery = { ...this.$route.query };
        delete newQuery[param];
        this.$router.replace( { query: newQuery });
        return;
      };
      this.$router.replace( { query: {
        ...this.$route.query,
        [param]: value,
      } });
    },
  }
};
</script>

<style scoped></style>
