<template>
  <div class="header">
    <header class="main-header">
      <b-container>
        <b-row>
          <b-col>
            <div class="main-header__content">
              <router-link to="/" class="main-header__logo"></router-link>
              <a href="#" class="main-header__title" @click="openMenu">Меню</a>
              <div :class="{show: menuOpen}" class="main-header__menu menu">
                <ul class="menu__list">
                  <li v-if="getAuthStatus" class="menu__cart">
                    <el-badge :value="getCartAmount">
                      <div @click="checkCart()"></div>
                    </el-badge>
                  </li>
                  <li class="menu__close" @click="closeMenu"></li>
                  <li class="menu__element"><router-link to="/">Главная</router-link></li>
                  <li class="menu__element"><router-link to="/about">О нас</router-link></li>
                  <li class="menu__element"><router-link to="/contacts">Контакты</router-link></li>
                  <li class="menu__element"><router-link to="/delivery">Доставка и оплата</router-link></li>
                  <li v-if="this.$JUMBLE_BOX_ENABLED" class="menu__element">
                    <router-link to="/jumble_box">Jumble Box</router-link>
                  </li>

                  <li class="menu__element menu__element--mobile mobile">
                    <div v-if="getAuthStatus">
                      <router-link to="/profile" class="mobile__login">Личный кабинет</router-link>
                    </div>
                    <div v-else>
                      <router-link to="/auth" class="mobile__login">Войти</router-link>
                    </div>
                    <router-link to="#" class="mobile__inst">
                      <span>
                        <svg id="instagram" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                          <g id="Group_387" data-name="Group 387">
                            <g id="Group_386" data-name="Group 386">
                              <path id="Path_116" data-name="Path 116" style="fill #ffffff;" d="M27.5,0h-15A12.5,12.5,0,0,0,0,12.5v15A12.5,12.5,0,0,0,12.5,40h15A12.5,12.5,0,0,0,40,27.5v-15A12.5,12.5,0,0,0,27.5,0Zm8.75,27.5a8.76,8.76,0,0,1-8.75,8.75h-15A8.76,8.76,0,0,1,3.75,27.5v-15A8.76,8.76,0,0,1,12.5,3.75h15a8.76,8.76,0,0,1,8.75,8.75Z"/>
                            </g>
                          </g>
                          <g id="Group_389" data-name="Group 389" transform="translate(10 10)" >
                            <g id="Group_388" data-name="Group 388">
                              <path id="Path_117" data-name="Path 117" d="M138,128a10,10,0,1,0,10,10A10,10,0,0,0,138,128Zm0,16.25a6.25,6.25,0,1,1,6.25-6.25A6.259,6.259,0,0,1,138,144.25Z" transform="translate(-128 -128)"/>
                            </g>
                          </g>
                          <g id="Group_391" data-name="Group 391" transform="translate(29.418 7.918)">
                            <g id="Group_390" data-name="Group 390">
                              <circle id="Ellipse_10" style="fill #ffffff;" data-name="Ellipse 10" cx="1.332" cy="1.332" r="1.332"/>
                            </g>
                          </g>
                        </svg>
                    </span>Мы в Instagram</router-link>
                    <ul class="mobile__contacts">
                      <li class="mobile__element"><a href="#">+38(050)-666-66-66</a></li>
                      <li class="mobile__element"><a href="#">help@jumble-sweets.com.ua</a></li>
                      <li class="mobile__element">г. Харьков, Героев труда 7, ТРЦ Караван</li>
                    </ul>
                  </li>
                </ul>
                <div class="menu__background"></div>
              </div>

              <ul class="main-header__user user">
                <li v-if="getAuthStatus" class="user__element user__element--cart">
                  <el-badge :value="getCartAmount">
                    <div @click="checkCart()"><span>Корзина</span></div>
                  </el-badge>
                </li>
                <li v-if="getAuthStatus" class="user__element user__element--login">
                  <router-link to="/profile">Личный кабинет</router-link>
                </li>
                <li v-else class="user__element user__element--login">
                  <router-link to="/auth">Войти</router-link>
                </li>
              </ul>

            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VueHeader',
  components: {},
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    ...mapGetters(['getCartAmount', 'getAuthStatus']),
  },
  methods: {
    checkCart() {
      if (this.getCartAmount > 0) {
        this.$router.push('/cart');
      } else {
        this.$message({
          message: 'Ваша корзина пуста',
          center: true,
          duration: this.$MESSAGE_DURATION,
        });
      }
    },
    openMenu() {
      this.menuOpen = true;
      const body = document.querySelector('body');
      const background = document.querySelector('.menu__background');

      body.classList.add('no-scroll');
      background.addEventListener('click', () => {
        this.closeMenu();
      });
    },
    closeMenu() {
      this.menuOpen = false;
      const body = document.querySelector('body');
      body.classList.remove('no-scroll');
    },
  },
};
</script>

<style lang="sass">
.header
  .main-header
    @media (max-width: 991.98px)
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.05)
    &__content
      display: flex
      align-items: center
      padding:
        top: 20px
        bottom: 23px
    &__title
      display: none
      @media (max-width: 991.98px)
        display: inline-block
        line-height: 20px
        padding:
          left: 36px
        color: #000000
        background-repeat: no-repeat
        background-image: url("../assets/Icons/menu.svg")
        background-size: contain
        background-position: 0 center
        &:hover, &:focus
          color: #e70068
          text-decoration: none
      @media (max-width: 575.98px)
        margin:
          left: 15px

    &__logo
      display: inline-block
      width: 103px
      height: 55px
      background-image: url("../assets/Icons/logo-pink.svg")
      background-repeat: no-repeat
      background-size: contain
      background-position: center center
      margin:
        right: 55px
      &:hover, &:focus
        text-decoration: none
      @media (max-width: 991.98px)
        display: none
    .menu.show
      display: block
    .menu
      @media (max-width: 991.98px)
        display: none
        position: fixed
        z-index: 10000
        right: 0
        height: 100%
        top: 0
        width: 297px
        z-index: 1000
      &__background
        display: none
        @media (max-width: 991.98px)
          display: block
          z-index: 10
          position: fixed
          top: 0
          left: 0
          bottom: 0
          right: 0
          background-color: rgba(0, 0, 0, 0.6)
      @media (max-width: 767.98px)
        width: 260px


      &__close
        display: none
        @media (max-width: 991.98px)
          display: block
          position: fixed
          top: 30px
          right: 345px
          width: 20px
          height: 20px
          cursor: pointer
          background-image: url("../assets/Icons/cancel.svg")
          background-repeat: no-repeat
          background-size: contain
          background-position: center center
        @media (max-width: 384.98px)
          right: 285px
      &__list
        overflow: auto
        display: flex
        list-style: none
        padding:
          left: 0
        margin:
          bottom: 0
        background: #ffffff
        @media (max-width: 991.98px)
          position: relative
          z-index: 1000
          height: 100%
          flex-direction: column
          padding:
            top: 121px
            left: 30px
      &__cart
        display: none
        .el-badge__content
          width: 20px
          right: 3px
        @media (max-width: 991.98px)
          display: inline-block
          position: absolute
          top: 21px
          right: 44px
          a
            display: inline-block
            width: 20px
            height: 20px
            background-image: url("../assets/Icons/shopping-cart.svg")
            background-repeat: no-repeat
            background-size: contain
            background-position: center center
      &__element
        line-height: 20px
        margin:
          right: 47px

        @media (max-width: 1199.98px)
          margin:
            right: 30px
        @media (max-width: 991.98px)
          line-height: 27px
          margin:
            bottom: 22px
        a
          display: inline-block
          transition: all 0.2s ease
          color: #000000
          line-height: 20px
          font-weight: 700
          &:hover, &:focus
            text-decoration: none
            color: #e70068
          @media (max-width: 991.98px)
            line-height: 27px
            font-size: 20px

    .mobile
      display: none
      @media (max-width: 991.98px)
        display: flex
        flex-direction: column
      &__contacts
        padding:
          left: 0
        list-style: none
        margin:
          top: 54px
          bottom: 104px
      &__element
        line-height: 20px
        margin:
          bottom: 18px
        a
          transition: all 0.2s ease
          line-height: 20px
          color: #000000
          font-weight: 400
          font-size: 15px
          &:hover, &:focus
            color: #000000
            text-decoration: underline
      &__login
        display: inline-block
        line-height: 20px
        color: #000000
        margin:
          top: 25px
          bottom: 100px
        &:hover, &:focus
          text-decoration: none
          color: #e70068
      &__inst
        display: inline-block
        line-height: 20px
        color: #000000
        background-size: 20px 20px
        background-position: 0 2px
        .icon
          display: inline-block
          width: 20px
          height: 20px
          fill: #e70068
          margin:
            right: 12px
            top: -4px
        &:hover, &:focus
          text-decoration: none
          color: #e70068
    .user
      padding:
        left: 0
      margin:
        left: auto
        bottom: 0
        right: 18px
      list-style: none
      display: flex
      @media (max-width: 1199.98px)
        margin:
          right: 0
      &__element
        a
          display: inline-block
          transition: all 0.2s ease
          color: #000000
          line-height: 20px
          font-weight: 700
          &:hover, &:focus
            text-decoration: none
            color: #e70068
        &--cart
          cursor: pointer
          font-weight: 700
          margin:
            right: 48px
            display: flex
            align-items: center
          .el-badge__content
            width: 20px
            right: 3px
          @media (max-width: 1199.98px)
            margin:
              right: 20px
          @media (max-width: 991.98px)
            span
              display: none
            a
              display: inline-block
              width: 20px
              height: 20px
              background-image: url("../assets/Icons/shopping-cart.svg")
              background-repeat: no-repeat
              background-size: contain
              background-position: center center
          @media (max-width: 767.98px)
            padding-top: 7px
          @media (max-width: 575.98px)
            right: 40px

        &--login
          @media (max-width: 991.98px)
            display: none
</style>
