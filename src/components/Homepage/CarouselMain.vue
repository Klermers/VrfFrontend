<template>
<VueSlickCarousel class="carousel">
 <v-card
      class="event mx-auto"
      max-width="1200"
      max-height="400"
      color="#04020C"
      outlined
    >
      <v-list-item class="box" >
        <v-list-item-avatar
          tile
          height="360px"
          width="830px"
          max-height="360px"
          max-width="830px"
        ><v-img src=@/assets/user.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1">Nike epic react</v-list-item-title>
          <div class="title3" >content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react v content for Nike epic react content for Nike epic react v content for Nike epic react</div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
 <v-card
      class="event mx-auto"
      max-width="1200"
      max-height="400"
      color="#04020C"
      outlined
    >
      <v-list-item>
        <v-list-item-avatar
          tile
          height="360px"
          width="830px"
          max-height="360px"
          max-width="830px"
        ><v-img src=@/assets/user.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1">Nike epic react</v-list-item-title>
          <div class="title3" >content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react v content for Nike epic react content for Nike epic react v content for Nike epic react</div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
     <v-card
      class="event mx-auto"
      max-width="1200"
      max-height="400"
      color="#04020C"
      outlined
    >
      <v-list-item>
        <v-list-item-avatar
          tile
          height="360px"
          width="830px"
          max-height="360px"
          max-width="830px"
        ><v-img src=@/assets/user.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1">Nike epic react</v-list-item-title>
          <div class="title3" >content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react v content for Nike epic react content for Nike epic react v content for Nike epic react</div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
     <v-card
      class="event mx-auto"
      max-width="1200"
      max-height="400"
      color="#04020C"
      outlined
    >
      <v-list-item>
        <v-list-item-avatar
          tile
          height="360px"
          width="830px"
          max-height="360px"
          max-width="830px"
        ><v-img src=@/assets/user.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1">Nike epic react</v-list-item-title>
          <div class="title3" >content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react content for Nike epic react v content for Nike epic react content for Nike epic react v content for Nike epic react</div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
    </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'CarouselMain',
    components: { VueSlickCarousel },
    data(){
      return {
        settings: {
          arrows: true,
          dots: true,
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
.slide{
  padding-top: 2%;
  height: 400px;
}
.event{
  margin-top: 2%;

}
.title{
  color: #FFFFFF;
}
.title3{
  color: #FFFFFF;
}
.box {
  max-height: 400px;
  overflow-y: auto;

}
</style>