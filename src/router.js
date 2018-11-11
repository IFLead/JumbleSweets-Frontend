import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
import Contacts from './pages/Contacts.vue';
import DelPay from './pages/DelPay.vue';
// import JumbleBox from './pages/JumbleBox.vue';
import Item from './pages/Item.vue';
// import JumbleBoxPackage from './pages/JumbleBoxPackage.vue';
import Profile from './pages/Profile.vue';
// import JumbleBoxConstructor from './pages/JumbleBoxConstructor.vue';
import Cart from './pages/Cart.vue';
import Shipping from './pages/Shipping.vue';
import NovaPoshta from './pages/NovaPoshta.vue';
import Kharkiv from './pages/Kharkiv.vue';
import Summary from './pages/Summary.vue';
import Auth from './pages/Auth.vue';
import RepeatModal from './components/modals/RepeatModal.vue';
import InsideModal from './components/modals/InsideModal.vue';
import store from './store';

Vue.use(Router);
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid', // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  const position = {};
  if (to.matched.some(m => m.meta.scrollToTop)) {
    // coords will be used if no selector is provided,
    // or if the selector didn't match any element.
    position.x = 0;
    position.y = 0;
  }
  return position;
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: DelPay,
      meta: { requiresAuth: true },
    },
    // {
    //   path: '/jumbleBox',
    //   name: 'jumbleBox',
    //   component: JumbleBox,
    // },
    {
      path: '/products/:name(.*)-:id(\\d*)',
      name: 'item',
      component: Item,
      props: true,
      meta: { scrollToTop: true },
    },
    // {
    //   path: '/package',
    //   name: 'JumbleBoxPackage',
    //   component: JumbleBoxPackage,
    // },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    // {
    //   path: '/constructor',
    //   name: 'JumbleBoxConstructor',
    //   component: JumbleBoxConstructor,
    // },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      meta: { guest: true },
    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: Shipping,
      meta: { requiresAuth: true },
    },
    {
      path: '/novaposhta',
      name: 'NovaPoshta',
      component: NovaPoshta,
      meta: { requiresAuth: true },
    },
    {
      path: '/kharkiv',
      name: 'Kharkiv',
      component: Kharkiv,
      meta: { requiresAuth: true },
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary,
      meta: { scrollToTop: true, requiresAuth: true },
    },
    {
      path: '/repeatmodal',
      name: 'RepeatModal',
      component: RepeatModal,
    },
    {
      path: '/insidemodal',
      name: 'InsideModal',
      component: InsideModal,
    },
  ],
});

console.log(store.getters.getAuthStatus);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getAuthStatus) {
      next({
        path: '/auth',
        params: { nextUrl: to.fullPath },
        // query: {
        //   redirect: to.fullPath,
        // },
      });
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin === 1) {
          next();
        } else {
          next({ name: 'home' });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.getAuthStatus) {
      next();
    } else {
      next({
        name: 'home',
      });
    }
  } else {
    next();
  }
});


export default router;
