<template>
<v-container>
<h1 class="title">Create Event</h1>
<form-event/>
</v-container>
</template>

<script>
import FormEvent from './FormEvent.vue';
export default {
  components: { FormEvent },
  name: 'CreateEvent',
};
</script>

<style scoped>
.title {
  color: #FFFFFF;
}
</style>
