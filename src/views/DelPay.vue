<template>
  <div class="delpay">
    <b-container>

      <section class="variants">
        <h2 class="variants__title">Доставка и оплата</h2>
        <div class="variants__wrapper">
          <div class="variants__element">
            <div class=" variants__element-pickup">
              <div class="variants__element-wrapper">
                <h3 class="variants__element-title">Самовывоз</h3>
                <p class="variants__element-description">Для жителей Харькова есть возможность забрать заказ в нашем магазине по адресу: ул. Героев труда 7, ТРЦ Караван.<br><br>
                  Работаем ежедневно с 10:00 до 22:00.</p>
              </div>
            </div>
          </div>
          <div class="variants__element">
            <div class="variants__element-kharkiv">
              <div class="variants__element-wrapper">
                <h3 class="variants__element-title">По Харькову</h3>
                <p class="variants__element-description">Доставка товара по Харькову может быть осуществлена по указанному адресу на необходимую дату.<br><br>
                  Оплата происходит при получении товара.</p>
              </div>
            </div>
          </div>
          <div class="variants__element">
            <div class="variants__element-ukraine">
              <div class="variants__element-wrapper">
                <h3 class="variants__element-title">По Украине</h3>
                <p class="variants__element-description">Отправляем через Новую почту. Стоимость отправки зависит от веса посылки и города.<br><br>
                  Заказ высылается в течение 24-х часов после выполнения.<br><br>
                  Вы можете оплатить товар при получении наложенным платежом или произвести предоплату на карту банка.</p><br>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="questions">
        <h2 class="questions__title">Возникли вопросы?</h2>
        <p class="questions__description">Оставьте ваш номер телефона, и мы поможем вам в ближайшее время</p>
      </section>

      <section class="ring">
        <div class="ring__number">
          <div class="ring__number-input">
            <el-input v-model="input" placeholder="Номер телефона"></el-input>
          </div>
          <div class="ring__number_conf">
            <el-checkbox v-model="checked">Согласен с политикой конфиденциальности</el-checkbox>
          </div>
        </div>
        <el-button class="ring__button">Заказать обратный звонок</el-button>
      </section>

    </b-container>
  </div>

</template>

<script>
export default {
  name: 'Delivery',
  components: {
  },
  data() {
    return {
      input: '',
      checked: false,
    };
  },
};
</script>

<style lang="sass">


</style>
