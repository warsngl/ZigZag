import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'

import store from './store'
import App from './App.vue'
import './assets/index.css'
import Welcome from './components/Welcome.vue'
import Main from './components/Main.vue'
import Mining from './components/Mining.vue'
import TonMining from './components/TonMining.vue'
import BuyFromStore from './components/BuyFromStore.vue'
import RankAndLevel from './components/RankAndLevel.vue'
import FarmRent from './components/FarmRent.vue'
import Clans from './components/Clans.vue'

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
