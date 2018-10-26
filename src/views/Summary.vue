<template>
  <div class="Summary">
    <b-container>
      <b-row>
        <b-col cols="12" class="back">
          <router-link to="/cart">
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
                </svg>
              </span><span>Вернуться к редактированию корзины</span>
            </a>
          </router-link>
        </b-col>

        <b-col cols="12" class="pay">
          <div class="pay__wrapper">
            <div class="pay__content">
              <h2 class="pay__title">Платите безопасно</h2>
              <p class="pay__description">Мы побеспокоились, чтобы ваши платежи проходили быстро и без всяких сюрпризов.
              Поэтому оплата производится на стороннем сервисе, который использует надежные алгоритмы шифрования
              данных и находится в доверии у крупных банков, таких как Приват и Ощад.</p>
              <a href="#" class="pay__more">Подробнее о сервисе оплаты</a>
            </div>
          </div>
        </b-col>

        <b-col cols="12" class="user-data">
          <h2 class="user-data__title">Проверим еще раз</h2>
          <b-row>

            <b-col md="6" lg="4" class="user-data__wrapper">
              <div class="user-data__content">
                <ul class="user-data__list">
                  <li class="user-data__element user-data__element--name">ФИО: <span>Иванов Иван Иванович</span></li>
                  <li class="user-data__element user-data__element--phone">Номер телефона:
                  <span>+38 (050)-666-66-66</span></li>
                </ul>
              </div>
            </b-col>

            <b-col md="6" lg="4" class="user-data__wrapper">
              <div class="user-data__content">
                <ul class="user-data__list">
                  <li class="user-data__element user-data__element--address">Адрес доставки: <span>г. Харьков, ул. Героев труда, д. 38</span>
                  </li>
                  <li class="user-data__element user-data__element--time">Примерное время доставки: <span>3 дня</span>
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col md="6" lg="4" class="user-data__wrapper">
              <div class="user-data__content">
                <ul class="user-data__list">
                  <li class="user-data__element user-data__element--price">Сумма заказа: <span>6750 грн.</span></li>
                  <li class="user-data__element user-data__element--promo">Промокод:
                  <span>Использован (10% скидка)</span></li>
                  <li class="user-data__element user-data__element--delivery">Стоимость доставки: <span>200</span> грн.
                  </li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" class="finaly">
          <p class="finaly__price">Итого:<span>{{ totalPrice }}</span> грн.</p>
          <el-button class="finaly__button">Перейти к сервису оплаты<span class="finaly__button--icon">
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
            </svg>
          </span>
          </el-button>
        </b-col>

        <b-col cols="12" class="additional">
          <h2 class="additional__title">Дополнительная информация</h2>
          <b-row>
            <b-col v-for="record in getCartItems" :key="record.id" lg="6">
              <div class="additional__element">
                <div class="additional__photo">
                  <img :src="record.photoUrl">
                </div>
                <ul class="additional__information">
                  <li class="additional__name">{{ `${record.name} (${record.quantity} шт.)` }}</li>
                  <li class="additional__price">{{ record.price }} грн.</li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <el-dialog :visible.sync="insideModal" class="inside decor" close-on-press-escape="true">
      <b-container>
        <b-row>
          <b-col>
            <div v-if="checkModals" class="inside__content">
              <b-row>
                <b-col cols="12" class="inside__top-navigation top-navigation">
                  <div class="top-navigation__wrapper">
                    <b class="top-navigation__subtitle">Jumble Box Light</b>
                    <h2 class="top-navigation__title">Что внутри бокса</h2>
                  </div>
                  <div class="top-navigation__buttons">
                    <el-button class="top-navigation__button active" @click="checkModals = true">Сладости</el-button>
                    <el-button class="top-navigation__button" @click="checkModals = false">Оформление</el-button>
                  </div>

                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>

                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>

                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>

                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>

                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col sm="6" md="4" lg="3" class="inside__element element">
                  <a href="#" class="element__wrapper">
                    <div class="element__content">
                      <h3 class="element__title">Батончик Snikers</h3>
                      <p class="element__price">60 грн.</p>
                      <p class="element__place">Занимает места в боксе: 1</p>
                    </div>
                    <p class="element__icon">Перейти к товару
                      <span>
                        <svg id="Layer_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                          <g>
                            <g>
                              <path style="fill: #c4c4c4;" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>
                  </a>
                </b-col>
                <b-col cols="12" class="inside__button">
                  <el-button @click="insideModal = false">Закрыть подробности</el-button>
                </b-col>

              </b-row>
            </div>
            <div v-else class="decor__content">
              <b-row>
                <b-col cols="12" class="decor__top-navigation top-navigation">
                  <div class="top-navigation__wrapper">
                    <b class="top-navigation__subtitle">Jumble Box Light</b>
                    <h2 class="top-navigation__title">Что внутри бокса</h2>
                  </div>
                  <div class="top-navigation__buttons">
                    <el-button class="top-navigation__button" @click="checkModals = true">Сладости</el-button>
                    <el-button class="top-navigation__button active" @click="checkModals = false">Оформление</el-button>
                  </div>

                </b-col>

                <b-col lg="7" xl="6" class="decor__element postcard">
                  <div class="postcard__content">
                    <div class="postcard__control">
                      <h3 class="postcard__title">По умолчанию</h3>
                      <p class="postcard__price">10 грн.</p>
                      <el-button class="postcard__button">
                        <p>Текущий выбор<span class="postcard__icon">
                          <svg id="box" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="0 0 482 482" style="enable-background:new 0 0 482 482;" xml:space="preserve">
                            <g>
                              <g>
                                <polygon points="279.8,244.8 258.2,257.3 258.2,482 452.7,369.7 452.7,145     "/>
                                <polygon points="315,43.3 240.2,0 40.3,115.4 115.2,158.7     "/>
                                <polygon points="440,115.4 353.8,66.3 154,181.7 165.4,187.6 240.2,230.8 314.6,187.9     "/>
                                <polygon points="138.9,264.3 103.1,245.9 103.1,188.7 29.3,146.2 29.3,369.3 222.4,480.8 222.4,257.7 138.9,209.6     "/>
                              </g>
                            </g>
                          </svg>
                        </span></p>
                      </el-button>
                    </div>
                    <div class="postcard__background"></div>
                  </div>
                </b-col>

                <b-col lg="5" class="inner-text">
                  <div class="inner-text__content">
                    <h2 class="inner-text__title">Текст открытки</h2>
                    <p class="inner-text__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium quaerat blanditiis odio ipsum ipsa, eum magni, expedita mollitia consequatur
                    laudantium placeat alias doloribus quisquam! Similique praesentium enim ducimus! Unde, nihil.</p>
                  </div>

                </b-col>

                <b-col cols="12" class="decor__button">
                  <el-button @click="insideModal = false">Закрыть подробности</el-button>
                </b-col>


              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Summary',
  components: {},
  data() {
    return {
      insideModal: false,
      checkModals: true,
    };
  },
  computed: {
    ...mapGetters(['getCartItems', 'totalPrice']),
  },
};
</script>

<style lang="sass">
  .Summary
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
    .pay
      margin:
        bottom: 46px
      &__wrapper
        position: relative
        background-image: url(../assets/christian-dubovan-686398-unsplash.jpg)
        background-repeat: no-repeat
        background-size: cover
        background-position: center center
        &::before
          content: ''
          top: 0
          left: 0
          right: 0
          bottom: 0
          position: absolute
          z-index: 100
          background-color: rgba(0, 0, 0, 0.65)

      &__content
        position: relative
        z-index: 999
        color: #ffffff
        padding:
          top: 44px
          left: 70px
          bottom: 41px
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
      &__more
        transition: all 0.2s ease
        display: inline-block
        padding:
          bottom: 8px
        color: #ffffff
        border-bottom: 1px dashed #fffa89
        &:hover, &:focus
          color: #fffa89
          text-decoration: none

    .user-data
      margin:
        bottom: 40px
      @media (max-width: 991.98px)
        margin:
          bottom: 20px
      @media (max-width: 575.98px)
        margin:
          bottom: 10px
      &__title
        font-size: 30px
        line-height: 40px
        font-weight: 700
        margin:
          bottom: 51px
        @media (max-width: 575.98px)
          margin:
            bottom: 30px
      &__content
        background-color: #f8f8f8
        padding:
          top: 28px
          left: 30px
          right: 20px
          bottom: 54px
        height: 100%
        @media (max-width: 1199.98px)
          padding:
            left: 15px
            right: 15px
      &__list
        list-style: none
        padding:
          left: 0
      &__element
        margin:
          bottom: 18px
      &__wrapper
        @media (max-width: 991.98px)
          margin:
            bottom: 30px
        @media (max-width: 767.98px)
          margin:
            bottom: 20px

    .finaly
      display: flex
      align-items: center
      margin:
        left: auto
        bottom: 76px
      @media (max-width: 575.98px)
        flex-direction: column
        align-items: flex-start
        margin:
          bottom: 40px
      &__price
        margin:
          bottom: 0
          left: auto
        line-height: 27px
        font-size: 20px
        font-weight: 700
        @media (max-width: 575.98px)
          margin:
            left: 0
        span
          display: inline-block
          margin:
            left: 12px
      &__button
        margin:
          left: 22px
          right: 34px
        padding:
          right: 28px
        @media (max-width: 767.98px)
          margin:
            right: 0
        @media (max-width: 575.98px)
          margin:
            left: 0
            top: 15px
        &--icon
          display: inline-block
          .icon
            fill: #ffffff
            width: 12px
            height: 12px
            margin:
              top: -2px
              left: 10px

    .additional
      padding:
        bottom: 20px
      &__title
        font-size: 30px
        line-height: 40px
        font-weight: 700
        margin:
          bottom: 46px
        @media (max-width: 575.98px)
          margin:
            bottom: 30px
      &__photo
        //width: 264px
        //height: 160px
        max-width: 190px
        background-color: #f8f8f8
        //@media (max-width: 1199.98px)
          width: 220px
        //@media (max-width: 991.98px)
          width: 350px
          height: 200px
        //@media (max-width: 767.98px)
          width: 264px
          height: 160px
        @media (max-width: 575.98px)
          width: 100%
      &__element
        display: flex
        margin:
          bottom: 30px
        @media (max-width: 575.98px)
          flex-wrap: wrap
          justify-content: center
        &--jumble
        .additional__name
          margin:
            bottom: 13px
          .additional__link
            a
              display: inline-block
              color: #000000
              padding:
                bottom: 5px
              border-bottom: 1px dashed #e70068
              margin:
                bottom: 26px
              @media (max-width: 575.98px)
                margin:
                  bottom: 20px
              &:hover, &:focus
                color: #e70068
                text-decoration: none

        &--mystery
        .additional__name
          margin:
            bottom: 18px
          .additional__random
            color: rgba(0, 0, 0, 0.5)
            padding:
              left: 30px
            margin:
              bottom: 26px
            background-image: url("../assets/Icons/gift-box.svg")
            background-repeat: no-repeat
            background-size: 20px auto
            background-position: 0 1px
            @media (max-width: 1199.98px)
              font-size: 13px
              background-position: 0 0
            @media (max-width: 991.98px)
              font-size: 15px
              background-position: 0 1px
            @media (max-width: 575.98px)
              margin:
                bottom: 20px
        &--jumble, &--mystery
        .additional__photo
          background-image: url("../assets/joanna-kosinska-255355-unsplash.jpg")
          background-repeat: no-repeat
          background-size: 380px auto
          background-position: center 0
          @media (max-width: 575.98px)
            background-size: cover
      &__price
        font-size: 30px
        line-height: 40px
        @media (max-width: 575.98px)
          text-align: center
      &__information
        flex-grow: 1
        padding:
          top: 6px
          left: 30px
        list-style: none
        @media (max-width: 1199.98px)
          padding:
            left: 15px
        @media (max-width: 575.98px)
          margin:
            top: 15px
          padding:
            top: 0
            left: 0
      &__name
        margin:
          bottom: 60px
        @media (max-width: 575.98px)
          text-align: center
        @media (max-width: 575.98px)
          margin:
            bottom: 20px
      &__photo
        display: flex
        align-items: center
        justify-content: center

    .inside, .decor
      overflow: auto
      background-color: rgba(58, 58, 58, 0.8)
      .el-dialog__header
        display: none
      .el-dialog
        width: 1200px
        @media (max-width: 1199.98px)
          width: 990px
        @media (max-width: 991.98px)
          width: 750px
        @media (max-width: 767.98px)
          width: 570px
        @media (max-width: 575.98px)
          width: 100%
      .container
        background-color: #fff
        margin:
          top: 115px
          bottom: 115px
        @media (max-width: 575.98px)
          margin:
            top: 50px
            bottom: 50px
          width: calc(100% - 30px) !important
      &__content
        padding:
          top: 46px
          bottom: 30px
      &__button
        display: flex
        justify-content: center
      .element
        margin:
          bottom: 30px
        @media (max-width: 575.98px)
          margin:
            bottom: 20px
        &__wrapper
          display: block
          position: relative
          z-index: 10
          background-image: url("../assets/http___pluspng.com_img-png_snickers-png-file-snickers-wrapped-png-589.png")
          background-repeat: no-repeat
          background-size: 190px auto
          background-position: center center
          color: #ffffff
          &::before
            content: ''
            position: absolute
            top: 0
            left: 0
            bottom: 0
            right: 0
            background-color: rgba(0, 0, 0, 0.8)
          &:hover, &:focus
            text-decoration: none
            .element__content
              opacity: 0
            .element__icon
              opacity: 1
        &__content
          display: block
          transition: all 0.2s ease
          opacity: 1
          padding:
            left: 20px
            top: 18px
            bottom: 20px
            right: 18px
          position: relative
          z-index: 100
          color: #ffffff
        &__title
          font-size: 15px
          line-height: 20px
          font-weight: 400
          margin:
            bottom: 6px
        &__price
          font-size: 30px
          line-height: 40px
          font-weight: 700
          margin:
            bottom: 27px
        &__place
          opacity: 0.5
          font-size: 14px
          line-height: 19px
          margin:
            bottom: 0
        &__icon
          transition: all 0.2s ease
          position: absolute
          opacity: 0
          z-index: 100
          width: 100%
          text-align: center
          height: 20px
          top: 0
          right: 0
          bottom: 0
          left: 0
          margin:
            top: auto
            bottom: auto
            left: auto
            right: auto
          background-repeat: no-repeat
          background-size: contain
          span
            display: inline-block
            width: 12px
            height: 12px
            margin:
              left: 10px
            .icon
              fill: #ffffff

      .top-navigation
        display: flex
        justify-content: space-between
        align-items: flex-start
        margin:
          bottom: 51px
        @media (max-width: 767.98px)
          flex-direction: column
        &__subtitle
          font-weight: 700
          font-size: 20px
          line-height: 27px
          color: #e6e6e6
          margin:
            bottom: 12px
        &__title
          font-weight: 700
          font-size: 30px
          line-height: 40px
          margin:
            bottom: 0
        &__buttons
          padding:
            left: 5px
            top: 5px
            right: 5px
            bottom: 5px
          border: 1px solid #f8f8f8
          .el-button.active
            background-color: #e70068
            color: #ffffff
          .el-button
            background-color: #ffffff
            color: #000000
            padding:
              top: 9px
              bottom: 11px
            span
              display: inline-block
              line-height: 20px
          @media (max-width: 767.98px)
            margin:
              top: 20px

        &__link
          margin:
            left: 50px
            right: 30px
          transition: all 0.2s ease
          color: #000000
          @media (max-width: 575.98px)
            margin:
              left: 30px
          &:hover, &:focus
            text-decoration: none
            color: #e70068

    .decor
      &__content
        padding:
          left: 0px
          right: 0px
        @media (max-width: 575.98px)
          padding:
            left: 0
            right: 0
      .postcard
        margin:
          bottom: 214px
        @media (max-width: 991.98px)
          margin:
            bottom: 50px
        &__content
          display: flex
          align-items: stretch
          @media (max-width: 575.98px)
            flex-direction: column-reverse
        &__background
          flex-grow: 1
          min-height: 205px
          background-image: url("../assets/white.jpg")
          background-repeat: no-repeat
          background-size: cover
        &__control
          display: flex
          flex-direction: column
          padding:
            top: 110px
          width: 294px
          background-color: #f8f8f8
          @media (max-width: 575.98px)
            width: 100%
            padding:
              top: 50px
        &__title
          margin:
            bottom: 9px
          font-size: 20px
          line-height: 30px
          font-weight: 700
          text-align: center
          padding:
            left: 20px
            right: 20px
          @media (max-width: 575.98px)
            padding:
              left: 10px
              right: 10px
        &__price
          text-align: center
          padding:
            left: 50px
            right: 50px
          margin:
            bottom: 64px
        &__button
          width: 100%
          background-color: rgba(231, 0, 104, 0.5)
          p
            margin:
              bottom: 0
        &__icon
          display: inline-block
          width: 18px
          margin:
            left: 13px
          #box
            fill: #ffffff
        &__link
          display: block
          width: 280px
          margin:
            top: 13px
            left: auto
            bottom: 50px
          color: #000000
          transition: all 0.2s ease
          &:hover, &:focus
            text-decoration: none
            color: #e70068
            .choose__link--icon
              fill: #e70068
          &--icon
            transition: all 0.2s ease
          p
            margin:
              bottom: 0
          span
            fill: #000000
            display: inline-block
            width: 12px
            margin:
              left: 3px

      .inner-text
        &__title
          font-size: 30px
          line-height: 40px
          font-weight: 700
          width: 282px
          margin:
            bottom: 21px
          padding:
            right: 54px
          background-image: url(../assets/Icons/letter.svg)
          background-repeat: no-repeat
          background-size: auto 35px
          background-position: right 3px
        &__description
          line-height: 25px
        @media (max-width: 991.98px)
          margin:
            bottom: 50px

    .inside::-webkit-scrollbar, .decor::-webkit-scrollbar
      width: 4px
    .inside::-webkit-scrollbar-button, .decor::-webkit-scrollbar-button
      background-color: #666
    .inside::-webkit-scrollbar-track, .decor::-webkit-scrollbar-track
      background-color: none
    .inside::-webkit-scrollbar-thumb, .decor::-webkit-scrollbar-thumb
      height: 100px
      background-color: #000000
      border-radius: 5px
    .inside::-webkit-scrollbar-button, .decor::-webkit-scrollbar-button
      background-color: #F8F8F8


</style>
