<template>
<VueSlickCarousel v-bind="settings" class="carousel">
    <div class="size">
        <v-img src=@/assets/user.png>
            <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text" style="height: 100%;"> $14.99 </div>
            </v-expand-transition>
        </v-img>
    </div>
    <div class="size">
        <v-img  src=@/assets/user.png></v-img>
    </div>
    <div class="size">
        <v-img  src=@/assets/user.png></v-img>
    </div>
   <div class="size">
        <v-img  src=@/assets/user.png></v-img>
    </div>
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
          dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            touchThreshold: 5
        },
      }
    }
};
</script>


<style scoped>
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