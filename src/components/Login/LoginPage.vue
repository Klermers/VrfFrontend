<template>
<v-container fluid fill-height>
<login-form/>
</v-container>
</template>

<script>
import LoginForm from "./LoginForm.vue"
export default {
  components: { LoginForm },
  name: 'LoginPage',
};
</script>

<style scoped>
.title {
  color: #FFFFFF;
}
</style>