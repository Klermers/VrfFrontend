<template>
<v-container style="margin-left: 250px;">
  <form-event/>
</v-container>
</template>

<script>
import FormEvent from './FormEvent.vue';
export default {
  components: { FormEvent },
  name: 'Event',
};
</script>