<template>
<v-row>
  <v-col 
  class='main'
  cols="12"
  sm="12"
  >
      <carousel-main/>
  </v-col>
  <v-col 
  class='main2'
  cols="12"
  sm="12"
  >
    <h1 class="title">Populair events</h1>
   <CarouselMini/>
 </v-col>
</v-row>
</template>

<script>
import CarouselMain from './CarouselMain.vue';
import CarouselMini from './CarouselMini.vue'
export default {
  name: 'Homepage',

  components: {
    CarouselMain,
    CarouselMini
  },
  
};
</script>

<style scoped>
.main{
  padding-right: 15%;
  padding-left: 15%;
}

.main2{
  margin-top: 10%;
  padding-right: 5%;
  padding-left: 5%;
}
.title {
  color: #FFFFFF;
}

</style>