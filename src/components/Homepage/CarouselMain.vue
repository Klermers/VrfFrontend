<template>
<VueSlickCarousel class="carousel3" v-bind="settings">
<router-link to="/event">
 <v-card
      class="event mx-auto"
      max-width="1600"
      max-height="800"
      color="#04020C"
      outlined
    >
      <v-list-item class="box" >
        <v-list-item-avatar
          tile
          height="700px"
          width="1400px"
          max-height="360px"
          max-width="1000px"
        ><v-img src=@/assets/user.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1">Friday Alcholics</v-list-item-title>
          <div class="title3" >If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking</div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
  </router-link>
  <router-link to="/event">
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
        ><v-img src=@/assets/vier.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1"></v-list-item-title>
          <div class="title3" ></div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
  </router-link>
  <router-link to="/event">
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
        ><v-img src=@/assets/drie.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1"></v-list-item-title>
          <div class="title3" ></div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
  </router-link>
  <router-link to="/event">
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
        ><v-img src=@/assets/twee.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1"></v-list-item-title>
          <div class="title3" ></div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
  </router-link>
  <router-link to="/event">
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
        ><v-img src=@/assets/een.png></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mb-1"></v-list-item-title>
          <div class="title3" ></div>
        </v-list-item-content>      
      </v-list-item>
    </v-card>
  </router-link>
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
          adaptiveHeight: true,
      
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