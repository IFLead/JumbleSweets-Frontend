<template>
  <div class="profile">
    <b-container>
      <b-row>
        <b-col cols="4">
          <aside class="left-panel">
            <div class="left-panel__user">
              <div class="left-panel__user-wrapper">
                <h3 class="left-panel__user-title">Здравствуйте,<br><span>Иванов Иван Иванович</span></h3>
              </div>
            </div>
            <div class="left-panel__wrapper">
              <div class="left-panel__menu">
                <div @click="panelIndex = 1" class="left-panel__menu-element">Основная информация</div>
                <div @click="panelIndex = 2" class="left-panel__menu-element">Мои заказы</div>
                <div @click="panelIndex = 3" class="left-panel__menu-element">Список желаний</div>
                <div @click="panelIndex = 4" class="left-panel__menu-element">Выйти</div>
              </div>
            </div>
          </aside>
        </b-col>

        <b-col cols="8">
          <div class="panel-content">
            <div v-show="panelIndex === 1" class="personal-data">
              <div class="personal-data__title title">Личный кабинет</div>
              <div class="personal-data__subtitle">Здесь вы можете изменить или добавить свои личные данные.</div>
              <div class="personal-data__personal">
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Фамилия</div>
                  <el-input class="personal-data__personal-field" placeholder="Иванов" v-model="input"></el-input>
                </div>
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Имя</div>
                  <el-input class="personal-data__personal-field" placeholder="Иван" v-model="input"></el-input>
                </div>
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Отчество</div>
                  <el-input class="personal-data__personal-field" placeholder="Иванович" v-model="input"></el-input>
                </div>
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Телефон</div>
                  <el-input class="personal-data__personal-field" placeholder="+3805012312312" v-model="input"></el-input>
                </div>
              </div>
              <div class="personal-data__button">
                <el-button>Сохранить изменения</el-button>
              </div>
            </div>
          </div>
        </b-col>

      </b-row>

    </b-container>
  </div>

</template>

<script>
    export default {
      name: "Profile",
      components: {
      },
      data() {
        return {
          panelIndex: 1
        }
      },
    }
</script>

<style lang="sass">

.profile
  font-family: ProximaNova
  font-size: 15px
  color: #000000
  font-weight: 400
  line-height: 25px
  margin:
    top: 30px
  padding:
    bottom: 50px

.left-panel

  &__user-wrapper
    position: relative
    z-index: 100

  &__user-title
    color: #ffffff
    font-size: 15px
    font-weight: 400
    line-height: 25px
  span
    font-size: 18px
    font-weight: 600

  &__user
    max-width: 362px
    background-size: cover
    background-repeat: no-repeat
    position: relative
    background-color: grey
    background-image: url("../assets/user_back.jpg")
    background-position: 0 0px
    padding:
      top: 30px
      left: 30px
      bottom: 76px
    &:after
      content: ''
      z-index: 1
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.75)

  &__wrapper
    max-width: 362px
    background-color: #f8f8f8
    margin:
      top: 35px

  &__menu
    padding:
      top: 29px
      bottom: 30px

  &__menu-element
    text-align: center
    padding:
      top: 21px
      bottom: 21px

    &:hover, &:focus
      background-color: #E70068
      color: #ffffff
      cursor: pointer

.personal-data
  padding-left: 30px

  &__title
    margin:
      bottom: 27px
      top: 15px

  &__subtitle
    color: #707070
    margin:
      bottom: 88px

  &__personal
    display: flex
    flex-wrap: wrap
    max-width: 510px
    justify-content: space-between

  &__personal-elem
    width: 234px

  &__personal-label
    font-size: 18px
    line-height: 25px
    font-weight: 700
    margin:
      bottom: 24px

  &__personal-field
    margin-bottom: 30px

    .el-input__inner
      width: 234px
      padding: 10px 5px
      border:
        top: 1px solid #ffffff
        left: 1px solid #ffffff
        right: 1px solid #ffffff
        bottom: 1px solid #c4c4c4
      font-size: 15px
    .el-input__inner:hover
      border-bottom: 1px solid #c4c4c4
    .el-input__inner:focus
      border:
        top: 1px solid #ffffff
        left: 1px solid #ffffff
        right: 1px solid #ffffff
        bottom: 1px solid #c4c4c4

  &__button
    margin-top: 70px
    .el-button
      width: 244px
      height: 50px
      box-sizing: border-box
      background-image: url("../assets/Icons/save-button-profile.svg")
      background-repeat: no-repeat
      background-size: 20px 20px
      background-position: right 30px top 14px
      padding:
        right: 60px


</style>
