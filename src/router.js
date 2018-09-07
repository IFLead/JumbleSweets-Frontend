import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AboutUs from './views/AboutUs.vue';
import Contacts from './views/Contacts.vue';
import DelPay from './views/DelPay.vue';
import JumbleBox from './views/JumbleBox.vue';
import Item from './views/Item.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

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
			path: '/item',
      name: 'item',
      component: Item,
		},
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
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
