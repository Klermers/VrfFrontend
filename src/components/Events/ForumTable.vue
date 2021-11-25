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
        <template v-for="(item, index) in events">
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
            v-else
            :key="item.title"
          >
            <v-list-item-avatar
              tile
              size ="120"
                                >
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
                        <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
                        <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
                        <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
                        <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
            
          </v-list-item>
        </template>
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
        'Name',
        'Calories',
        'Fat',
        'Carbs',
        'Protein',
        'Sodium',
        'Calcium',
        'Iron',
      ],
      events: [
        {
          name: '@/assets/user.png',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
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