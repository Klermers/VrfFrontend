<template>
<v-carousel 
:show-arrows="false"
v-model="model"
>
      <v-carousel-item
        v-for="event in events"
        :key="event.title"
      >
      <router-link to="/event">
        <v-card
          color="#04020C"
        >
          <v-list-item>
            <v-list-item-avatar
              tile
              height="450px"
              width="1200px"
            ><v-img  :src="event.img"></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="align-self-start">
              <v-list-item-title class="title mb-1" v-html="event.title"></v-list-item-title>
              <h4 class="title3" v-html="event.discription"></h4>
            </v-list-item-content>      
          </v-list-item>
        </v-card>
        </router-link>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
import image from "../../assets/user.jpg"
import image2 from "../../assets/nine.jpg"
import image3 from "../../assets/eight.jpg"
import image4 from "../../assets/vijf.jpg"
import image5 from "../../assets/seven.jpg"
export default {
    name: 'CarouselMain',
    data(){
      return {
        events: [
   
        {
          img:image,
          title: "Drinking night",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
                {
          img: image2,
          title: "Party Festivval ",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
        {
          img: image3,
          title: "Camping in the woods",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
        {
          img: image4,
          title: "Horror Mansion Escape",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },
        {
          img: image5,
          title: "Drwaing Contest",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "Drinking night",
          categorie: "Entertainment",
          displayname: "Klerm",
          imguser: '@/assets/user.png',
        },

      ],
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