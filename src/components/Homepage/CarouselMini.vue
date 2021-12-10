<template>
<v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
      
        <v-slide-item
          v-for="event in getterevents"
          :key="event.title"
          v-slot="{ active, toggle }"
        >
        <v-hover v-slot="{ hover }">
          <router-link :to="{name: 'event', params: {id: event.id}}">
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="390"
            width="400"
            @click="toggle"
          >
          <v-img height="100%"  :src="event.images.image">
              <v-expand-transition>
                <div
                v-if="hover"
                class=" d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
                style="height: 100%;"
              >
              <v-row>
                <v-col
                class="d-flex justify-center"
                cols="12"
                sm="12"
                >
                <h1 class="align-self-start"  v-html="event.titel"> </h1>
                </v-col>
                <v-col
                cols="12"
                sm="12"
                >
                <h5 class="align-self-start"  v-html="event.description"> </h5>
                </v-col>
              </v-row>
              </div>
              </v-expand-transition>
              </v-img>
          </v-card>
          </router-link>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
</template>

<script>
import image from "../../assets/user.jpg"
import image2 from "../../assets/nine.jpg"
import image3 from "../../assets/eight.jpg"
import image4 from "../../assets/vijf.jpg"
import image5 from "../../assets/seven.jpg"
export default {
    name: 'CarouselMini',
    data(){
      return {
        events: [
   
        {
          img:image,
          title: "Drinking night",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
                {
          img: image2,
          title: "Party Festivval ",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
        {
          img: image3,
          title: "Camping in the woods",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
        {
          img: image4,
          title: "Horror Mansion Escape",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
        {
          img: image5,
          title: "Drawing Contest",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },

      ],
      }
    },
        computed: {
      getterevents(){
        return this.$store.getters.allevents
      }
    },
    mounted(){
      this.$store.dispatch("GetEvents");
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