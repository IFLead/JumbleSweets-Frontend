<template>
  <div class="contacts">
    <b-container>
      <!--<div class="map">-->
        <!--<iframe src="https://goo.gl/maps/eHffYJ9gW2M2" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
      <!--</div>-->
      <yandex-map
        :coords="[50.029227, 36.327978]"
        zoom="17"
        style="width: 100%; height: 500px;"
        :cluster-options="{
                1: {clusterDisableClickZoom: true}
              }"
        :behaviors="['drag']"
        :controls="[]"
        :placemarks="placemarks"
        map-type="map"
      >

      </yandex-map>

    </b-container>
  </div>

</template>

<script>
  export default {
    name: 'Contacts',
    data() {
      return {
        placemarks: [
          {
            coords: [50.029227, 36.327978],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: '1',
            callbacks: {
              click() {
              },
            },
          },
        ],
      };
    },
  };
</script>

<style lang="sass">


</style>
