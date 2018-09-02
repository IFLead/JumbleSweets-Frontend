<template>
  <div class="contacts">
    <b-container>
      <!--<div class="map">-->
        <!--<iframe src="https://goo.gl/maps/eHffYJ9gW2M2" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
      <!--</div>-->
      <section class="map">
        <yandex-map
          :coords="[50.029227, 36.327978]"
          zoom="17"
          style="width: 100%; height: 400px;"
          :cluster-options="{
                  1: {clusterDisableClickZoom: true}
                }"
          :behaviors="['drag']"
          :controls="[]"
          :placemarks="placemarks"
          map-type="map"
        >

        </yandex-map>
      </section>

      <section class="data">
        <h2 class="data__title">Контактная информация</h2>
          <div class="data__wrapper">
            <div class="data__element">
              <h3 class="data__element-title">Адрес</h3>
              <p class="data__element-description">г. Харьков, ул. Героев Труда 7, ТРЦ Караван</p>
              <h3 class="data__element-title">Работаем</h3>
              <p class="data__element-description">Ежедневно с 10:00 до 22:00</p>
            </div>
            <div class="data__element">
              <h3 class="data__element-title">Почта</h3>
              <p class="data__element-description"><a href="mailto:jumble.main@gmail.com">jumble.main@gmail.com</a></p>
              <h3 class="data__element-title">Телефон</h3>
              <p class="data__element-description"><a href="tel:+38(050)-666-66-66">+38(050)-666-66-66</a></p>
            </div>
            <div class="data__element">
              <h3 class="data__element-title">Социальные сети</h3>
              <div class="data__element-wrapper">
                <div class="data__element-icon">
                  <img src="../assets/Icons/instagram.svg"  width="40" height="40" alt="Инстаграм">
                </div>
                <a class=data__element-inst href="https://instagram.com/jumble.sweets">@jumble.sweets</a>
              </div>
            </div>
          </div>

      </section>
    </b-container>
  </div>

</template>

<script>
  export default {
    name: 'ContactsPage',
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
