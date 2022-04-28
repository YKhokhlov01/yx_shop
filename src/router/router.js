
import {createRouter, createWebHistory} from 'vue-router'

import yxCatalog from "../components/yx-catalog"
import yxCart from "../components/yx-cart.vue"
import yxStartPage from "../components/yx-start-page"
import yxYx from "../components/yx-yx"
import yxPravana from "../components/yx-pravana"
import yxFavorite from "../components/yx-favorite"




const routes =[
    { path: '/',  component: yxStartPage },
   { path: '/catalog',  component: yxCatalog },
    { path: '/cart', component: yxCart, props: true },
    { path: '/yx', component: yxYx },
    { path: '/pravana', component: yxPravana },
  { path: '/favorite', component: yxFavorite }
]



const router = createRouter({
    history: createWebHistory(), 
      routes
}
)
export default router;