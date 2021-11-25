<template>
<v-container style="margin-left: 250px;">
  <v-row class= "row">
    <v-col
      cols="12"
      sm="4">
    <v-text-field
      v-model="search"
      clearable
      flat
      dark
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search Event"
    ></v-text-field>
    </v-col>
  </v-row>
    <v-row class= "row">
    <v-col
      cols="12"
      sm="2">
    <h1 class="title">Events</h1>
    </v-col>
    <v-col
    cols="12"
      sm="9">
    >
    </v-col>
    <v-col
    cols="12"
      sm="1"
    
    >
    <v-btn
     depressed
     color="#FF4E9F"
      >
      Create event
    </v-btn>
    </v-col>
  </v-row>
<forum-table/>
</v-container>
</template>

<script>
import ForumTable from './ForumTable.vue';
export default {
  components: { ForumTable },
  name: 'Events',
};
</script>
<style scoped>
.row {
  padding-right: 16%;
  padding-left: 1%;
}
.title {
  color: #FFFFFF;
}
</style>