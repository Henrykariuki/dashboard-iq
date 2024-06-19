import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import BankingPage from './pages/BankingPage.vue'
import ChatPage from './pages/apps/ChatPage.vue'

const routes = [
    {path: '/', component: HomePage,},
    { path: '/banking', component: BankingPage},
    { path: '/apps-chat', component: ChatPage}  
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
