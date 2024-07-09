import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
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
import BlogListPage from './pages/apps/BlogListPage.vue'
import BlogDetailsPage from './pages/apps/BlogDetailsPage.vue'
import BlogEditPage from './pages/apps/BlogEditPage.vue'
import MailInbox from './pages/apps/MailInbox.vue'
import MailCompose from './pages/apps/MailCompose.vue'
import MailDetails from './pages/apps/MailDetails.vue'
import AuthLogin from './pages/page/AuthLogin.vue'
import AuthError from './pages/page/AuthError.vue'
import AuthAccess from './pages/page/AuthAccess.vue'
import AuthRegister from './pages/page/AuthRegister.vue'
import AuthForgotPassword from './pages/page/AuthForgotPassword.vue'
import AuthNewPassword from './pages/page/AuthNewPassword.vue'
import AuthVerification from './pages/page/Auth.Verification.vue'
import AuthLockscreen from './pages/page/AuthLockscreen.vue'
import SubmenuOne from './pages/hierarchy/SubmenuOne.vue'
import SubmenuTwo from './pages/hierarchy/SubmenuTwo.vue'
import SubmenuThree from './pages/hierarchy/SubmenuThree.vue'
import SubmenuFour from './pages/hierarchy/SubmenuFour.vue'
import { Home, Image, MessageCircle, Calendar, MessagesSquare, Folder, SquareCheckBig, Mail, 
    NotebookText, Bookmark, CircleAlert, Box, Grid2X2, List, Share2, PanelBottomDashed, Layers2, Images,
    Menu, File, BarChart3, Circle, Eye, Globe, Bot, Palette, Monitor, Pencil, User, DollarSign, CircleHelp,
    ShieldQuestion, Phone, Plus, ShoppingCart, History, ListCollapse, Inbox, LogIn, CircleX, AlignLeft, ChevronDown,
    Lock, UserPlus, Settings, EyeOff
} from 'lucide-vue-next'




const routes = [
    {path: '/', component: HomePage, icon: Home, title: 'E-commerce'},
    { path: '/banking', component: BankingPage, icon: Image, title: 'Banking' },
    { path: '/apps', title: 'APPS', children: [
        {
            path: '/blog', icon: MessageCircle, title: 'Blog', children: [
                { path: '/list', component: BlogListPage, icon: Image, title: 'List' },
                { path: '/details', component: BlogDetailsPage, icon: ListCollapse, title: 'Details' },
                { path: '/edit', component: BlogEditPage, icon: Pencil, title: 'Edit' }
            ]
        },
        { path: '/calender', component: CalenderPage, icon: Calendar, title: 'Calender' },
        { path: '/chat', component: ChatPage, icon: MessagesSquare, title: 'Chat' },
        { path: '/file', component: FilePage, icon: Folder, title: 'File' },
        { path: '/mail', icon: Mail, title: 'Mail', children:[
            { path: '/mail-inbox', component: MailInbox, icon: Inbox, title: 'Inbox' },
            { path: '/mail-compose', component: MailCompose, icon: Pencil, title: 'Compose' },
            { path: '/mail-details', component: MailDetails, icon: MessageCircle, title: 'Details' }
        ]},
        { path: '/tasklist', component: TasklistPage, icon: SquareCheckBig, title: 'Tasklist' },
    ]},
    {path: '/uikit', title: 'UI KIT', children: [
        { path: '/ui-form', component: FormLayoutPage, icon: NotebookText, title: 'Form Layout'},
        { path: '/ui-input', component: InputPage, icon: SquareCheckBig, title: 'Input'},
        { path: '/ui-label', component: LabelPage, icon: Bookmark, title: 'FLoat Label'},
        { path: '/ui-invalid', component: InvalidPage, icon: CircleAlert, title: 'Invalid State'},
        { path: '/ui-button', component: ButtonPage, icon: Box, title: 'Button'},
        { path: '/ui-table', component: TablePage, icon: Grid2X2, title: 'Table'},
        { path: '/ui-list', component: ListPage, icon: List, title: 'List'},
        { path: '/ui-tree', component: TreePage, icon: Share2, title: 'Tree'},
        { path: '/ui-panel', component: PanelPage, icon: PanelBottomDashed, title: 'Panel'},
        { path: '/ui-overlay', component: OverlayPage, icon: Layers2, title: 'Overlay'},
        { path: '/ui-media', component: MediaPage, icon: Images, title: 'Media'},
        { path: '/ui-menu', component: MenuPage, icon: Menu, title: 'Menu'},
        { path: '/ui-message', component: MessagePage, icon: MessageCircle, title: 'Message'},
        { path: '/ui-file', component: UiFilePage, icon: File, title: 'File'},
        { path: '/ui-chart', component: ChartPage, icon: BarChart3, title: 'Chart'},
        { path: '/ui-misc', component: MiscPage, icon: Circle, title: 'Misc'},
    ]},
    {path: '/primeblocks', title: 'Prime Blocks', children: [
        { path: '/prime-freeblocks', component: FreeBlocksPage, icon: Eye, title: 'Free Blocks'},
        { path: '/prime-allblocks', component: AllBlocksPage, icon: Globe, title: 'All Blocks' },
    ]},
    {path: '/utilities', title: 'Utilities', children:[
        { path: '/utilities-icons', component: PrimeIconsPage, icon: Bot, title: 'Bot' },
        { path: '/utilities-color', component: ColorsPage, icon: Palette, title: 'Colors'},
        { path: '/utilities-flex', component: PrimeFlexPage, icon: Monitor, title: 'PrimeFlex'},
        { path: '/utilities-figma', component: FigmaPage, icon: Pencil, title: 'Figma' }
    ]},
    {path: '/page', title: 'Pages', children: [
        { path: '/page landing', component: LandingPage, icon: Globe, title: 'Landing'},
        { path: '/page-auth', icon: User, title: 'Auth', children: [
            { path: '/login', component: AuthLogin, icon: LogIn, title: 'Login' },
            { path: '/error', component: AuthError, icon: CircleX, title: 'Error' },
            { path: '/access-denied', component: AuthAccess, icon: Lock, title: 'Access Denied' },
            { path: '/register', component: AuthRegister, icon: UserPlus, title: 'Register' },
            { path: '/forgot-password', component: AuthForgotPassword, icon: ShieldQuestion, title: 'Forgot Password' },
            { path: '/new-password', component: AuthNewPassword, icon: Settings, title: 'New Password' },
            { path: '/verification', component: AuthVerification, icon: Mail, title: 'Verification' },
            { path: '/lock-screen', component: AuthLockscreen, icon: EyeOff, title: 'Lock Screen' }
        ]},
        { path: '/page-crud', component: CrudPage, icon: Pencil, title: 'Crud' },
        { path: '/page-timeline', component: TimelinePage, icon: Calendar, title: 'Timeline' },
        { path: '/page-invoice', component: InvoicePage, icon: DollarSign, title: 'Invoice' },
        { path: '/page-about', component: AboutUsPage, icon: User, title: 'About Us' },
        { path: '/page-help', component: HelpPage, icon: CircleHelp, title: 'Help' },
        { path: '/page-notfound', component: NotFoundPage, icon: CircleAlert, title: 'Not Found' },
        { path: '/page-empty', component: EmptyPage, icon: Circle, title: 'Empty' },
        { path: '/page-faq', component: FaqPage, icon: ShieldQuestion, title: 'FAQ' },
        { path: '/page-contact', component: ContactPage, icon: Phone, title: 'Contact Us' }
    ]},
    {path: '/ecommerce', title: 'E-Commerce', children: [
        { path: '/ecommerce-overview', component: ProductOverviewPage, icon: Image, title: 'Product Overview' },
        { path: '/ecommerce-list', component: ProductListPage, icon: List, title: 'Product List' },
        { path: '/ecommerce-new', component: NewProductPage, icon: Plus, title: 'New Product' },
        { path: '/ecommerce-cart', component: ShoppingCartPage, icon: ShoppingCart, title: 'Shopping Cart' },
        { path: '/ecommerce-checkout', component: CheckoutFormPage, icon: SquareCheckBig, title: 'CheckOut Form' },
        { path: '/ecommerce-history', component: OrderHistoryPage, icon: History, title: 'Order History' },
        { path: '/ecommerce-summary', component: OrderSummaryPage, icon: File, title: 'Order Summary' },
    ]},
    {path: '/user-management', title: 'User Management', children: [
        { path: '/user-management-list', component: UserListPage, icon: List, title: 'List' },
        { path: '/user-management-create', component: CreatePage, icon: Plus, title: 'Create' },
    ]},
    {path: '/hierarchy', title: 'HIERARCHY', children: [
        {
            path: '/submenu-one', title: 'Submenu 1', icon: AlignLeft, children: [
                { path: '/menu-one', component: SubmenuOne, icon: AlignLeft, title: 'Submenu 1.1' },
                { path: '/menu-two', component: SubmenuTwo, icon: AlignLeft, title: 'Submenu 1.2' }
        ]},
        {
            path: '/submenu-two', title: 'Submenu 2', icon: AlignLeft, children: [
                { path: '/menu-three', component: SubmenuThree, icon: AlignLeft, title: 'Submenu 2.1' },
                { path: '/menu-four', component: SubmenuFour, icon: AlignLeft, title: 'Submenu 2.2' }
            ]
        }
    ]},
    {path: '/start', title: 'START', children: [
        { path: '/start-buy', component: BuyPage, icon: List, title: 'Buy Now'},
        { path: '/start-documentation', component: DocumentationPage, icon: List, title: 'Documentation' }
    ]}   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
export {routes}