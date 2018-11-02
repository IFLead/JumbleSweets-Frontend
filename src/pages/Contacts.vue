<template>
  <div class="contacts">
    <b-container>
      <!--<div class="map">-->
      <!--<iframe src="https://goo.gl/maps/eHffYJ9gW2M2" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
      <!--</div>-->
      <section class="map">
        <yandex-map
          :coords="[50.029227, 36.327978]"
          :cluster-options="{
            1: {clusterDisableClickZoom: true}
          }"
          :behaviors="['drag']"
          :controls="[]"
          :placemarks="placemarks"
          zoom="17"
          style="width: 100%; height: 400px;"
          map-type="map"
        >

        </yandex-map>
      </section>

      <section class="data">
        <h2 class="data__title">Контактная информация</h2>
        <div class="data__wrapper">
          <div class="data__element data__element--address">
            <h3 class="data__element-title">Адрес</h3>
            <p class="data__element-description">г. Харьков, ул. Героев Труда 7, ТРЦ Караван</p>
            <h3 class="data__element-title">Работаем</h3>
            <p class="data__element-description">Ежедневно с 10:00 до 22:00</p>
          </div>
          <div class="data__element data__element--connect">
            <h3 class="data__element-title">Почта</h3>
            <p class="data__element-description"><a href="mailto:jumble.main@gmail.com">jumble.main@gmail.com</a></p>
            <h3 class="data__element-title">Телефон</h3>
            <p class="data__element-description"><a href="tel:+38(050)-666-66-66">+38(050)-666-66-66</a></p>
          </div>
          <div class="data__element data__element--social">
            <h3 class="data__element-title">Социальные сети</h3>
            <div class="data__element-wrapper">
              <div class="data__element-icon">
                <img src="../assets/Icons/instagram.svg" width="40" height="40" alt="Инстаграм">
              </div>
              <a class="data__element-inst" href="https://instagram.com/jumble.sweets">@jumble.sweets</a>
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
            click() {},
          },
        },
      ],
    };
  },
};
</script>

<style lang="sass">

  .contacts
    font-family: ProximaNova
    font-size: 15px
    color: #000000
    font-weight: 400
    line-height: 25px

  .map
    height: 400px

  .data
    margin:
      top: 50px
      bottom: 50px
    &__title
      text-align: center
      margin-bottom: 82px
      font-size: 30px
      line-height: 37px
      font-weight: 700
      @media (max-width: 1199.98px)
        margin-bottom: 45px
      @media (max-width: 575.98px)
        font-size: 28px
    &__wrapper
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      @media (max-width: 1199.98px)
        justify-content: center
      @media (max-width: 991.98px)
        flex-direction: column
    &__element
      color: #000000
      background-color: #F8F8F8
      padding:
        top: 40px
        left: 35px
        bottom: 28px
        right: 110px
      @media (max-width: 991.98px)
        text-align: center
        padding:
          left: 0px
          right: 0px
      @media (max-width: 575.98px)
        padding:
          top: 30px
          bottom: 28px
    &__element--social
      @media (max-width: 1199.98px)
        margin-top: 40px
    &__element--connect
      @media (max-width: 991.98px)
        margin-top: 40px
    &__element-title
      font-size: 20px
      line-height: 24px
      font-weight: 700
      margin-bottom: 20px
    &__element-description
      line-height: 18px
      margin-bottom: 35px
    &__element-description a
      color: #000000
    &__element-wrapper
      display: inline-block
    &__element-icon
      display: inline-block
      margin-right: 20px
    &__element-inst
      color: #707070
    &__element-inst:hover
      color: #E70068
      text-decoration: none

</style>
