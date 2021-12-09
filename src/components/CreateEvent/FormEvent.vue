<v-form style="background: #0B061E;">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="5"
          >
            <v-text-field
              label="Title"
              single-line
              solo
              type="text"
              v-model = event.titel
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="4"
          >
          <v-select
            :items="getterworlds"
            label="World"
            item-text="world"
            item-value="id"
            solo
            v-model = event.worlds.id
          ></v-select>
          </v-col>
  
          <v-col
            cols="12"
            sm="3"
          >
          <v-select
            :items="gettercategories"
            label="Categories"
            item-text="categorie"
            item-value="id"
            solo
            v-model = event.categories.id
          ></v-select>
          </v-col>
  
          <v-col
            cols="12"
            sm="2"
          >
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Picker without buttons"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              solo
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
          </v-col>
            <v-col
            cols="12"
            sm="4"
          >
            <v-text-field
              label="Amount"
              single-line
              solo
            ></v-text-field>
          </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <v-textarea
            solo
            auto-grow
            name="input-7-4"
            label="Description..."
            rows="8"
            v-model = event.description
            row-height="40"
          ></v-textarea>
        </v-col>
        <v-col
            cols="3"
            sm="5"
          >
            <FormulateInput
            type="image"
            name="headshot"
            label="Select an image to upload"
             help="Select a png, jpg or gif to upload."
            validation="mime:image/jpeg,image/png,image/gif"
            />
          </v-col>
        </v-row>
        <row>
          <v-col
          class="text-right"
          cols="12"
          md="12"
        >
        <v-btn @click="$router.push('/events')"
         depressed
         color="#FF4E9F"
        >
          Cancel
        </v-btn>
        <v-btn @click="Createvent()"
         depressed
         color="#FF4E9F"
        >
          Accept
        </v-btn>
        </v-col>
        </row>
      </v-container>
    </v-form>
</template>

<script>
export default {
  name: 'FormEvent',
  data(){
    return{
    event:{
      titel:"",
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      description : "",
      users:{
        id: this.$store.getters.user.id
      },
      worlds: {
        id: null
      },
      categories: {
        id: null
      },
      images: {
        image: "dsfdff"
      }
      
    }
  }
  },
  menu2: false,
  methods:{
    Createvent()
    {
      console.log(this.event)
      this.$store.dispatch('CreateEvent',this.event)
    }
  },
  computed: {
    getterworlds() {
      return this.$store.getters.allworlds
    },
    gettercategories(){
      return this.$store.getters.allcategories
    },
  },
  mounted() {
    this.$store.dispatch("GetWorlds");
    this.$store.dispatch("GetCategories");
  },
};
</script>

<style scoped>

</style>