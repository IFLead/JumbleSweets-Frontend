import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from './views/Home.vue';
import AboutUs from './views/AboutUs.vue';
import Contacts from './views/Contacts.vue';
import DelPay from './views/DelPay.vue';
import JumbleBox from './views/JumbleBox.vue';
import Item from './views/Item.vue';
import JumbleBoxPackage from './views/JumbleBoxPackage.vue';
import Profile from './views/Profile.vue';
import JumbleBoxConstructor from './views/JumbleBoxConstructor.vue';
import Cart from './views/Cart.vue';
import Shopping from './views/Shopping.vue';
import NovaPoshta from './views/NovaPoshta.vue';
import Kharkiv from './views/Kharkiv.vue';
import Summary from './views/Summary.vue';

import Auth from './views/Auth.vue';

Vue.use(Router);
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid', // the property name that vue-meta uses to determine whether to overwrite or append a tag
});
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
    },
    {
      path: '/jumble_box',
      name: 'jumble_box',
      component: JumbleBox,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item,
    },
    {
      path: '/JumbleBoxPackage',
      name: 'JumbleBoxPackage',
      component: JumbleBoxPackage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/JumbleBoxConstructor',
      name: 'JumbleBoxConstructor',
      component: JumbleBoxConstructor,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping,
    },
    {
      path: '/NovaPoshta',
      name: 'NovaPoshta',
      component: NovaPoshta,
    },
    {
      path: '/Kharkiv',
      name: 'Kharkiv',
      component: Kharkiv,
    },
    {
      path: '/Summary',
      name: 'Summary',
      component: Summary,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
