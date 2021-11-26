<template>
<v-container class="container">
<v-data-iterator
        :items="events"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
<v-card
      max-width="100%"
      class="mx-auto"
    >
          <v-toolbar
            dark
            color="#05020D"
            class="mb-1"
          >
            <template>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="worlds"
                item-text="world"
                label="World"
              ></v-select>
              <v-spacer></v-spacer>
                <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="categories"
                item-text="categorie"
                label="Category"
              ></v-select>
              <v-spacer></v-spacer>
                              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                label="Date Event"
              ></v-select>
              <v-spacer></v-spacer>
                              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                label="Created"
              ></v-select>
              <v-spacer></v-spacer>
                              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                label="Views"
              ></v-select>
              <v-spacer></v-spacer>
            </template>
          </v-toolbar>
  
      <v-list three-line>
        <div v-for="item in events" :key="item.message">
          <router-link to="/event">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>
  
          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>
          <v-list-item
          color="#05020D"
            :key="item.title"
          >
            <v-list-item-avatar
              tile
              width="30%"
              size ="120"
                                >
              <v-img :src="item.img"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content class="align-self-start">
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.discription"></v-list-item-subtitle>
            </v-list-item-content>
              <v-list-item-content class="align-self-start">
              <v-list-item-title v-html="item.world"></v-list-item-title>
              <v-list-item-title v-html="item.categorie"></v-list-item-title>
            </v-list-item-content>
              <v-list-item-content>
              <v-row
              align="center"
              >
              <v-col
                cols="3"
                sm="6"
                >
                </v-col>
                <v-col
                cols="3"
                sm="3"
                >
                <v-list-item-title class="align-self-start" v-html="item.displayname"></v-list-item-title>
                </v-col>
                <v-col
                cols="3"
                sm="2"
                >
                <v-list-item-avatar
                size ="60"
                                >
              <v-img :src="item.imguser"></v-img>
            </v-list-item-avatar>
                </v-col>
              </v-row>
            </v-list-item-content>
            
          </v-list-item>
        </router-link>
        </div>
      </v-list>
    </v-card>
  
        <template v-slot:footer>
          <v-row
            class="mt-2"
            align="center"
            justify="center"
          >
            <v-spacer></v-spacer>
  
            <span
              class="mr-4
              grey--text"
            >
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-pagination
              v-model="page"
              :length="15"
              :total-visible="5"
              color= "#05020D"
            ></v-pagination>
          </v-row>
        </template>
      </v-data-iterator>
</v-container>
</template>

<script>
import image from "../../assets/user.jpg"
import image2 from "../../assets/nine.jpg"
import image3 from "../../assets/eight.jpg"
import image4 from "../../assets/vijf.jpg"
import image5 from "../../assets/seven.jpg"
export default {
  name: 'Forumtable',
  data () {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 18,
      sortBy: 'name',
      keys: [
        'Img',
        'Title',
        'Description',
        'World',
        'Categorie',
        'Displayname',
        'Imguser',
      ],
      events: [
   
        {
          img:image,
          title: "Drinking night",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "World: Drinking night",
          categorie: "Categorie: Entertainment",
          displayname: "Klerm",
          imguser: image
        },
                {
          img: image2,
          title: "Party Festivval ",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "World: Drinking night",
          categorie: "Categorie: Entertainment",
          displayname: "Klerm",
          imguser: image
        },
        {
          img: image3,
          title: "Camping in the woods",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "World: Drinking night",
          categorie: "Categorie: Entertainment",
          displayname: "Klerm",
          imguser: image
        },
        {
          img: image4,
          title: "Horror Mansion Escape",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "World: Drinking night",
          categorie: "Categorie: Entertainment",
          displayname: "Klerm",
          imguser: image
        },
        {
          img: image5,
          title: "Drawing Contest",
          discription: "If you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinkingIf you wanna party and you love some games and music.This is your place. We have a dj and a ton of group games for drinking",
          world: "World: Drinking night",
          categorie: "Categorie: Entertainment",
          displayname: "Klerm",
          imguser: image
        },

      ],
      worlds:[
        {
          id:1,
          world:"Drinking Night"
        },
                {
          id:2,
          world:"Black Cat"
        },
                {
          id:3,
          world:"Midnight Rooftop"
        },
                {
          id:4,
          world:"Murder 4"
        },
                {
          id:5,
          world:"Golf us"
        },
      ],
        categories:[
        {
          id:1,
          categorie:"Sport"
        },
                {
          id:2,
          categorie:"Entertianment"
        },
                {
          id:3,
          categorie:"Games"
        },
                {
          id:4,
          categorie:"Movies"
        },
                {
          id:5,
          categorie:"Relaxment"
        },
      ],
      worldnames:[

      ]
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.events.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
  },
};
</script>

<style scoped>
.container{
  padding-right: 13%;
}
</style>

<style >
.theme--light.v-list{
  background: #05020D;
}
.v-list-item__title{
  color:#FCFCFC;
}
.theme--light.v-list-item:not(.v-list-item--disabled) .v-list-item__subtitle, .theme--light.v-list-item:not(.v-list-item--disabled) .v-list-item__action-text{
  color:#FCFCFC;
}

</style>