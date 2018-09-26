<template>
  <b-container>
    <!--<b-modal class="repeat-modal" :id="id" hide-header hide-footer centered>-->

    <el-button type="text" @click="insideVisible = true">inside modal</el-button>

    <el-dialog :visible.sync="insideVisible"
               class="inside-modal">

      <div class="inside-modal__header">
        <div class="inside-modal__name">
          Jumble Box Light
        </div>
        <el-radio-group v-model="radioModal" class="inside-modal__radio">
          <el-radio-button class="inside-modal__radio-sweets" label="Сладости"></el-radio-button>
          <el-radio-button label="Оформление"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="inside-modal__wrapper">
        <div class="inside-modal__title title">
          Что внутри бокса
        </div>
        <div class="inside-modal__products">
          <div class="inside-modal__element">
            <a href="#">
              <div class="inside-modal__element-wrapper">
                <div class="inside-modal__element-icon">
                  <img src="../../assets/http___pluspng.com_img-png_snickers-png-file-snickers-wrapped-png-589.png" alt="Батончик Snikers" width="340">
                </div>
                <div class="inside-modal__element-title">Батончик Snickers</div>
                <div class="inside-modal__element-price">60 грн.</div>
                <div class="inside-modal__element-place">Занимает место в боксе: 1</div>
              </div>
              <!--<div class="inside-modal__hide">-->
              <!--<p>-->
              <!--Перейти к наполнению-->
              <!--</p>-->
              <!--</div>-->
            </a>
          </div>
        </div>

      </div>

    </el-dialog>

    <!--</b-modal>-->
  </b-container>

</template>

<script>
export default {
  name: 'InsideModal',
  components: {
  },
  data() {
    return {
      insideVisible: false,
      radioModal: 'Сладости',
    };
  },
};
</script>

<style lang="sass">

.inside-modal

  .el-dialog
    max-width: 600px
    border-radius: 0px

    &__header
      display: none

  &__header
    display: flex
    justify-content: space-between

  &__element

    a
    display: block
    height: 100%
    position: relative
    color: #000000
    padding:
      top: 238px
      left: 40px
      right: 40px
      bottom: 40px
    /*background-image: url("../../assets/http___pluspng.com_img-png_snickers-png-file-snickers-wrapped-png-589.png")*/
    background-repeat: no-repeat
    background-size: cover
    background-position: center 0

</style>
