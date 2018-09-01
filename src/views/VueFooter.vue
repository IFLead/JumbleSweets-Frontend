<template>
  <div class="footer">
    <b-container>
      <footer class="main-footer">
        <ul class="main-footer__list">
          <li class="main-footer__logo"><a href="#"></a></li>
          <li class="main-footer__main-information main-information">
            <h3 class="main-information__title">Основная информация</h3>
            <ul class="main-information__list">
              <li class="main-information__element"><a href="">Оплата и доставка</a></li>
              <li class="main-information__element"><a href="">Jumble Box</a></li>
              <li class="main-information__element"><a href="">О нас</a></li>
            </ul>
          </li>

          <li class="main-footer__client client">
            <h3 class="client__title">Клиенту</h3>
            <ul class="client__list">
              <li class="client__element"><a href="#">Личный кабинет</a></li>
              <li class="client__element"><a href="#">Мои заказы</a></li>
              <li class="client__element"><a href="#">Каталог товаров</a></li>
            </ul>
          </li>

          <li class="main-footer__feedback feedback">
            <h3 class="feedback__title">Всегда с Вами</h3>
            <ul class="feedback__list">
              <li class="feedback__element"><a href="#">Обратная связь</a></li>
              <li class="feedback__element"><a href="#">Наш Instagram</a></li>
              <li class="feedback__element"><a href="#">Контакты</a></li>
            </ul>
          </li>
        </ul>
        <p class="main-footer__copyright">Jumble Sweets © 2018</p>
      </footer>
    </b-container>
  </div>

</template>

<script>
  export default {
    name: 'VueFooter',
    components: {

    },
  };
</script>

<style lang="sass">


</style>
