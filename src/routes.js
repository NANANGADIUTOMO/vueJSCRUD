
import Detail from "./pages/Detail.vue"
import Shiping from "./pages/shiping.vue"
import home from "./pages/home.vue"
import catalog from "./pages/catalog.vue"
import shippinglist from "./pages/shippingList.vue"
export default [
    {
        path: "/detail",
        component: Detail,
    },
    {
        path: "/shiping",
        component: Shiping,
    },
    {
        path: "/home",
        component: home,
    },
    {
        path: "/catalog",
        component: catalog,
    },
    {
        path: "/shippinglist",
        component: shippinglist,
    }
];