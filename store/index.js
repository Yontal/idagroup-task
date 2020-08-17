import Vue from 'vue';
import Vuex from 'vuex';
import * as API from "../API/request";

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
    state: () =>  ({
      vehicles: [],
      error: '',
    }),
    mutations: {
      mutateVehicles: (state, payload) => {
        state.vehicles = payload;
      },
      mutateError: (state, payload) => {
        state.error = payload;
      }
    },
    actions: {
      pullVehicles: ({ commit }) => {
        API.getVehicles()
          .then((res) => {
            commit('mutateVehicles', res);
          })
          .catch((err) => commit('mutateError', 'LoadingFailed'));
      },
     
      updateError: ({ commit }, payload) => {
        commit('mutateError', payload);
      }
    },
    getters: {
      getVehicles: (state) => {
        return state.vehicles;
      },
      getVehicleById: state => id => {
        return state.vehicles.find(item => item.id === id);
      },
      getError: (state) => {
        return state.error;
      }
    },
  })
};

export default createStore;