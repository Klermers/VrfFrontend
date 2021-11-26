<script src="http://localhost:8098"></script>
<template>
  <v-app id='app' style="background: #140D2F;">
    <nav-bar></nav-bar>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
};
</script>
