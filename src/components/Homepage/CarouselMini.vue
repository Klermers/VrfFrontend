<template>
<VueSlickCarousel v-bind="settings" class="carousel">
    <v-card
      max-width="450"
      max-height="200"
    >
        <v-img  src=@/assets/user.png></v-img>
    </v-card>
    <v-card
      max-width="450"
      max-height="200"
    >
<v-img style="outline: none;width: 620px;"  src=@/assets/user.png></v-img>
    </v-card>
    <v-card
      max-width="450"
      max-height="200"
    >
        <v-img  src=@/assets/user.png></v-img>
    </v-card>
    <v-card
      max-width="450"
      max-height="200"
    >
        <v-img  src=@/assets/user.png></v-img>
    </v-card>
</VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'CarouselMini',
    components: { VueSlickCarousel },
    data(){
      return {
        settings: {
          arrows: true,
          dots: false,
            infinite: false,
            slidesToShow: 3,
        },
      }
    }
};
</script>


<style scoped>
.carousel{
  height: 300px;
}
.slick-track
{
    display: flex !important;
}
.slick-slide
{
    height: 100px;
}
.size{
    max-height: 400px;
    height: 300px;
    padding: 20px
}
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>

<style>
.slick-list{
    height: 110%;
}
.slick-slide.slick {
  width: 10;
}
</style>