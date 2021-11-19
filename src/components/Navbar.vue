<template>
<div>
    <v-toolbar color="#241743" dense dark>
      <v-toolbar-title>VRF</v-toolbar-title>
      <v-btn
        depressed
        color="#241743"
      >
        Event
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        search
        class="expanding-search mt-1"
        dense
      >
          
      </v-text-field>

      <v-btn icon>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-message-text-outline</v-icon>
      </v-btn>

    <v-btn icon>
        <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-avatar
        size="36"
    >
        <img
          src="@/assets/user.png"
        >
    </v-avatar>
    </v-toolbar>
</div>
</template>

<script>
export default {
    name: 'NavBar'
};
</script>

<stylescoped>
</style>