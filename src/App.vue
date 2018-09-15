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
  name: 'App',
  components: {
    vHeader: Header,
    vFooter: Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp',
  },
};
</script>

<style lang="sass" type="text/sass">
  @import "./styles/main-style.sass"
</style>


<style>

</style>
