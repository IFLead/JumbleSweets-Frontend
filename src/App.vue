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
import Header from './components/VueHeader.vue';
import Footer from './components/VueFooter.vue';

export default {
  name: 'App',
  components: {
    vHeader: Header,
    vFooter: Footer,
  },
  data() {
    return {
      mes: 'our message',
    };
  },
  methods: {
    openVn() {
      this.$message({
        message: this.mes,
        center: true,
      });
    },
  },
};
</script>

<style lang="sass" type="text/sass">
  @import "./styles/main-style.sass"
</style>


<style>

</style>
