<template>
<div>
  <div class='main'>
      <carousel-main/>
  </div>
  <div class='main2'>
    <h1 class="title">Populair events</h1>
   <CarouselMini/>
 </div>
</div>
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
  padding-left: 20%;
}

.main2{
  padding-right: 5%;
  padding-left: 5%;
}
.title {
  color: #FFFFFF;
}

</style>