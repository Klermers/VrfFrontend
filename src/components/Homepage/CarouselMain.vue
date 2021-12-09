<template>
<v-carousel 
:show-arrows="false"
cycle
max="5"
v-model="model"
>
      <v-carousel-item
        v-for="event in getterevents.slice(0, 4)"
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
            ><v-img  :src="event.images.image"></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="align-self-start">
              <v-list-item-title class="title mb-1" v-html="event.titel"></v-list-item-title>
              <h4 class="title3" v-html="event.description"></h4>
            </v-list-item-content>      
          </v-list-item>
        </v-card>
        </router-link>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: 'CarouselMain',
    data(){
      return {

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