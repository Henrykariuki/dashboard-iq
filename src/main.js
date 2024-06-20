import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import BankingPage from './pages/BankingPage.vue'
import ChatPage from './pages/apps/ChatPage.vue'
import Blogpage from './pages/apps/BlogPage.vue'
import CalenderPage from './pages/apps/CalenderPage.vue'
import FilePage from './pages/apps/FilePage.vue'
import MailPage from './pages/apps/MailPage.vue'
import TasklistPage from './pages/apps/TasklistPage.vue'
import FormLayoutPage from './pages/uikit/FormLayoutPage.vue'
import InputPage from './pages/uikit/InputPage.vue'
import LabelPage from './pages/uikit/InputPage.vue'
import InvalidPage from './pages/uikit/InvalidPage.vue'
import ButtonPage from './pages/uikit/ButtonPage.vue'
import TablePage from './pages/uikit/TablePage.vue'
import ListPage from './pages/uikit/ListPage.vue'
import TreePage from './pages/uikit/TreePage.vue'
import PanelPage from './pages/uikit/PanelPage.vue'
import OverlayPage from './pages/uikit/OverlayPage.vue'
import MediaPage from './pages/uikit/MediaPage.vue'
import MenuPage from './pages/uikit/MenuPage.vue'
import MessagePage from './pages/uikit/MessagePage.vue'
import UiFilePage from './pages/uikit/UiFilePage.vue'
import ChartPage from './pages/uikit/ChartPage.vue'
import MiscPage from './pages/uikit/MiscPage.vue'

const routes = [
    {path: '/', component: HomePage,},
    { path: '/banking', component: BankingPage},
    { path: '/apps-blog', component: Blogpage },
    { path: '/apps-calender', component: CalenderPage },  
    { path: '/apps-chat', component: ChatPage},
    { path: '/apps-file', component: FilePage },
    { path: '/apps-mail', component: MailPage },
    { path: '/apps-tasklist', component: TasklistPage },
    { path: '/ui-form', component: FormLayoutPage },
    { path: '/ui-input', component: InputPage },
    { path: '/ui-label', component: LabelPage },
    { path: '/ui-invalid', component: InvalidPage },
    { path: '/ui-button', component: ButtonPage },
    { path: '/ui-table', component: TablePage },
    { path: '/ui-list', component: ListPage },
    { path: '/ui-tree', component: TreePage },
    { path: '/ui-panel', component: PanelPage },
    { path: '/ui-overlay', component: OverlayPage },
    { path: '/ui-media', component: MediaPage },
    { path: '/ui-menu', component: MenuPage },
    { path: '/ui-message', component: MessagePage },
    { path: '/ui-file', component: UiFilePage },
    { path: '/ui-chart', component: ChartPage },
    { path: '/ui-misc', component: MiscPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
