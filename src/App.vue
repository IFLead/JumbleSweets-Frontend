<template>
  <div id="app">
    <!--<el-button :plain="true" @click="openVn">VNode</el-button>-->
    <vHeader></vHeader>
    <transition>
      <router-view></router-view>
    </transition>
    <vFooter></vFooter>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import Header from './components/VueHeader.vue';
import Footer from './components/VueFooter.vue';

export default {
  name: 'App',
  components: {
    vHeader: Header,
    vFooter: Footer,
  },
  created() {
    this.checkAuth();
  },
  methods: {
    ...mapActions(['checkAuth']),
  },
};
</script>

<style lang="sass" type="text/sass">
  @import "./styles/main-style.sass"
</style>


<style>
</style>
