<template>
  <div class="format">

    <el-radio-group v-model="radioFormat" class="choose-format">
      <el-radio-button class="choose-format__elem" label="200 гр"></el-radio-button>
      <el-radio-button class="choose-format__elem" label="500 гр"></el-radio-button>
      <el-radio-button class="choose-format__elem" label="1000 гр"></el-radio-button>
    </el-radio-group>

  </div>

</template>

<script>
    export default {
      name: "Format",
      components: {
      },
      data() {
        return {
          radioFormat: '200гр'
        };
      },
    }
</script>

<style lang="sass">

.choose-format

  .el-radio-button__inner
    background: none
    color: #000000

  .el-radio-button:last-child .el-radio-button__inner
    border-radius: 0

  .el-radio-button:first-child .el-radio-button__inner
    border-radius: 0

</style>
