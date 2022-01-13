import Vuex from "vuex"
import {shallowMount, createLocalVue } from "@vue/test-utils"
import Events from "../../src/components/Events/Events.vue"
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify);

const store = new Vuex.Store({
  state: {
    token: null
  }
})

const Loggedin = new Vuex.Store({
  state: {
    token: "33423423"
  }
})

jest.mock('axios', async() => ({
    get: jest.fn(()=> mockeventList)
}))

test('if user is logged out', async () => {
    const wrapper = shallowMount(Events, {
      store,
      localVue
    })
    expect(wrapper.find("v-btn").exists()).toBe(false)
    
})

const mockeventList = [
  {
      "id": 4,
      "titel": "The Wasted Fest",
      "date": "2021-12-22T19:30:00.000+00:00",
      "description": "A night of drinking and dancing, If you like partying and alcohol your gonna like this. We have a private dj, dancers and much more",
      "users": {
          "id": 18,
          "username": "klermtest",
          "password": "$2a$10$oMb/pfwR2GwhhkH3tOEvguz41KyIpNKO5JnUnasy1lEsfbHJ1gy46",
          "displayname": "Klermtest",
          "image": {
              "id": 1,
              "image": "https://res.cloudinary.com/dmyhwecgp/image/upload/v1639029174/Vrf/vrchat_file_0c641944-5bf2-4632-8e4b-cb2ef83f673b_hskcrz.png"
          },
          "joindate": "2021-12-04T12:03:21.000+00:00"
      },
      "worlds": {
          "id": 1,
          "world": "Drinking Night"
      },
      "categories": {
          "id": 2,
          "categorie": "Entertainment"
      },
      "images": {
          "id": 14,
          "image": "https://res.cloudinary.com/dmyhwecgp/image/upload/v1638857695/Vrf/twee_-_Copy_waytwp.jpg"
      },
      "userroles": null
  },
  {
      "id": 46,
      "titel": "sdfddsffdsfdsdfsfds",
      "date": "2021-12-10T00:00:00.000+00:00",
      "description": "sdfdsfdfdsfdsfdsfdsfdsfdsfdsfdfdsfdsdsfdsfdsfds",
      "users": {
          "id": 18,
          "username": "klermtest",
          "password": "$2a$10$oMb/pfwR2GwhhkH3tOEvguz41KyIpNKO5JnUnasy1lEsfbHJ1gy46",
          "displayname": "Klermtest",
          "image": {
              "id": 1,
              "image": "https://res.cloudinary.com/dmyhwecgp/image/upload/v1639029174/Vrf/vrchat_file_0c641944-5bf2-4632-8e4b-cb2ef83f673b_hskcrz.png"
          },
          "joindate": "2021-12-04T12:03:21.000+00:00"
      },
      "worlds": {
          "id": 5,
          "world": "The Room of the Rain"
      },
      "categories": {
          "id": 3,
          "categorie": "Educational"
      },
      "images": {
          "id": 67,
          "image": "http://res.cloudinary.com/dmyhwecgp/image/upload/v1639128883/vrf/wkfzzuyl5gxjliyif8de.png"
      },
      "userroles": null
  },
]
