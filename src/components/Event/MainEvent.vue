<template>
    <v-form style="background: #0B061E;">
             <v-row>
          <v-col
            cols="12"
            sm="1"
          >
          <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
            <div align="center">
            <v-avatar
          
            size="60"
            >
            <img
            :src="getterevent.users.image.image"
            >
            </v-avatar>
            </div>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              class="col"
            >
            <h4 align="center" style="color: #FCFCFC;" >{{getterevent.users.displayname}}</h4>
            </v-col>
          </v-row>
          </v-container>
        
          </v-col>
          <v-col
            cols="12"
            sm="8"
          >
          <v-row 
          >
          <v-col
          class="justify-center"
          cols="12"
            sm="12">
          <h1  style="color: #FCFCFC;">{{getterevent.titel}}</h1>
          <VueSlickCarousel>
             <v-card
            class="mx-auto"
            color="#04020C"
            outlined
            >
            <v-responsive :aspect-ratio="50/9">
            <v-img class="mx-auto" width="900px" :src="getterevent.images.image"></v-img>
            </v-responsive>
            </v-card>
          </VueSlickCarousel>
          </v-col>
          <v-col
          class="d-flex justify-center"
          cols="12"
          sm="12"
          >
          <v-textarea
            disabled 
            auto-grow
            name="input-7-4"
            :value="getterevent.description"
            rows="8"
            row-height="40"
            style="background-color:#BFBFBF"
          ></v-textarea>
          </v-col>
         </v-row>
          </v-col>
          <v-col
            cols="12"
            sm="3"
          >
          <v-card
           class="mx-auto my-12"
            justify="center"
            color="#04020C"
            outlined
            >
            <v-card-title  class="justify-center" style="color: #FCFCFC;">Info</v-card-title>
            <row  style="color: #FCFCFC;">
              <v-col
              cols="12"
              sm="12"
              >
              <strong  class="my-1 d-flex justify-center"  >World:</strong>
              <strong class="my-0 d-flex justify-center" >{{getterevent.worlds.world}}</strong>
              </v-col>
              <v-col
              cols="12"
              sm="12"
              >
              <strong class="my-1 d-flex justify-center"   >Date Of Event:</strong>
              <strong class="my-1 d-flex justify-center" >{{getterevent.date}}</strong>
              </v-col>
                            <v-col
              cols="12"
              sm="12"
              >
              <strong class="my-1 d-flex justify-center"  >Participants:</strong>
              <strong class="my-1 d-flex justify-center" >10/50</strong>
              </v-col>
            </row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="1"
          >
          </v-col>
          <v-col
            cols="12"
            sm="8"
          >
          <h1  style="color: #FCFCFC;">Participants</h1>
            <VueSlickCarousel v-bind="settings2" class="carousel">
              <v-card
                class="card"
                max-width="300"
              >
                <v-img
                class="white--text align-end"
                height="150px"
                src="@/assets/user.png"
                >
                <v-card-title>Klerm</v-card-title>
                </v-img>
              </v-card>
                            <v-card
                class="card"
                max-width="300"
              >
                <v-img
                class="white--text align-end"
                height="150px"
                src="@/assets/user.png"
                >
                <v-card-title>Klerm</v-card-title>
                </v-img>
              </v-card>
                            <v-card
                class="card"
                max-width="300"
              >
                <v-img
                class="white--text align-end"
                height="150px"
                src="@/assets/user.png"
                >
                <v-card-title>Klerm</v-card-title>
                </v-img>
              </v-card>
            </VueSlickCarousel>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
          </v-col>
        </v-row>
    </v-form>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MainEvent',
  components: { VueSlickCarousel },
    props:['id'],
    data(){
      return {
        settings: {
          arrows: true,
          dots: true,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 10000
        },
        settings2: {
          arrows: true,
          dots: false,
          infinite: false,
          slidesToShow: 3,
        }
      }
    },
  computed: {
  getterevent(){
    console.log()
      return this.$store.getters.event
  }
  },
  mounted(){
      this.$store.dispatch("GetEvent",this.id);
  }
    
};
</script>
<style scoped>
.col{
  padding-top: 0%;
}
.info{
  padding-right: 30px;
}
</style>