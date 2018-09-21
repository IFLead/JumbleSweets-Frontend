<template>
  <b-container>
    <!--<b-modal class="repeat-modal" :id="id" hide-header hide-footer centered>-->

    <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

    <el-dialog class="repeat-modal"
      :visible.sync="dialogVisible">
      <div class="repeat-modal__icon">
        <img src="../../assets/Icons/refresh_icon.svg" width="50" height="50" alt="Повторить">
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
    </el-dialog>

  <!--</b-modal>-->
  </b-container>

</template>

<script>
    export default {
      name: "RepeatModal",
      components: {
      },
      data() {
        return {
          dialogVisible: false
        };
      },
    }
</script>

<style lang="sass">

.repeat-modal

  .el-dialog
    width: 600px

    &__header
      display: none

</style>
