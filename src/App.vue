<template>
  <v-app id='app' style="background: #140D2F;">
    <nav-bar></nav-bar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
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
