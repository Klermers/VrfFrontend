<template>
<v-container style="margin-left: 250px;">
<forum-table/>
</v-container>
</template>

<script>
import ForumTable from './ForumTable.vue';
export default {
  components: { ForumTable },
  name: 'Events',
};
</script>
<style scoped>
</style>