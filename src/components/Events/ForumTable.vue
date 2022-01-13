<template>
<v-container class="container">
<v-data-iterator
        :items="getterevents"
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
                flat
                solo-inverted
                hide-details
                :items="getterworlds"
                item-text="world"
                label="World"
              ></v-select>
              <v-spacer></v-spacer>
                <v-select
                flat
                solo-inverted
                hide-details
                :items="gettercategories"
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
        <div v-for="item in getterevents" :key="item.titel">
          <router-link :to="{name: 'event', params: {id: item.id}}">
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
              <v-img :src="item.images.image"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content class="align-self-start">
              <v-list-item-title v-html="item.titel"></v-list-item-title>
              <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
            </v-list-item-content>
              <v-list-item-content class="align-self-start">
              <v-list-item-title v-html="item.worlds.world"></v-list-item-title>
              <v-list-item-title v-html="item.categories.categorie"></v-list-item-title>
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
                <v-list-item-title class="align-self-start" v-html="item.users.displayname"></v-list-item-title>
                </v-col>
                <v-col
                cols="3"
                sm="2"
                >
                <v-list-item-avatar
                size ="60"
                                >
              <v-img :src="item.users.image.image"></v-img>
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
              :length="5"
              :total-visible="5"
              color= "#05020D"
            ></v-pagination>
          </v-row>
        </template>
      </v-data-iterator>
</v-container>
</template>

<script>
export default {
  name: 'Forumtable',
  data () {
    return {
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 5,
      sortBy: 'title',
      keys: [
        'Img',
        'Title',
        'Description',
        'World',
        'Categorie',
        'Displayname',
        'Imguser',
      ],
      
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.getterevents.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'titel')
    },
    getterworlds() {
      return this.$store.getters.allworlds
    },
    gettercategories(){
      return this.$store.getters.allcategories
    },
    getterevents(){
      return this.$store.getters.allevents
    }
  },
  mounted() {
    this.$store.dispatch("GetWorlds");
    this.$store.dispatch("GetCategories");
    this.$store.dispatch("GetEvents");
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