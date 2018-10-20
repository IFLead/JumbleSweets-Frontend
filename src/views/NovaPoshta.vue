<template>
  <div class="NovaPoshta">
    <b-container>
      <b-row>
        <b-col cols="12" class="back">
          <a href="#" class="back__link">
            <span class="back__icon">
              <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
            </span><span>Вернуться к редактированию корзины</span>
          </a>
        </b-col>

        <b-col cols="12" class="mail">
          <div class="mail__wrapper">
            <div class="mail__content">
              <h2 class="mail__title">По Украине</h2>
              <p class="mail__description">Отправляем через Новую почту. Стоимость отправки зависит от веса посылки и города. Заказ высылается в течении 24-х часов после выполнения.</p>
              <p class="mail__description">Вы можете оплатить товар при получении наложенным платежом или произвести предоплату на карту банка.</p>
            </div>
          </div>
        </b-col>

        <b-col cols="12" class="city">
          <div class="city__content">
            <h2 class="city__title">Укажите город доставки</h2>
            <div class="city__control">
              <div class="city__wrapper">
                <el-input placeholder="Введите город доставки" class="city__search"></el-input>
                <p class="city__error show">*Город не найден, введите ещё раз</p>
              </div>
              <el-checkbox class="city__checkbox">Согласен с политикой конфиденциальности</el-checkbox>
            </div>

            <div class="city__bottom-information">
              <ul class="city__characteristic">
                <li class="city__characteristic-element">Вес посылки: 1.5 кг</li>
                <li class="city__characteristic-element">Стоимость доставки: 250 грн.</li>
                <li class="city__characteristic-element">Примерное время доставки: 3 дня</li>
              </ul>
              <el-button class="city__button">Всё верно, дальше<span class="city__button--icon">
                <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                  <g>
                    <g>
                      <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                        c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                        c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                        c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                    </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                </svg>
              </span>
              </el-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'NovaPoshta',
  components: {

  },
  data() {
    return {
      input: '',
      checked: true,
    };
  },
};
</script>

<style lang="sass">
.NovaPoshta
  .back
    &__link
      display: inline-block
      font-weight: 700
      margin:
        top: 37px
        bottom: 50px
      transition: all 0.2s ease
      color: #000000
      @media (max-width: 767.98px)
        margin:
          bottom: 30px
      @media (max-width: 575.98px)
        font-size: 14px
      &:hover, &:focus
        color: #e70068
        text-decoration: none
        .icon
          fill: #e70068
    span
      display: inline-block
    &__icon
      margin:
        left: 0
      display: block
      transform: rotate(-180deg)
      .icon
        transition: all 0.2s ease
        width: 12px
        height: 12px
        fill: #000000
        margin:
          left: 12px
          top: -6px
        @media (max-width: 575.98px)
          margin:
            left: 5px

  .mail
    margin:
      bottom: 46px
    &__wrapper
      position: relative
      background-image: url(../assets/ukraine.jpg)
      background-repeat: no-repeat
      background-size: cover
      &::before
        content: ''
        top: 0
        left: 0
        right: 0
        bottom: 0
        position: absolute
        z-index: 100
        background-color: rgba(0, 0, 0, 0.7)

    &__content
      position: relative
      z-index: 1000
      color: #ffffff
      padding:
        top: 44px
        left: 70px
        bottom: 50px
        right: 30px
      @media (max-width: 991.98px)
        padding:
          left: 30px
      @media (max-width: 575.98px)
        padding:
          left: 15px
          right: 15px
    &__title
      font-size: 30px
      line-height: 40px
      font-weight: 700
      margin:
        bottom: 41px
      @media (max-width: 575.98px)
        font-size: 25px
        line-height: 35px
        margin:
          bottom: 30px
    &__description
      width: 950px
      line-height: 25px
      margin:
        bottom: 25px
      @media (max-width: 1199.98px)
        width: 800px
      @media (max-width: 991.98px)
        width: 100%

  .city
    &__content
      padding:
        left: 22px
      @media (max-width: 991.98px)
        padding:
          left: 0
    &__title
      font-size: 30px
      line-height: 40px
      font-weight: 700
      margin:
        bottom: 50px
      @media (max-width: 575.98px)
        margin:
          bottom: 30px
    &__control
      display: flex
      align-items: flex-start
      @media (max-width: 767.98px)
        flex-wrap: wrap
    &__wrapper
      margin:
        right: 60px
      @media (max-width: 767.98px)
        margin:
          bottom: 10px
    &__error
      opacity: 0
      color: #e70068
      margin:
        bottom: 0
    &__error.show
      opacity: 1
      line-height: 20px
    &__characteristic
      display: flex
      padding:
        left: 0
      margin:
        bottom: 0
      list-style: none
      @media (max-width: 767.98px)
        flex-wrap: wrap
      &-element
        line-height: 20px
        margin:
          right: 80px
        @media (max-width: 1199.98px)
          margin:
            right: 50px
        @media (max-width: 767.98px)
          width: 100%
          margin:
            bottom: 10px
        &:last-of-type
          margin:
            right: 0
    &__bottom-information
      display: flex
      align-items: center
      margin:
        top: 40px
        bottom: 50px
      @media (max-width: 991.98px)
        flex-wrap: wrap
      @media (max-width: 767.98px)
        margin:
          top: 20px
    &__button
      margin:
        left: auto
        right: 34px
      @media (max-width: 991.98px)
        margin:
          left: 0
          right: 0
          top: 30px
      &--icon
        display: inline-block
        .icon
          fill: #ffffff
          width: 12px
          height: 12px
          margin:
            top: -2px
            left: 10px
    &__search.el-input
      width: 326px
      margin:
        bottom: 23px
      .el-input__inner
        font-size: 15px
        padding:
          left: 5px
          bottom: 10px
        border: none
        border-radius: 0px
        border-bottom: 1px solid #c4c4c4
        &::placeholder
          font-size: 15px
          color: #DCDCDC
      @media (max-width: 767.98px)
        margin:
          bottom: 10px
      @media (max-width: 575.98px)
        width: 250px
    .el-checkbox__inner
      border-radius: 0
      border-width: 2px
      border-color: #c4c4c4
    .el-checkbox__label
      font-size: 13px
      color: #c4c4c4
      font-weight: normal
      padding:
        left: 12px

</style>
