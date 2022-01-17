import Vuex from "vuex"
import {createLocalVue, mount } from "@vue/test-utils"
import CreateEvent from "../../src/components/CreateEvent/CreateEvent.vue"
import Vuetify from 'vuetify'

describe('Create a event', () => {
    let getters
    let store
    const localVue = createLocalVue()
  
    beforeEach(() => {
      localVue.use(Vuex)
      localVue.use(Vuetify)
      getters = {
        token: () => "token"
      }
  
      store = new Vuex.Store({
        getters
      })
    })

      it('Event is created', () => {
        const wrapper = mount(CreateEvent, {
          store,
          localVue
        })

        expect(wrapper.text()).toContain("Create Event")
        
      })
  })