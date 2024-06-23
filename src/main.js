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
import FreeBlocksPage from './pages/prime-blocks/FreeBlocksPage.vue'
import AllBlocksPage from './pages/prime-blocks/AllBlocksPage.vue'
import ColorsPage from './pages/utilities/ColorsPage.vue'
import FigmaPage from './pages/utilities/FigmaPage.vue'
import PrimeFlexPage from './pages/utilities/PrimeFlexPage.vue'
import PrimeIconsPage from './pages/utilities/PrimeIconsPage.vue'
import LandingPage from './pages/page/LandingPage.vue'
import AuthPage from './pages/page/AuthPage.vue'
import CrudPage from './pages/page/CrudPage.vue'
import TimelinePage from './pages/page/TimelinePage.vue'
import InvoicePage from './pages/page/InvoicePage.vue'
import AboutUsPage from './pages/page/AboutUsPage.vue'
import HelpPage from './pages/page/HelpPage.vue'
import NotFoundPage from './pages/page/NotFoundPage.vue'
import EmptyPage from './pages/page/EmptyPage.vue'
import FaqPage from './pages/page/FaqPage.vue'
import ContactPage from './pages/page/ContactPage.vue'
import CheckoutFormPage from './pages/ecommerce/CheckoutFormPage.vue'
import ProductOverviewPage from './pages/ecommerce/ProductOverviewPage.vue'
import ProductListPage from './pages/ecommerce/ProductListPage.vue'
import NewProductPage from './pages/ecommerce/NewProductPage.vue'
import ShoppingCartPage from './pages/ecommerce/ShoppingCartPage.vue'
import OrderHistoryPage from './pages/ecommerce/OrderHistoryPage.vue'
import OrderSummaryPage from './pages/ecommerce/OrderSummaryPage.vue'
import UserListPage from './pages/user-management/UserListPage.vue'
import CreatePage from './pages/user-management/CreatePage.vue'
import BuyPage from './pages/start/BuyPage.vue'
import DocumentationPage from './pages/start/DocumentationPage.vue'


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
    { path: '/prime-freeblocks', component: FreeBlocksPage },
    { path: '/prime-allblocks', component: AllBlocksPage },
    { path: '/utilities-icons', component: PrimeIconsPage },
    { path: '/utilities-color', component: ColorsPage },
    { path: '/utilities-flex', component: PrimeFlexPage },
    { path: '/utilities-figma', component: FigmaPage },
    { path: '/page-landing', component: LandingPage },
    { path: '/page-auth', component: AuthPage },
    { path: '/page-crud', component: CrudPage },
    { path: '/page-timeline', component: TimelinePage },
    { path: '/page-invoice', component: InvoicePage },
    { path: '/page-about', component: AboutUsPage },
    { path: '/page-help', component: HelpPage },
    { path: '/page-notfound', component: NotFoundPage },
    { path: '/page-empty', component: EmptyPage },
    { path: '/page-faq', component: FaqPage },
    { path: '/page-contact', component: ContactPage },
    { path: '/ecommerce-overview', component: ProductOverviewPage },
    { path: '/ecommerce-list', component: ProductListPage },
    { path: '/ecommerce-new', component: NewProductPage },
    { path: '/ecommerce-cart', component: ShoppingCartPage },
    { path: '/ecommerce-checkout', component: CheckoutFormPage },
    { path: '/ecommerce-history', component: OrderHistoryPage },
    { path: '/ecommerce-summary', component: OrderSummaryPage },
    { path: '/user-management-list', component: UserListPage },
    { path: '/user-management-create', component: CreatePage },
    { path: '/start-buy', component: BuyPage },
    { path: '/start-documentation', component: DocumentationPage },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
