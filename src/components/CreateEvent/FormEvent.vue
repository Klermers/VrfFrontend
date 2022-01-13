<template>
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
          <v-file-input
            accept="image/*"
            label="File input"
            color="#FCFCFC"
            @change="GetImageurl"
          ></v-file-input>
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
import axios from 'axios';
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
        image: ""
      }
      
    },
  }
  },
  menu2: false,
  methods:{
    Createvent()
    {
      console.log(this.event)
      axios.post('http://localhost:1212/event/createevent',{
            "titel": this.event.titel,
            date: this.event.date,
            description: this.event.description,
            users: {
                id: this.event.users.id
            },
            worlds: {
                id: this.event.worlds.id
            },
            categories: {
                id: this.event.categories.id
            },
            images: {
                image: this.event.images.image
            }
        },{
            headers: {
                'Authorization':this.$store.getters.token,
            }
        })
    },
    GetImageurl(file){
      this.uploadFileToCloudinary(file).then((fileresponse) =>
          this.event.images.image = fileresponse.url
      )
      console.log(this.event.images)
    },
    uploadFileToCloudinary(file) {
    return new Promise(function (resolve, reject) {
        //Ideally these to lines would be in a .env file
        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dmyhwecgp/image/upload';
        const CLOUDINARY_UPLOAD_PRESET = 'jr8tbimj';

        let formData = new FormData();
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', 'vrf');
        formData.append('file', file);

        let request = new XMLHttpRequest();
        request.open('POST', CLOUDINARY_URL, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        request.onreadystatechange = () => {
            // File uploaded successfully
            if (request.readyState === 4 && request.status === 200) {
                let response = JSON.parse(request.responseText);
                console.log(response)
                resolve(response);
            }

            // Not succesfull, let find our what happened
            if (request.status !== 200) {
                let response = JSON.parse(request.responseText);
                let error = response.error.message;
                alert('error, status code not 200 ' + error);
                reject(error);
            }

        };

        request.onerror = (err) => {
            alert('error: ' + err);
            reject(err);
        };

        request.send(formData);
    });
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

<style>
.mdi-myFileIcon::before {
  color: #FCFCFC;
}
</style>