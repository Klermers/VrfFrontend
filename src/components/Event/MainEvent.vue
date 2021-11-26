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
            src="@/assets/user.png"
            >
            </v-avatar>
            </div>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              class="col"
            >
            <h4 align="center" style="color: #FCFCFC;" >Klerm</h4>
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
          <h1  style="color: #FCFCFC;">Drinking night party</h1>
          <VueSlickCarousel>
             <v-card
            class="mx-auto"
            color="#04020C"
            outlined
            >
            <v-responsive :aspect-ratio="50/9">
            <v-img class="mx-auto" width="900px" src=@/assets/user.png></v-img>
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
            value="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
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
              <strong class="my-0 d-flex justify-center" >Drinking night</strong>
              </v-col>
              <v-col
              cols="12"
              sm="12"
              >
              <strong class="my-1 d-flex justify-center"   >Date Of Event:</strong>
              <strong class="my-1 d-flex justify-center" >20-04-2022</strong>
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