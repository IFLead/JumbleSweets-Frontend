<template>
  <div class="profile">
    <b-container>
      <b-row>
        <b-col md="4" sm="12">
          <aside class="left-panel">
            <div class="left-panel__user">
              <div class="left-panel__user-wrapper">
                <h3 class="left-panel__user-title">
                  Здравствуйте,<br><span>Иванов Иван Иванович</span>
                </h3>
              </div>
            </div>
            <div class="left-panel__wrapper">
              <div class="left-panel__menu">
                <div class="left-panel__menu-element" @click="panelIndex = 1">
                  Основная информация
                </div>
                <div class="left-panel__menu-element" @click="panelIndex = 2">
                  Мои заказы
                </div>
                <div class="left-panel__menu-element" @click="panelIndex = 3">
                  Список желаний
                </div>
                <div class="left-panel__menu-element" @click="panelIndex = 4">
                  Выйти
                </div>
              </div>
            </div>
            <div class="left-panel__back-button">
              <div class="left-panel__back-button-icon">
                <img src="../assets/Icons/left-arrow.svg"
                     width="7" height="12" alt="Назад">
              </div>
              <div class="left-panel__back-button-label">
                Назад
              </div>
            </div>
          </aside>
        </b-col>

        <b-col md="8" sm="12">
          <div class="panel-content">

            <div v-show="panelIndex === 1" class="personal-data">
              <div class="personal-data__title title">
                Личный кабинет
              </div>
              <div class="personal-data__subtitle subtitle">
                Здесь вы можете изменить или добавить свои личные данные.
              </div>
              <div class="personal-data__personal">
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Фамилия</div>
                  <el-input v-model="input" class="personal-data__personal-field" placeholder="Иванов">
                  </el-input>
                </div>
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Имя</div>
                  <el-input v-model="input" class="personal-data__personal-field" placeholder="Иван">
                  </el-input>
                </div>
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Отчество</div>
                  <el-input v-model="input" class="personal-data__personal-field" placeholder="Иванович">
                  </el-input>
                </div>
                <div class="personal-data__personal-elem">
                  <div class="personal-data__personal-label">Телефон</div>
                  <el-input v-model="input" class="personal-data__personal-field" placeholder="+3805012312312">
                  </el-input>
                </div>
              </div>
              <div class="personal-data__button">
                <div class="personal-data__button-wrapper">
                  <el-button>Сохранить изменения</el-button>
                </div>
              </div>
            </div>

            <div v-show="panelIndex === 2" class="orders">
              <div class="orders__title title">Просмотр истории заказов</div>
              <div class="orders__subtitle subtitle">
                Мы ведём хронологию ваших покупок, чтобы вы никогда не забывали,
                чем радовали себя и близких.
              </div>

              <div v-show="isOrders === true" class="orders-yes">

                <div class="orders-yes__elem">
                  <div class="orders-yes__elem-picture">
                    <div class="orders-yes__elem-picture-wrapper">
                      <div class="orders-yes__elem-date">22 / 06 / 2018</div>
                      <div class="orders-yes__elem-time">18:55</div>
                    </div>
                  </div>
                  <div class="orders-yes__elem-content">
                    <div class="orders-yes__elem-main">
                      <div class="orders-yes__elem-header">
                        <div class="orders-yes__elem-hide">
                          <div class="orders-yes__elem-hide-label">
                            Скрыть
                          </div>
                          <div class="orders-yes__elem-hide-icon">
                            <img src="../assets/Icons/right-arrow_profile_top.svg"
                                 width="12" height="7" alt="Скрыть">
                          </div>
                        </div>
                        <div class="orders-yes__elem-repeat">
                          <div class="orders-yes__elem-repeat-label">Повторить</div>
                          <div class="orders-yes__elem-repeat-icon">
                            <img src="../assets/Icons/refresh_profile.svg" width="12" height="12" alt="Повторить">
                          </div>
                        </div>
                        <div class="orders-yes__elem-cost">
                          <div class="orders-yes__elem-cost-icon">
                            <img src="../assets/Icons/card-payment_profile.svg" width="20" height="20" alt="Цена">
                          </div>
                          <div class="orders-yes__elem-cost-label">6760 грн.</div>
                        </div>
                      </div>
                    </div>
                    <div v-if="isHidden === false" class="orders-yes__elem-products">
                      <div class="orders-yes__elem-products-wrapper">
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper bold-type">Батончик Snickers</div>
                          </div>
                          <div class="orders-yes__elem-products-number">4 шт.</div>
                          <div class="orders-yes__elem-products-price">60 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Шоколад Milka Sweet</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper underline">Jumble Box Light</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Шоколад Alpen Gold</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Jumble Box Light Mistery</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="orders-yes__elem">
                  <div class="orders-yes__elem-picture orders-yes__elem-picture--hidden">
                    <div class="orders-yes__elem-picture-wrapper">
                      <div class="orders-yes__elem-date">22 / 06 / 2018</div>
                      <div class="orders-yes__elem-time">18:55</div>
                    </div>
                  </div>
                  <div class="orders-yes__elem-content">
                    <div class="orders-yes__elem-main">
                      <div class="orders-yes__elem-header">
                        <div class="orders-yes__elem-hide">
                          <div class="orders-yes__elem-hide-label">Подробнее</div>
                          <div class="orders-yes__elem-hide-icon">
                            <img src="../assets/Icons/right-arrow_profile.svg" width="12" height="7" alt="Подробнее">
                          </div>
                        </div>
                        <div class="orders-yes__elem-repeat">
                          <div class="orders-yes__elem-repeat-label">Повторить</div>
                          <div class="orders-yes__elem-repeat-icon">
                            <img src="../assets/Icons/refresh_profile.svg" width="12" height="12" alt="Повторить">
                          </div>
                        </div>
                        <div class="orders-yes__elem-cost">
                          <div class="orders-yes__elem-cost-icon">
                            <img src="../assets/Icons/card-payment_profile.svg" width="20" height="20" alt="Цена">
                          </div>
                          <div class="orders-yes__elem-cost-label">6760 грн.</div>
                        </div>
                      </div>
                    </div>
                    <div v-if="isHidden === true" class="orders-yes__elem-products">
                      <div class="orders-yes__elem-products-wrapper">
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper bold-type">Батончик Snickers</div>
                          </div>
                          <div class="orders-yes__elem-products-number">4 шт.</div>
                          <div class="orders-yes__elem-products-price">60 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Шоколад Milka Sweet</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper underline">Jumble Box Light</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Шоколад Alpen Gold</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Jumble Box Light Mistery</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="orders-yes__elem">
                  <div class="orders-yes__elem-picture orders-yes__elem-picture--hidden">
                    <div class="orders-yes__elem-picture-wrapper">
                      <div class="orders-yes__elem-date">22 / 06 / 2018</div>
                      <div class="orders-yes__elem-time">18:55</div>
                    </div>
                  </div>
                  <div class="orders-yes__elem-content">
                    <div class="orders-yes__elem-main">
                      <div class="orders-yes__elem-header">
                        <div class="orders-yes__elem-hide">
                          <div class="orders-yes__elem-hide-label">Подробнее</div>
                          <div class="orders-yes__elem-hide-icon">
                            <img src="../assets/Icons/right-arrow_profile.svg" width="12" height="7" alt="Подробнее">
                          </div>
                        </div>
                        <div class="orders-yes__elem-repeat">
                          <div class="orders-yes__elem-repeat-label">Повторить</div>
                          <div class="orders-yes__elem-repeat-icon">
                            <img src="../assets/Icons/refresh_profile.svg" width="12" height="12" alt="Повторить">
                          </div>
                        </div>
                        <div class="orders-yes__elem-cost">
                          <div class="orders-yes__elem-cost-icon">
                            <img src="../assets/Icons/card-payment_profile.svg" width="20" height="20" alt="Цена">
                          </div>
                          <div class="orders-yes__elem-cost-label">6760 грн.</div>
                        </div>
                      </div>
                    </div>
                    <div v-if="isHidden === true" class="orders-yes__elem-products">
                      <div class="orders-yes__elem-products-wrapper">
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper bold-type">Батончик Snickers</div>
                          </div>
                          <div class="orders-yes__elem-products-number">4 шт.</div>
                          <div class="orders-yes__elem-products-price">60 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Шоколад Milka Sweet</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper underline">Jumble Box Light</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Шоколад Alpen Gold</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                        <div class="orders-yes__elem-products-product">
                          <div class="orders-yes__elem-products-name">
                            <div class="orders-yes__elem-products-name-wrapper">Jumble Box Light Mistery</div>
                          </div>
                          <div class="orders-yes__elem-products-number">1 шт.</div>
                          <div class="orders-yes__elem-products-price">150 грн.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div v-show="isOrders === true" class="orders-yesmob">

                <div class="orders-yesmob__elem">
                  <div class="orders-yesmob__elem-picture">
                    <div class="orders-yesmob__elem-picture-wrapper">

                      <div class="orders-yesmob__elem-header">
                        <div class="orders-yesmob__elem-header-left">
                          <div class="orders-yesmob__elem-date">22 / 06 / 2018</div>
                          <div class="orders-yesmob__elem-time">18:55</div>
                        </div>
                        <div class="orders-yesmob__elem-cost">
                          <div class="orders-yesmob__elem-cost-icon">
                            <img src="../assets/Icons/card-payment_profile.svg" width="20" height="20" alt="Цена">
                          </div>
                          <div class="orders-yesmob__elem-cost-label">6760 грн.</div>
                        </div>
                      </div>
                      <div class="orders-yesmob__elem-footer">
                        <div class="orders-yesmob__elem-hide">
                          <div class="orders-yesmob__elem-hide-label">Скрыть</div>
                          <div class="orders-yesmob__elem-hide-icon">
                            <img src="../assets/Icons/right-arrow_profile_top.svg"
                                 width="12" height="7" alt="Скрыть">
                          </div>
                        </div>
                        <div class="orders-yesmob__elem-repeat">
                          <div class="orders-yesmob__elem-repeat-label">Повторить</div>
                          <div class="orders-yesmob__elem-repeat-icon">
                            <img src="../assets/Icons/refresh_profile.svg" width="12" height="12" alt="Повторить">
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div v-if="isHidden === false" class="orders-yesmob__elem-products">
                    <div class="orders-yesmob__elem-products-wrapper">
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Батончик Snickers</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">4 шт.</div>
                        <div class="orders-yesmob__elem-products-price">60 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Шоколад Milka Sweet</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper underline">Jumble Box Light</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Шоколад Alpen Gold</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Jumble Box Light Mistery</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="orders-yesmob__elem">
                  <div class="orders-yesmob__elem-picture">
                    <div class="orders-yesmob__elem-picture-wrapper">

                      <div class="orders-yesmob__elem-header">
                        <div class="orders-yesmob__elem-header-left">
                          <div class="orders-yesmob__elem-date">22 / 06 / 2018</div>
                          <div class="orders-yesmob__elem-time">18:55</div>
                        </div>
                        <div class="orders-yesmob__elem-cost">
                          <div class="orders-yesmob__elem-cost-icon">
                            <img src="../assets/Icons/card-payment_profile.svg" width="20" height="20" alt="Цена">
                          </div>
                          <div class="orders-yesmob__elem-cost-label">6760 грн.</div>
                        </div>
                      </div>
                      <div class="orders-yesmob__elem-footer">
                        <div class="orders-yesmob__elem-hide">
                          <div class="orders-yesmob__elem-hide-label">Подробнее</div>
                          <div class="orders-yesmob__elem-hide-icon">
                            <img src="../assets/Icons/right-arrow_profile.svg"
                                 width="12" height="7" alt="Скрыть">
                          </div>
                        </div>
                        <div class="orders-yesmob__elem-repeat">
                          <div class="orders-yesmob__elem-repeat-label">Повторить</div>
                          <div class="orders-yesmob__elem-repeat-icon">
                            <img src="../assets/Icons/refresh_profile.svg" width="12" height="12" alt="Повторить">
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div v-if="isHidden === true" class="orders-yesmob__elem-products">
                    <div class="orders-yesmob__elem-products-wrapper">
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Батончик Snickers</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">4 шт.</div>
                        <div class="orders-yesmob__elem-products-price">60 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Шоколад Milka Sweet</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper underline">Jumble Box Light</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Шоколад Alpen Gold</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Jumble Box Light Mistery</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                    </div>
                  </div>

                </div>

                <div class="orders-yesmob__elem">
                  <div class="orders-yesmob__elem-picture">
                    <div class="orders-yesmob__elem-picture-wrapper">

                      <div class="orders-yesmob__elem-header">
                        <div class="orders-yesmob__elem-header-left">
                          <div class="orders-yesmob__elem-date">22 / 06 / 2018</div>
                          <div class="orders-yesmob__elem-time">18:55</div>
                        </div>
                        <div class="orders-yesmob__elem-cost">
                          <div class="orders-yesmob__elem-cost-icon">
                            <img src="../assets/Icons/card-payment_profile.svg" width="20" height="20" alt="Цена">
                          </div>
                          <div class="orders-yesmob__elem-cost-label">6760 грн.</div>
                        </div>
                      </div>
                      <div class="orders-yesmob__elem-footer">
                        <div class="orders-yesmob__elem-hide">
                          <div class="orders-yesmob__elem-hide-label">Подробнее</div>
                          <div class="orders-yesmob__elem-hide-icon">
                            <img src="../assets/Icons/right-arrow_profile.svg"
                                 width="12" height="7" alt="Скрыть">
                          </div>
                        </div>
                        <div class="orders-yesmob__elem-repeat">
                          <div class="orders-yesmob__elem-repeat-label">Повторить</div>
                          <div class="orders-yesmob__elem-repeat-icon">
                            <img src="../assets/Icons/refresh_profile.svg" width="12" height="12" alt="Повторить">
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div v-if="isHidden === true" class="orders-yesmob__elem-products">
                    <div class="orders-yesmob__elem-products-wrapper">
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Батончик Snickers</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">4 шт.</div>
                        <div class="orders-yesmob__elem-products-price">60 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Шоколад Milka Sweet</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper underline">Jumble Box Light</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Шоколад Alpen Gold</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                      <div class="orders-yesmob__elem-products-product">
                        <div class="orders-yesmob__elem-products-name">
                          <div class="orders-yesmob__elem-products-name-wrapper">Jumble Box Light Mistery</div>
                        </div>
                        <div class="orders-yesmob__elem-products-number">1 шт.</div>
                        <div class="orders-yesmob__elem-products-price">150 грн.</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


              <div v-show="isOrders === false" class="orders-no">
                <div class="orders-no__wrapper">
                  <div class="orders-no__icon">
                    <img src="../assets/Icons/gift-box-profile.svg"
                         width="44" height="50" alt="Подарок">
                  </div>
                  <div class="orders-no__text">
                    На данный момент у вас нет заказов
                  </div>
                  <div class="orders-no__subtext">
                    Но не расстраивайтесь, а лучше приступайте к покупкам прямо сейчас
                  </div>
                  <div class="orders-no__button-wrapper">
                    <el-button class="orders-no__button">Посмотреть каталог</el-button>
                  </div>
                </div>
              </div>

            </div>

            <div v-show="panelIndex === 3" class="wishlist">
              <div class="wishlist__title title">
                Список желаний
              </div>
              <div class="wishlist__subtitle subtitle">
                Создайте список желаний на сайте, чтобы быстрее находить понравившиеся товары.
              </div>

              <div v-show="isWish === true" class="wishlist-yes">
              </div>

              <div v-show="isWish === false" class="wishlist-no">
                <div class="wishlist-no__wrapper">
                  <div class="wishlist-no__icon">
                    <img src="../assets/Icons/wedding-gift-profile.svg"
                         width="68" height="50" alt="Избранное">
                  </div>
                  <div class="wishlist-no__text">
                    Пока что здесь пусто
                  </div>
                  <div class="wishlist-no__subtext">
                    Не смогли выбрать подходящий товар?<br>
                    Загляните в наш каталог, и вы обязательно найдёте то, что нужно.
                  </div>
                  <div class="wishlist-no__button-wrapper">
                    <el-button class="wishlist-no__button">Посмотреть каталог</el-button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </b-col>

      </b-row>

      <!--<b-btn v-b-modal.modal1>Launch demo modal</b-btn>-->

      <!--<div class="modals">-->
      <!--<repeat-modal :id="'repeat_modal'">Чтобы добавить магазин, необходимо зарегистрироваться в 2 клика</repeat-modal>-->
      <!--</div>-->

    </b-container>
  </div>

</template>

<script>
  import RepeatModal from '../components/modals/RepeatModal'

export default {
  name: 'Profile',
  components: {
    RepeatModal
  },
  data() {
    return {
      panelIndex: 1,
      isHidden: false,
      isOrders: true,
      isWish: false,
    };
  },
};
</script>

<style lang="sass">

.subtitle
  color: #707070

.profile
  font-family: ProximaNova
  font-size: 15px
  color: #000000
  font-weight: 400
  line-height: 25px
  margin:
    top: 30px
  padding:
    bottom: 50px

.left-panel

  &__user-wrapper
    position: relative
    z-index: 100

  &__user-title
    color: #ffffff
    font-size: 15px
    font-weight: 400
    line-height: 25px
  span
    font-size: 18px
    font-weight: 600

  &__user
    max-width: 362px
    max-height: 150px
    background-position: 0 -20px
    background-size: cover
    background-repeat: no-repeat
    position: relative
    background-color: grey
    background-image: url("../assets/user_back.jpg")
    padding:
      top: 30px
      left: 30px
      bottom: 76px
    @media (max-width: 767.98px)
      margin: 0 auto
    &:after
      content: ''
      z-index: 1
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.75)

  &__wrapper
    max-width: 362px
    background-color: #f8f8f8
    margin:
      top: 35px
    @media (max-width: 767.98px)
      margin:
        left: auto
        right: auto
        top: 25px

  &__menu
    padding:
      top: 29px
      bottom: 30px

  &__menu-element
    text-align: center
    padding:
      top: 21px
      bottom: 21px

    &:hover, &:focus
      background-color: #E70068
      color: #ffffff
      cursor: pointer

  &__back-button
    margin:
      left: 30px
      top: 30px
    display: flex
    @media (min-width: 767.98px)
      display: none

  &__back-button-icon
    margin-right: 12px

.panel-content
  padding:
    left: 30px
  @media (max-width: 767.98px)
    padding:
      left: 0px
    margin-top: 25px
    display: flex
    justify-content: center

.personal-data
  @media (max-width: 575.98px)
    margin:
      left: 30px
      right: 30px

  &__title
    margin:
      bottom: 20px
      top: 15px

  &__subtitle
    line-height: 18px
    margin:
      bottom: 85px
    @media (max-width: 767.98px)
      margin:
        bottom: 35px

  &__personal
    display: flex
    flex-wrap: wrap
    max-width: 510px
    justify-content: space-between

  &__personal-elem
    width: 234px

  &__personal-label
    font-size: 18px
    line-height: 25px
    font-weight: 700
    margin:
      bottom: 24px

  &__personal-field
    margin-bottom: 30px

    .el-input__inner
      width: 234px
      padding: 10px 5px
      border:
        top: 1px solid #ffffff
        left: 1px solid #ffffff
        right: 1px solid #ffffff
        bottom: 1px solid #c4c4c4
      font-size: 15px
    .el-input__inner:hover
      border-bottom: 1px solid #c4c4c4
    .el-input__inner:focus
      border:
        top: 1px solid #ffffff
        left: 1px solid #ffffff
        right: 1px solid #ffffff
        bottom: 1px solid #c4c4c4

  &__button
    margin-top: 70px
    @media (max-width: 767.98px)
      margin:
        top: 35px
      display: flex
      justify-content: center
    .el-button
      width: 244px
      height: 50px
      box-sizing: border-box
      background-image: url("../assets/Icons/save-button-profile.svg")
      background-repeat: no-repeat
      background-size: 20px 20px
      background-position: right 30px top 14px
      padding:
        right: 60px



.orders
  @media (max-width: 575.98px)
    margin:
      left: 30px
      right: 30px

  &__title
    line-height: 37px
    margin:
      bottom: 20px
      top: 15px

  &__subtitle
    line-height: 18px
    margin:
      bottom: 50px
    @media (max-width: 1199.98px)
      margin:
        bottom: 35px

.orders-yes
  @media (max-width: 1199.98px)
    display: none

  &__elem
    display: flex
    margin:
      bottom: 40px
    &:last-of-type
      margin:
        bottom: 0px

  &__elem-picture
    max-width: 160px
    background-image: url("../assets/glass_back.jpg")
    background-position: -190px 0px
    background-size: cover
    background-repeat: no-repeat
    position: relative
    background-color: grey
    padding:
      left: 25px
      right: 30px
      top: 20px
      bottom: 20px
    &:after
      content: ''
      z-index: 1
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      background-color: rgba(255, 250, 185, 0.7)
  &__elem-picture--hidden
    background-position: 0px 0px

  &__elem-picture-wrapper
    position: relative
    z-index: 100

  &__elem-date
    font-weight: 700
    margin:
      bottom: 5px

  &__elem-time
    font-weight: 700
    font-size: 25px
    line-height: 30px

  &__elem-content
    min-width: 564px

  &__elem-header
    min-height: 100px
    padding-right: 35px
    padding-left: 35px
    justify-content: space-between
    align-items: center
    background-color: #000000
    display: flex
    color: #ffffff

  &__elem-hide
    display: flex

  &__elem-hide-icon
    margin-left: 12px

  &__elem-repeat
    display: flex

  &__elem-repeat-icon
    margin-left: 12px

  &__elem-cost
    display: flex
    height: 60px
    align-items: center
    padding-left: 55px
    border-left: 1px solid rgba(255, 255, 255, .3)

  &__elem-cost-label
    font-weight: 700
    font-size: 25px
    line-height: 30px

  &__elem-cost-icon
    margin-right: 12px

  &__elem-products
    background-color: #f8f8f8
    padding:
      left: 35px
      right: 35px
      top: 30px
      bottom: 50px

  &__elem-products-wrapper
    width: 494px

  &__elem-products-product
    display: flex
    justify-content: space-between
    padding-bottom: 15px

  &__elem-products-name
    width: 170px

  &__elem-products-name-wrapper
    display: inline-block

  .underline
    border-bottom: 1px dashed #E70068

  .bold-type
    font-weight: 700


.orders-yesmob
  @media (min-width: 1199.98px)
    display: none

  &__elem
    margin:
      bottom: 30px
    &:last-of-type
      margin:
        bottom: 0px

  &__elem-picture
    background-image: url("../assets/glass_back.jpg")
    background-position: 0px -60px
    background-size: cover
    background-repeat: no-repeat
    position: relative
    background-color: grey
    padding: 15px
    @media (max-width: 575.98px)
      background-position: 0px -30px
    &:after
      content: ''
      z-index: 1
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: linear-gradient(rgba(0,0,0,.80), rgba(0,0,0,.99))

  &__elem-picture-wrapper
    color: #ffffff
    position: relative
    z-index: 100

  &__elem-header
    display: flex
    justify-content: space-between
    margin-bottom: 38px

  &__elem-date
    font-weight: 700
    margin:
      bottom: 15px

  &__elem-time
    font-weight: 700
    font-size: 25px
    line-height: 30px

  &__elem-cost
    display: flex
    height: 60px

  &__elem-cost-label
    font-weight: 700
    font-size: 25px
    line-height: 30px
    @media (max-width: 575.98px)
      font-size: 20px

  &__elem-cost-icon
    margin-right: 12px

  &__elem-footer
    display: flex
    justify-content: space-between

  &__elem-hide
    display: flex

  &__elem-hide-icon
    margin-left: 12px

  &__elem-repeat
    display: flex

  &__elem-repeat-icon
    margin-left: 12px

  &__elem-products
    background-color: #f8f8f8
    padding:
      left: 15px
      right: 15px
      top: 15px
      bottom: 30px

  //&__elem-products-wrapper
    width: 494px

  &__elem-products-product
    display: flex
    justify-content: space-between
    padding-bottom: 15px

  &__elem-products-name
    width: 170px

  &__elem-products-name-wrapper
    display: inline-block

  .underline
    border-bottom: 1px dashed #E70068

.orders-no
  background-color: #f8f8f8
  padding:
    top: 50px

  &__icon
    text-align: center
    padding:
      bottom: 35px

  &__text
    font-size: 20px
    line-height: 24px
    font-weight: 700
    text-align: center
    padding:
      bottom: 20px

  &__subtext
    font-size: 15px
    line-height: 18px
    font-weight: 400
    text-align: center
    padding:
      bottom: 45px

  &__button-wrapper
    display: flex
    justify-content: center

  .orders-no__button
    background-image: url("../assets/Icons/shopping-purse-icon.svg")
    background-repeat: no-repeat
    background-size: 20px 20px
    background-position: right 30px top 10px
    padding:
      right: 60px
    margin:
      bottom: 80px

.wishlist
  @media (max-width: 575.98px)
    margin:
      left: 30px
      right: 30px

  &__title
    line-height: 37px
    margin:
      bottom: 20px
      top: 15px

  &__subtitle
    line-height: 18px
    margin:
      bottom: 45px

.wishlist-no
  background-color: #f8f8f8
  padding:
    top: 50px

  &__icon
    text-align: center
    padding:
      bottom: 35px

  &__text
    font-size: 20px
    line-height: 24px
    font-weight: 700
    text-align: center
    padding:
      bottom: 20px

  &__subtext
    font-size: 15px
    line-height: 25px
    font-weight: 400
    text-align: center
    padding:
      bottom: 45px

  &__button-wrapper
    display: flex
    justify-content: center

  .wishlist-no__button
    background-image: url("../assets/Icons/shopping-purse-icon.svg")
    background-repeat: no-repeat
    background-size: 20px 20px
    background-position: right 30px top 10px
    padding:
      right: 60px
    margin:
      bottom: 55px

</style>
