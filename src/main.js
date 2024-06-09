import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'

import store from './store'
import App from './App.vue'
import './assets/index.css'
import Welcome from './views/Welcome.vue'
import Main from './views/Main.vue'
import Mining from './views/Mining.vue'
import TonMining from './views/TonMining.vue'
import BuyFromStore from './views/BuyFromStore.vue'
import RankAndLevel from './views/RankAndLevel.vue'
import FarmRent from './views/FarmRent.vue'
import Clans from './views/Clans.vue'

const routes=[
  {path:'/', component: Main},
  {path:'/mining', component: Mining},
  {path:'/tonmining', component: TonMining},
  {path:'/buyfromstore', component: BuyFromStore},
  {path:'/RankAndLevel', component: RankAndLevel},
  {path:'/FarmRent', component: FarmRent},
  {path:'/Clans', component: Clans},
  {path:'/Welcome', component: Welcome},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

createApp(App).use(router).use(store).mount('#app')
