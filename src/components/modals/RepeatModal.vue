<template>
  <b-container>
    <!--<b-modal class="repeat-modal" :id="id" hide-header hide-footer centered>-->

    <!--<el-button type="text" @click="repeatVisible = true">repeat modal</el-button>-->

    <el-dialog :visible="getRepeatShow" :close-on-press-escape="true" class="repeat-modal" @close="setRepeatShow(false)" @open="setRepeatShow(true)">
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
          <el-button class="repeat-modal__buttons-close" @click="setRepeatShow(false)">Не хочу повторять</el-button>
        </div>
      </div>
    </el-dialog>

  <!--</b-modal>-->
  </b-container>

</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'RepeatModal',
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['getRepeatShow']),
  },
  methods: {
    ...mapMutations(['setRepeatShow']),
  },
};
</script>

<style lang="sass">

.repeat-modal

  .el-dialog
    max-width: 600px
    border-radius: 0px
    @media (max-width: 1199.98px)
      width: 70%
    @media (max-width: 767.98px)
      width: 80%
    @media (max-width: 575.98px)
      width: 95%

    &__header
      display: none

    &__body
      padding:
        top: 35px
        left: 75px
        right: 75px
        bottom: 50px
      @media (max-width: 1199.98px)
        padding:
          left: 50px
          right: 50px
      @media (max-width: 767.98px)
        padding:
          top: 30px
          left: 30px
          right: 30px
          bottom: 30px
      @media (max-width: 575.98px)
        padding:
          bottom: 10px

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
    @media (max-width: 767.98px)
      margin:
        bottom: 25px

  &__text
    color: #000000
    text-align: center
    margin:
      bottom: 66px
    @media (max-width: 767.98px)
      margin:
        bottom: 30px

  &__buttons
    display: flex
    justify-content: center
    @media (max-width: 767.98px)
      flex-wrap: wrap

  .repeat-modal__buttons-close
    background: none
    color: #707070
    @media (max-width: 767.98px)
      margin:
        bottom: 20px
    &:hover, &:focus
      background: none
      color: #707070

</style>
