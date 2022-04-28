import { createStore} from 'vuex'
import axios from 'axios'

export default createStore ({
    state:{
      searchFilter:'',
        color:[],
        cart:[],
        favorite:[]
    },
    mutations:{
        SET_COLOR: (state, color) => {
            state.color=color;
         },
         SET_VALUE:(state,value) =>{
           state.searchFilter=value;
         },
         SET_TO_CART:(state, ecolor) =>{
           if (state.cart.length) {
          let isColorExists = false;
          state.cart.map((item) => {
              if(item.id === ecolor.id){
                isColorExists = true;
                item.quantity++ 
              }
          })
          if(!isColorExists){
            state.cart.push(ecolor)           
          }
           } 
            else{
            state.cart.push(ecolor)           
           }            
         },
         SET_TO_FAVORITE:(state, ecolor) =>{
          if (state.favorite.length) {
         let isColorExists = false;
         state.favorite.map((item) => {
             if(item.id === ecolor.id){
               isColorExists = true;
               item.quantity++ 
             }
         })
         if(!isColorExists){
           state.favorite.push(ecolor)           
         }
          } 
           else{
           state.favorite.push(ecolor)           
          }            
        },
         REMOVE_CART:(state, index) =>{
             state.cart.splice(index,1)
         },
         REMOVE_FAVORITE:(state, index) =>{
          state.favorite.splice(index,1)
      },
         INCREMENT:(state,index) => {
           state.cart[index].quantity++
         },
         DECREMENT:(state,index) => {
           if(state.cart[index].quantity>1){
          state.cart[index].quantity--
           }         
        },
       
    },
    actions:{
         GET_COLOR_FROM_API({commit}){
           return axios('http://localhost:3000/color', {
                method: "GET"
            })
            .then((color) => {
            commit('SET_COLOR', color.data);
            return color;
    })
  },
  GET_SEARCH_FILTER({commit},value){
    commit('SET_VALUE',value);
  },
  ADD_TO_CART({commit}, ecolor){
commit('SET_TO_CART', ecolor);
  },
  ADD_TO_FAVORITE({commit}, ecolor){
    commit('SET_TO_FAVORITE', ecolor);
      },
  INCREMENT_CART_ITEM({commit},index){
    commit('INCREMENT',index)
  },
  DECREMENT_CART_ITEM({commit},index){
    commit('DECREMENT',index)
  },
  DELETE_CART({commit},index ){
      commit('REMOVE_CART',index)
  },
  DELETE_FAVORITE({commit},index ){
    commit('REMOVE_FAVORITE',index)
}
  },

    getters: {
      SEARCH_FILTER(state){
        return state.searchFilter
      },
        COLOR(state){
            return state.color;
        },
        CART(state){
            return state.cart;
        },
        FAVORITE(state){
          return state.favorite;
        }
    }
})
