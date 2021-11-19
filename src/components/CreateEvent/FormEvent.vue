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
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="4"
          >
          <v-select
            :items="items"
            label="World"
            solo
          ></v-select>
          </v-col>
  
          <v-col
            cols="12"
            sm="3"
          >
          <v-select
            :categories="categories"
            label="Categories"
            solo
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
            row-height="40"
          ></v-textarea>
        </v-col>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
export default {
  name: 'FormEvent',
  data: () => ({
  items: ['Drinkig night', 'Murder 2', 'Black cat', 'Midhnight Rooftop'],
  categories: ['Sports', 'Games', 'Animals', 'Books'],
  date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  }),
  menu2: false,
};
</script>

<style scoped>

</style>