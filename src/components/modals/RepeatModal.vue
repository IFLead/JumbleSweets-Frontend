<template>
  <b-container>
    <!--<b-modal class="repeat-modal" :id="id" hide-header hide-footer centered>-->

    <el-button type="text" @click="repeatVisible = true">repeat modal</el-button>

    <el-dialog :visible.sync="repeatVisible"
               class="repeat-modal">
      <div class="repeat-modal__wrapper">
        <div class="repeat-modal__icon">
          <img src="../../assets/Icons/refresh_icon.svg" width="50" height="50" alt="Повторить">
        </div>
        <div class="repeat-modal__title title">
          Повторим?
        </div>
        <div class="repeat-modal__text">
          Сейчас мы добавим в корзину все товары из этого заказа.<br><br>
          Данная функция не распространяется на Jumble Box, который
          вы наполняете вручную, потому что прелесть Jumble Box в его
          уникальности. Не бывает двух одинаковых боксов. Кроме того,
          коробки, которые вы собираете вручную, дарят больше эмоций
          за счёт упаковки и открытки.
        </div>
        <div class="repeat-modal__buttons">
          <el-button class="repeat-modal__buttons-okey">Да, хорошо</el-button>
          <el-button class="repeat-modal__buttons-close" @click="repeatVisible = false">Не хочу повторять</el-button>
        </div>
      </div>
    </el-dialog>

  <!--</b-modal>-->
  </b-container>

</template>
<script>
export default {
  name: 'RepeatModal',
  components: {
  },
  data() {
    return {
      repeatVisible: false,
    };
  },
};
</script>

<style lang="sass">

.repeat-modal

  .el-dialog
    max-width: 600px
    border-radius: 0px

    &__header
      display: none

    &__body
      padding:
        top: 35px
        left: 75px
        right: 75px
        bottom: 50px

  &__icon
    text-align: center
    margin:
      bottom: 15px

  &__title
    font-weight: 700
    color: #000000
    text-align: center
    margin:
      bottom: 46px

  &__text
    color: #000000
    text-align: center
    margin:
      bottom: 66px

  &__buttons
    display: flex
    justify-content: center

  .repeat-modal__buttons-close
    background: none
    color: #707070
    &:hover, &:focus
      background: none
      color: #707070

</style>
