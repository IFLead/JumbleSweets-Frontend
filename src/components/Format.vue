<template>
  <div class="format">

    <el-radio-group v-model="selectedVariant" class="choose-format" @change="$emit('input', selectedVariant)">
      <el-radio-button v-for="variant in variants" :key="variant.id" :label="variant.id" class="choose-format__elem">{{ variant.name }}</el-radio-button>
    </el-radio-group>

  </div>

</template>
<script>
export default {
  name: 'Format',
  components: {
  },
  props: {
    variants: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedVariant: this.value,
    };
  },
  computed: {
  },
};
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
