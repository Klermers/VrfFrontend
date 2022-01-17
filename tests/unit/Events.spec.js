import Vuex from "vuex"
import {shallowMount, createLocalVue } from "@vue/test-utils"
import Events from "../../src/components/Events/Events.vue"
import Vuetify from 'vuetify'


jest.mock('axios',() => ({
    get: jest.fn(()=> mockeventList)
}))

describe('User logged out', () => {
  let getters
  let store
  const localVue = createLocalVue()
  beforeEach(() => {
    localVue.use(Vuex)
    localVue.use(Vuetify)
    getters = {
      token: () => null
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('if button is invisible to the user', () => {
    const wrapper = shallowMount(Events, {
      store,
      localVue
    })
    expect(wrapper.find("button").exists()).toBe(false)
    
  })
})
