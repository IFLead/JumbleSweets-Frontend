<template>
  <div class="header">
    <b-container>
      <header class="main-header">
        <a href="#" class="main-header__logo-link"><div class="main-header__logo"></div></a>
        <nav class="main-header__menu">
          <div class="main-header__hamburger">
            <div class="main-header__hamburger--midleline"></div>
          </div>
          <div class="main-header__close "></div> <!--Чтобы появился крестик добавить класс .show -->
          <ul class="main-header__menu-list "> <!--Чтобы появилось меню добавить класс .show -->
            <li class="main-header__menu-element">
              <a href="#">Главная</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">О нас</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">Контакты</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">Доставка и оплата</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">Jumble box</a>
            </li>
          </ul>
        </nav>
        <div class="main-header__user">
          <ul class="main-header__user-list "><!--Чтобы появилось меню добавить класс .show -->
            <li class="main-header__user-element">
              <el-badge :value="1" class="item">
                <a href="#">Корзина</a>
              </el-badge>
            </li>
            <li class="main-header__user-element"><a href="#">Личный кабинет</a></li>
          </ul>
        </div>
      </header>
    </b-container>
  </div>

</template>

<script>

  export default {
    name: 'VueHeader',
    components: {

    },
  };
</script>

<style lang="sass">


</style>
