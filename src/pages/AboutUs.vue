<template>
  <div class="about">
    <b-container>
      <section class="aboutus">
        <div class="aboutus__wrapper">
          <h2 class="aboutus__title">О нас</h2>
          <p class="aboutus__description">
            Компания Jumble Sweets основана в городе Харькове в 2018-ом году.<br>
            <br>
            Наша миссия - поставлять самые разнообразные сладости со всего мира в Украину. В нашем каталоге представлено
            более 10 видов товара. Именно наша компания поможет Вам с лёгкостью справиться с предпраздничной суетой.<br>
            <br>
            Вдохните глоток свежего креатива и отойдите в сторону от банальных сюрпризов. Jumble Sweets дарит радость от
            подарков всем желающим.
          </p>
          <div class="aboutus__schedule">
            <div class="aboutus__item aboutus__item--days">
              <div class="aboutus__item-icon">
                <img src="../assets/Icons/Calendar.svg" width="60" height="60" alt="Дни работы">
              </div>
              <div class="aboutus__item-wrapper">
                <h3 class="aboutus__item-title">Дни работы</h3>
                <p class="aboutus__item-subtitle">С понедельника по воскресенье</p>
              </div>
            </div>
            <div class="aboutus__item aboutus__item--clock">
              <div class="aboutus__item-icon">
                <img src="../assets/Icons/Clock.svg" width="60" height="60" alt="Время работы">
              </div>
              <div class="aboutus__item-wrapper">
                <h3 class="aboutus__item-title">Время работы</h3>
                <p class="aboutus__item-subtitle">Работаем с 10:00 до 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="support">
        <div class="support__wrapper">
          <h2 class="support__title">Поддержка и отзывчивость</h2>
          <p class="support__description">
            Клиенты Jumble Sweets всегда могут получить консультацию от наших менеджеров, достаточно позвонить по одному
            из указанных на сайте номеров или написать нам на почту pochta@gmail.com. Менеджер поможет Вам подобрать
            нужный товар и ответит на всё интересующие Вас вопросы.<br>
            <br>
            Jumble Sweets дорожит доверием клиентов, мы полностью отвечаем за подлинность и качество предлагаемого
            товара. Также мы следим за новыми течениями и постоянно расширяем ассортимент нашего магазина, учитывая
            пожелания клиентов.
          </p>
        </div>
      </section>

    </b-container>
  </div>

</template>

<script>
export default {
  name: 'AboutUs',
  components: {},
};
</script>

<style lang="sass">

  .about
    font-family: ProximaNova
    font-size: 15px
    color: #fff
    font-weight: 400
    line-height: 25px

  .aboutus
    margin-top: 10px
    position: relative
    background-color: grey
    background-image: url("../assets/about_back.jpg")
    background-repeat: no-repeat
    background-size: cover
    background-position: 0 -230px
    padding:
      left: 70px
      top: 35px
      right: 70px
      bottom: 0px
    color: #ffffff
    @media (max-width: 1199.98px)
      background-position: 0 -100px
    @media (max-width: 991.98px)
      background-position: 0 0px
    @media (max-width: 767.98px)
      padding:
        left: 30px
        right: 30px

    &__title
      font-size: 30px
      line-height: 35px
      font-weight: 700
      @media (max-width: 575.98px)
        font-size: 28px

    &__description
      max-width: 956px
      margin-top: 42px

    &__schedule
      display: flex
      margin-top: 74px
      justify-content: space-around
      flex-wrap: wrap
      @media (max-width: 991.98px)
        justify-content: flex-start
    //  background-color: rgba(0, 0, 0, 0.6)

    &__item
      display: flex
      padding-right: 10px
      margin:
        bottom: 20px

    &__item-icon
      padding-right: 25px
    &__item-icon img
      max-width: 60px

    &__item-wrapper
      padding-top: 5px

    &__item-title
      font-size: 20px

    &__item-subtitle
      font-size: 15px
      color: #c4c4c4

    &::after
      //height: 470px
      //min-width: 320px
      z-index: 10
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .99))
    //background-color: rgba(0, 0, 0, 0.6)
    //@media (max-width: 767.98px)
    //  margin:
    //    bottom: 20px
    //background-image: url("assets/back_back.png")
    //@media (max-width: 1199.98px)
    //  background-image: none
    //  background-color: rgba(0, 0, 0, 0.6)


    &__wrapper
      z-index: 100
      position: relative

  .support
    background-color: #000
    padding:
      left: 70px
      top: 90px
      right: 70px
      bottom: 74px
    color: #ffffff
    @media (max-width: 767.98px)
      padding:
        top: 40px
        left: 30px
        right: 30px

    &__title
      font-size: 30px
      line-height: 35px
      font-weight: 700
      @media (max-width: 575.98px)
        font-size: 28px

    &__description
      max-width: 956px
      margin-top: 42px


</style>
