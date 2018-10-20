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
          <el-form ref="numberForm" :rules="rulesNumber" :model="numberForm" status-icon>
            <div class="ring__number-input">
              <el-form-item prop="phone">
                <el-input v-model.number="numberForm.phone" placeholder="Номер телефона"></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="ring__number_conf">
            <el-checkbox v-model="checked">Согласен с политикой конфиденциальности</el-checkbox>
          </div>
        </div>
        <el-button :disabled="!checked" class="ring__button" @click="submitForm('numberForm')">Заказать обратный звонок</el-button>
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
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Пожалуйста, введите номер телефона'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Пожалуйста, введите цифры'));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      input: '',
      checked: false,
      numberForm: {
        phone: '',
      },
      rulesNumber: {
        phone: [
          { validator: checkPhone, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: 'Success',
            center: true,
          });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>


<style lang="sass">

.delpay
  font-family: ProximaNova
  font-size: 15px
  color: #000000
  font-weight: 400
  margin-top: 30px

.variants
  &__title
    font-size: 30px
    line-height: 37px
    font-weight: 700
    margin:
      bottom: 50px
    text-align: center
    @media (max-width: 575.98px)
      font-size: 28px
  &__wrapper
    display: flex
    justify-content: space-around
    flex-wrap: wrap

  &__element-wrapper
    position: relative
    z-index: 100
  &__element-title
    z-index: 10
    color: #ffffff
    font-size: 30px
    font-weight: 700
    margin:
      bottom: 20px
    @media (max-width: 575.98px)
      font-size: 28px
  &__element-description
    color: #ffffff
    font-size: 18px
    font-weight: 400
    position: relative
    z-index: 10
  &__element
    margin:
      bottom: 20px
    padding:
      left: 0px
      right: 0px
    max-width: 362px
    &-pickup, &-kharkiv, &-ukraine
      background-size: cover
      background-repeat: no-repeat
      position: relative
      background-color: grey
      min-height: 450px
      padding:
        right: 50px
        left: 30px
        top: 25px
      &:before
        content: ''
        z-index: 1
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        background-color: rgba(0, 0, 0, 0.8)
    &-pickup
      background-image: url("../assets/pickup.jpg")
      background-position: 0 0
    &-kharkiv
      background-image: url("../assets/kharkiv.jpg")
      background-position: -180px 0px
    &-ukraine
      background-image: url("../assets/ukraine.jpg")
      background-position: -140px 0px

.questions
  margin:
    top: 50px
    bottom: 50px
  &__title
    font-size: 30px
    line-height: 37px
    font-weight: 700
    text-align: center
    margin:
      bottom: 25px
    @media (max-width: 575.98px)
      font-size: 28px
  &__description
    text-align: center

.ring
  display: flex
  justify-content: center
  flex-wrap: wrap
  margin:
    bottom: 50px
  &__number
    margin:
      right: 75px
    @media (max-width: 767.98px)
      margin:
        right: 0
  &__number-input
    width: 264px
    margin:
      bottom: 25px
    @media (max-width: 767.98px)
      margin:
        right: auto
        left: auto
    .el-input__inner
      border-radius: 0
      padding: 5px 5px
      border:
        top: none
        left: none
        right: none
        bottom: 1px solid #c4c4c4
      font-size: 15px
    .el-input__inner:hover
      border-bottom: 1px solid #c4c4c4
    .el-input__inner:focus
      border:
        top: none
        left: none
        right: none
        bottom: 1px solid #c4c4c4
  .ring__button
    height: 50px
    width: 278px
    box-sizing: border-box
    background-image: url("../assets/Icons/phone-receiver.svg") !important
    background-repeat: no-repeat
    background-size: 20px 20px
    background-position: right 30px top 14px
    margin:
      bottom: 45px
    padding:
      right: 60px
    @media (max-width: 767.98px)
      margin:
        top: 25px
        bottom: 10px

</style>
