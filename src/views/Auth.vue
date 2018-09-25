<template>
  <div class="auth">
    <b-container>
      <div v-show="isUser === true" class="authentication">
        <section class="info info--aut">
          <div class="info__wrapper">
            <h2 class="info__title">Давайте знакомиться</h2>
            <p class="info__description info__description--meet">
              Через личный профиль мы узнаем о вас очень многое.
              Например, что вы заказывали у нас, ваши предпочтения.
              Это помогает нам улучшить сервис и не потерять клиента.
             </p>
            <h2 class="info__title">Социальные сети</h2>
            <p class="info__description info__description--social">
              Авторизация через социальные сети существенно экономит ваше время.
              Не нужно заполнять скучные формы, что позволяет быстрее перейти к самому главному - к сладостям и подаркам.
            </p>
          </div>
        </section>

        <section class="authorization">

          <div class="authorization__site">
            <div class="authorization__site-wrapper">
              <el-button class="authorization__button authorization__button--google">Войти через Google</el-button>
              <el-button class="authorization__button authorization__button--facebook">Войти через Facebook</el-button>
            </div>
          </div>

          <div class="authorization__line"></div>

          <div class="authorization__manually">
            <div class="authorization__data">
              <div class="authorization__data-wrapper">
                <div class="authorization__data-mail">
                  <div class="authorization__data-mail-icon">
                    <img src="../assets/Icons/user.svg" width="16" height="20" alt="Контакты">
                  </div>
                  <div class="authorization__data-input">
                    <el-input placeholder="Почта или телефон" v-model="input_mail"></el-input>
                  </div>
                </div>
                <div class="authorization__data-pass">
                  <div class="authorization__data-pass-icon">
                    <img src="../assets/Icons/key.svg" width="9" height="20" alt="Пароль">
                  </div>
                  <div class="authorization__data-input">
                    <el-input type="password" placeholder="Пароль" v-model="input_pass"></el-input>
                  </div>
                  <div class="authorization__data-pass-eye">
                    <img src="../assets/Icons/eye-close-up.svg" width="18" height="12" alt="Подсказка">
                  </div>
                </div>
              </div>
            </div>
            <div class="authorization__actives">
              <el-button class="authorization__actives-button">Войти</el-button>
              <div class="authorization__actives-check">
                <el-checkbox v-model="checked">Запомнить меня</el-checkbox>
              </div>
            </div>
            <div class="authorization__pointerlink-wrapper">
              <div class="authorization__pointerlink">
                <a href="#" @click="isUser = false">Ещё не зарегистрированы? Вам сюда</a>
              </div>
            </div>
          </div>

        </section>
      </div>

      <div v-show="isUser === false" class="registration">

        <section class="info info--reg">
          <div class="info__wrapper">
            <h2 class="info__title">Давайте знакомиться</h2>
            <p class="info__description info__description--meet">
              Через личный профиль мы узнаем о вас очень многое.
              Например, что вы заказывали у нас, ваши предпочтения.
              Это помогает нам улучшить сервис и не потерять клиента.
            </p>
            <h2 class="info__title">Регистрация</h2>
            <p class="info__description info__description--social">
              Мы сделали несложную форму регистрации для тех, кто не любит сидеть в социальных сетях.
            </p>
          </div>
        </section>

        <section class="registr">
          <div class="registr__data">
            <div class="registr__wrapper">
              <div class="registr__data-mail">
                <div class="registr__data-mail-icon">
                  <img src="../assets/Icons/user.svg" width="16" height="20" alt="Контакты">
                </div>
                <div class="registr__data-input">
                  <el-input placeholder="Почта или телефон" v-model="input_mail"></el-input>
                </div>
              </div>
              <div class="registr__data-pass">
                <div class="registr__data-pass-icon">
                  <img src="../assets/Icons/key.svg" width="9" height="20" alt="Пароль">
                </div>
                <div class="registr__data-input">
                  <el-input v-bind:type="visible_pass" placeholder="Пароль" v-model="input_pass"></el-input>
                </div>
                <div @mouseover="visible_pass = 'text'" @mouseout="visible_pass = 'password'" class="registr__data-pass-eye">
                <!--<div v-on:click="visible_pass = 'text'" class="registr__data-pass-eye">-->
                  <img src="../assets/Icons/eye-close-up.svg" width="18" height="12" alt="Подсказка">
                </div>
              </div>
              <div class="registr__data-repass">
                <div class="registr__data-repass-icon">
                  <img src="../assets/Icons/key.svg" width="9" height="20" alt="Повторите пароль">
                </div>
                <div class="registr__data-input">
                  <el-input v-bind:type="visible_repass" placeholder="Пароль" v-model="input_repass"></el-input>
                </div>
                <div @mouseover="visible_repass = 'text'" @mouseout="visible_repass = 'password'" class="registr__data-repass-eye">
                  <img src="../assets/Icons/eye-close-up.svg" width="18" height="12" alt="Подсказка">
                </div>
              </div>
            </div>
          </div>

          <div class="registr__actives">
            <div class="registr__actives-wrapper">
              <el-button class="registr__actives-button">
                Регистрация
              </el-button>
              <div class="registr__actives-check">
                <el-checkbox v-model="checked">Согласен с политикой<br>конфиденциальности</el-checkbox>
              </div>
            </div>
          </div>
          <div class="registr__pointerlink-wrapper">
            <div class="registr__pointerlink">
              <a href="#" @click="isUser = true">У вас уже есть учётная запись? Войдите</a>
            </div>
          </div>
        </section>

      </div>

    </b-container>

  </div>

</template>

<script>

    export default {
      name: "Auth",
      components: {
      },
      data() {
        return {
          input_mail: '',
          input_pass: '',
          input_repass: '',
          checked: false,
          isUser: false,
          visible_pass: 'password',
          visible_repass: 'password'
        }
      },
    }

</script>

<style lang="sass">

.auth
  font-family: ProximaNova
  font-size: 15px
  color: #fff
  font-weight: 400
  line-height: 25px

.info--aut
  background-image: url("../assets/joshua-ness-225844-unsplash.jpg")
  background-position: 0 -230px
  @media (max-width: 991.98px)
    background-position: 0 -50px

.info--reg
  background-image: url("../assets/registr_back.jpg")
  background-position: 0 -80px
  @media (max-width: 767.98px)
    background-position: 0 -50px

.info
  margin-top: 10px
  position: relative
  background-color: grey
  background-repeat: no-repeat
  background-size: cover
  padding:
    left: 70px
    top: 35px
    right: 140px
    bottom: 0px
  color: #ffffff
  @media (max-width: 991.98px)
    padding:
      left: 70px
      right: 70px
      bottom: 0px
  @media (max-width: 767.98px)
    padding:
      left: 40px
      right: 40px
      bottom: 0px

  &__wrapper
    position: relative
    z-index: 100

  &__title
    font-size: 30px
    line-height: 35px
    font-weight: 700
    margin-bottom: 0
    /*@media (max-width: 575.98px)*/
      /*font-size: 28px*/

  &__description
    margin-bottom: 0
    max-width: 956px
    padding:
      top: 40px

  &__description--meet
    padding:
      bottom: 60px

  &__description--social

  &::after
    height: 101%
    min-width: 320px
    z-index: 10
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.99))

.authorization
  background: #000000
  padding:
    top: 55px
    bottom: 130px
  display: flex
  justify-content: center
  @media (max-width: 991.98px)
    flex-wrap: wrap
    padding:
      top: 20px
      bottom: 60px
  @media (max-width: 767.98px)
    padding:
      top: 0px

  //padding:
    left: 178px
    right: 178px


  &__line
    width: 1px
    height: 270px
    background-color: #f8f8f8
    margin:
      right: 112px
      left: 112px
    @media (max-width: 991.98px)
      display: none

  &__site
    max-width: 240px
    padding:
      top: 65px
      bottom: 65px
    @media (max-width: 991.98px)
      display: flex
      justify-content: center
      min-width: 500px
      padding:
        top: 40px
        bottom: 40px

  &__site-wrapper
    @media (max-width: 991.98px)
      display: flex
      flex-direction: column

  .authorization__button
    height: 50px
    width: 240px
    background-repeat: no-repeat
    background-size: 20px 20px
    background-position: right 30px top 15px
    padding:
      right: 60px

  .authorization__button--google
    background-image: url("../assets/Icons/google.svg")
    margin:
      bottom: 40px

  .authorization__button--facebook
    background-image: url("../assets/Icons/facebook-logo.svg")

  .el-button + .el-button
    margin-left: 0px

  &__data-mail
    display: flex

  &__data-mail-icon
    text-align: center
    min-width: 16px
    margin:
      right: 15px
    @media (max-width: 575.98px)
      margin:
        right: 10px

  &__data-pass-icon
    text-align: center
    min-width: 16px
    margin:
      right: 15px
    @media (max-width: 575.98px)
      margin:
        right: 10px

  &__data-pass-eye
    opacity: 0.5
    margin:
      left: 10px
    @media (max-width: 575.98px)
      margin:
        left: 5px
  &__data-pass-eye:hover
    opacity: 1

  &__data-pass
    display: flex

  &__data-input
    width: 264px
    margin:
      bottom: 35px
    .el-input__inner
      border-radius: 0
      padding: 0px 5px
      border:
        top: none
        left: none
        right: none
        bottom: 1px solid #c4c4c4
      font-size: 15px
      background: none
      color: #dcdcdc
    .el-input__inner:hover
      border-bottom: 1px solid #c4c4c4
    .el-input__inner:focus
      border:
        top: none
        left: none
        right: none
        bottom: 1px solid #c4c4c4

  &__actives
    display: flex
    justify-content: space-between
    margin:
      top: 15px
      bottom: 45px
    @media (max-width: 575.98px)
      flex-direction: column-reverse
      align-items: center

  .authorization__actives-button
    width: 150px
    height: 43px
    padding: 15px 30px
    @media (max-width: 575.98px)
      width: 210px
      height: 50px

  &__actives-check
    font-weight: 400
    @media (max-width: 575.98px)
      margin:
        bottom: 20px


  .el-checkbox__inner
    background: none
    border-radius: 0

  &__pointerlink-wrapper
    text-align: center

  &__pointerlink
    display: inline-block
    line-height: 23px
    border:
      bottom: 1px dashed #fffab9
  &__pointerlink a
    color: #fffab9


.registr
  background: #000000
  padding:
    top: 80px
    bottom: 130px

  &__data
    display: flex
    justify-content: center

  &__data-mail
    display: flex

  &__data-mail-icon
    text-align: center
    min-width: 16px
    margin:
      right: 15px
    @media (max-width: 575.98px)
      margin:
        right: 5px
        left: 5px

  &__data-pass
    display: flex

  &__data-pass-icon
    text-align: center
    min-width: 16px
    margin:
      right: 15px
    @media (max-width: 575.98px)
      margin:
        right: 5px
        left: 5px

  &__data-pass-eye
    opacity: 0.5
    margin:
      left: 10px
    @media (max-width: 575.98px)
      margin:
        left: 5px
  &__data-pass-eye:hover
    opacity: 1

  &__data-repass
    display: flex

  &__data-repass-icon
    text-align: center
    min-width: 16px
    margin:
      right: 15px
    @media (max-width: 575.98px)
      margin:
        right: 5px
        left: 5px

  &__data-repass-eye
    opacity: 0.5
    margin:
      left: 10px
    @media (max-width: 575.98px)
      margin:
        left: 5px
  &__data-repass-eye:hover
    opacity: 1

  &__data-input
    width: 264px
    margin:
      bottom: 40px
    .el-input__inner
      border-radius: 0
      padding: 0px 5px
      border:
        top: none
        left: none
        right: none
        bottom: 1px solid #c4c4c4
      font-size: 15px
      background: none
      color: #dcdcdc
    .el-input__inner:hover
      border-bottom: 1px solid #c4c4c4
    .el-input__inner:focus
      border:
        top: none
        left: none
        right: none
        bottom: 1px solid #c4c4c4

  &__actives
    display: flex
    justify-content: center
    margin:
      bottom: 45px

  &__actives-wrapper
    display: flex
    justify-content: space-between
    min-width: 364px
    @media (max-width: 575.98px)
      flex-direction: column-reverse
      align-items: center

  .registr__actives-button
    width: 150px
    height: 43px
    padding: 15px 30px
    @media (max-width: 575.98px)
      width: 210px
      height: 50px

  &__actives-check
    font-weight: 400
    @media (max-width: 575.98px)
      margin:
        bottom: 20px

  .el-checkbox
    display: flex
    align-items: center

  .el-checkbox__inner
    background: none
    border-radius: 0

  &__pointerlink-wrapper
    display: flex
    justify-content: center

  &__pointerlink
    display: inline-block
    line-height: 23px
    border:
      bottom: 1px dashed #fffab9
  &__pointerlink a
    color: #fffab9

</style>
