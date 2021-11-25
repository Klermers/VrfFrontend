<template>
<VueSlickCarousel class="carousel3" v-bind="settings">
 <v-card
      class="event mx-auto"
      max-width="1600"
      max-height="500"
      color="#04020C"
      outlined
    >
      <v-list-item class="box" >
        <v-list-item-avatar
          tile
          height="450px"
          width="1400px"
          max-height="360px"
          max-width="1000px"
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
      max-width="1600"
      max-height="500"
      color="#04020C"
      outlined
    >
      <v-list-item class="box" >
        <v-list-item-avatar
          tile
          height="450px"
          width="1400px"
          max-height="360px"
          max-width="1000px"
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
      max-width="1600"
      max-height="500"
      color="#04020C"
      outlined
    >
      <v-list-item class="box" >
        <v-list-item-avatar
          tile
          height="450px"
          width="1400px"
          max-height="360px"
          max-width="1000px"
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
      max-width="1600"
      max-height="500"
      color="#04020C"
      outlined
    >
      <v-list-item class="box" >
        <v-list-item-avatar
          tile
          height="450px"
          width="1400px"
          max-height="360px"
          max-width="1000px"
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
          arrows: false,
          dots: true,
          adaptiveHeight: true
        },
      }
    }
};
</script>

<style>
.carousel3{
  height: 400px;
}
.slick-dots li.slick-active button:before{
  opacity: 0.75;
  color: #FFFFFF;
}
.slick-dots li button:before{
  opacity: 0.25;
    color: #FFFFFF;
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
</style>

<style scoped>
.box {
  max-height: 400px;
  overflow-y: auto;
}
</style>