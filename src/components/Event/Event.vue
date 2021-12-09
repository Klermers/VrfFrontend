<template>
<v-container class='main'>>
  <main-event v-bind:id="this.$route.params.id">
  </main-event>
</v-container>
</template>

<script>
import MainEvent from './MainEvent.vue';
export default {
  components: { MainEvent },
  name: 'Event',
  props:['id'],
};
</script>

<style scoped>
.main{
  padding-right: 10%;
  padding-left: 10%;
}
.title {
  color: #FFFFFF;
  font-size: 3rem;
}
</style>