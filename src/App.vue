<template>
  <div id="app">
    <vHeader></vHeader>
    <router-view></router-view>
    <vFooter></vFooter>
  </div>
</template>

<script>
  import Header from './components/VueHeader';
  import Footer from './components/VueFooter';

export default {
  name: 'app',
  components: {
    'vHeader': Header,
    'vFooter': Footer,
  },
};
</script>

<style lang="sass" type="text/sass">
  @import "./styles/main-style.sass"
</style>


<style>

</style>
