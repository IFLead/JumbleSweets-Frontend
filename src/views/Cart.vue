<template>
  <div class="Cart">
    <section class="basket">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="basket__wrapper">
              <div class="basket__content">
                <h2 class="basket__title">Корзина покупок</h2>
                <p class="basket__description">Товары, отложенные в корзину, хранятся 30 дней с момента добавления. В
                течение этого времени вы сможете зайти в свой аккаунт, выбрать товар и оформить заказ.</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!--<b-container>-->
    <!--<el-button><router-link to="/summary">Summary</router-link> </el-button>-->
    <!--</b-container>-->

    <section class="purchases">
      <b-container>
        <b-row>
          <b-col cols="12" class="purchases__control control">
            <div class="control__content">
              <h2 class="control__title">Моя корзина</h2>
              <a href="#" class="control__link control__link--like" @click="favouriteModalOpened = true">Добавить всё в
              список желания
                <span>
                  <svg id="Capa_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                    <g>
                      <g id="favorite">
                        <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                        C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
                      </g>
                    </g>

                  </svg>
                </span>
              </a>
              <a href="#" class="control__link control__link--delete" @click="cleanModal = true">Очистить корзину
                <span>
                  <svg id="Capa_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                    <g>
                      <g id="delete">
                        <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5
                        H51v51h357V25.5z"/>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </b-col>

          <b-col v-for="record in getCartItems" :key="record.id" cols="12" class="purchases__element element">
            <div class="element__content">
              <a href="#" class="element__link">
                <div class="element__photo">
                  <img :src="record.photoUrl">
                </div>
              </a>
              <div class="element__information">
                <a href="#" class="element__name">{{ record.name }}</a>
                <div class="element__contrlos">
                  <div class="element__col">
                    <template>
                      <el-input-number v-model="record.quantity" :min="1" :max="10"
                                       @change="quantityChange()"></el-input-number>
                    </template>
                  </div>
                  <p class="element__price">{{ record.price }} грн.</p>
                  <a href="#" class="element__delete" @click="removeProductFromCart(record.id)">Удалить</a>
                </div>
              </div>
            </div>
          </b-col>

          <b-col cols="12" class="purchases__total total">
            <div class="total__content">
              <a href="#" class="total__promo activated"><span class="total__promo--first">У меня есть промокод на скидку</span>
              <span class="total__promo--activated" @click="saleModal = true">Скидка 10% с промокода</span></a>
              <p class="total__price">Сумма: <span>{{ totalPrice }} грн.</span></p>
              <router-link to="/summary">
                <el-button class="total__button" @click="decorModal = true">Перейти к оформлению
                  <span class="total__button--icon">
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
              </router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="alerts">
      <div class="alerts__element alerts__element--basket">
        <p>Корзина очищена</p>
      </div>

      <div class="alerts__element alerts__element--products">
        <p>Мы перенесли все товары в список желаний</p>
      </div>
    </section>

    <section class="modals">
      <el-dialog :visible.sync="cleanModal" class="modals__clean clean" close-on-press-escape="true">
        <div class="clean__content">
          <div class="clean__icon"></div>
          <h3 class="clean__title">Очистка корзины</h3>
          <p class="clean__description">Мы удалим весь товар из вашей корзины, точно этого хотите?</p>
          <div class="clean__buttons">
            <el-button class="clean__button" @click="modalClearCart">Очистить корзину</el-button>
            <a href="#" class="clean__link" @click="cleanModal = false">Нет, не надо</a>
          </div>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="favouriteModalOpened" class="modals__favourite favourite" close-on-press-escape="true">
        <div class="favourite__content">
          <div class="favourite__icon"></div>
          <h3 class="favourite__title">В список желаемого</h3>
          <p class="favourite__description">С радостью перенесем содержимое корзины в список желаний, вы согласны?</p>
          <div class="favourite__buttons">
            <el-button class="favourite__button">Да, конечно</el-button>
            <a href="#" class="favourite__link" @click="favouriteModalOpened = false">Нет, оставьте всё в корзине</a>
          </div>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="saleModal" class="modals__sale sale" div>
        <div class="sale__content">
          <div class="sale__close"></div>
          <h3 class="sale__title">Промокод на скидку</h3>
          <p class="sale__description">Для получения нужно ввести промокод в специальное поле и нажать "Использовать".
          После этого стоимость товара пересчитается со скидкой.</p>
          <div class="sale__wrapper">
            <el-input class="sale__promo" placeholder="Введите промокод"></el-input>
          </div>
          <p class="sale__alert show">*Извините, промокод недействителен</p>
          <div class="sale__buttons">
            <el-button class="sale__button">Использовать</el-button>
            <a href="#" class="sale__link" @click="saleModal = false">Отмена</a>
          </div>
        </div>

      </el-dialog>
    </section>

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
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      productAmount: 1,
      input: '',
      cleanModal: false,
      favouriteModalOpened: false,
      saleModal: false,
      insideModal: false,
      checkModals: true,
    };
  },
  computed: {
    ...mapGetters(['getCartItems', 'totalPrice']),
  },
  methods: {
    ...mapMutations(['clearCart', 'removeProductFromCart']),
    ...mapActions(['saveCart']),
    modalClearCart() {
      this.clearCart();
      this.cleanModal = false;
    },
    quantityChange() {
      this.saveCart();
    },
  },
};
</script>

<style lang="sass">
  .Cart
    .basket
      position: relative
      &__wrapper
        position: relative
        background-image: url("../assets/laura-marques-647991-unsplash.jpg")
        background-repeat: no-repeat
        background-size: cover
        background-position: 0 center
        &::after
          content: ''
          position: absolute
          z-index: 10
          top: 0
          left: 0
          bottom: 0
          right: 0
          background-color: rgba(0, 0, 0, 0.6)
      &__content
        position: relative
        z-index: 100
        color: #ffffff
        padding:
          left: 70px
          top: 44px
          bottom: 125px
        @media (max-width: 991.98px)
          padding:
            left: 50px
            bottom: 100px
        @media (max-width: 767.98px)
          padding:
            left: 30px
            right: 20px
            bottom: 70px
      &__title
        font-size: 30px
        line-height: 40px
        font-weight: 700
        margin:
          bottom: 41px
        width: 400px
        @media (max-width: 991.98px)
          margin:
            bottom: 30px
        @media (max-width: 767.98px)
          width: 100%
      &__description
        width: 950px
        line-height: 25px
        margin:
          bottom: 0
        @media (max-width: 1199.98px)
          width: 700px
        @media (max-width: 991.98px)
          width: 550px
        @media (max-width: 767.98px)
          width: 100%

    .purchases
      .control
        margin:
          bottom: 41px
        &__content
          padding:
            top: 46px
          display: flex
          align-items: center
          @media (max-width: 991.98px)
            justify-content: space-between
          @media (max-width: 767.98px)
            flex-direction: column
            align-items: flex-start
        &__title
          font-size: 30px
          line-height: 40px
          font-weight: 700
          margin:
            bottom: 0
            right: 98px
          @media (max-width: 991.98px)
            margin:
              right: 0
          @media (max-width: 767.98px)
            margin:
              bottom: 10px
        &__link
          transition: all 0.2s ease
          color: #000000
          opacity: 0.5
          &:hover, &:focus
            opacity: 1
            text-decoration: none
          &--like
            margin:
              right: 133px
            @media (max-width: 991.98px)
              margin:
                right: 0
            @media (max-width: 767.98px)
              margin:
                bottom: 8px
            span
              display: inline-block
              width: 21.74px
              height: 20px
              margin:
                left: 17px
              .icon
                fill: #e70068
          &--delete
            span
              display: inline-block
              width: 20px
              height: 20px
              margin:
                left: 15px
              .icon
                margin:
                  top: -2px
                fill: #e70068
    .element
      margin:
        bottom: 30px
      &__link
        background-color: #f8f8f8
        width: 264px
        /*height: 160px*/
        display: flex
        @media (max-width: 767.98px)
          width: 350px
          height: 200px
        @media (max-width: 575.98px)
          width: 100%
        &:hover, &:focus
          text-decoration: none
      &__information
        display: flex
        flex-grow: 1
        justify-content: space-between
        @media (max-width: 991.98px)
          flex-wrap: wrap
      &__photo
        max-width: 190px
        display: inline-block
        margin:
          top: auto
          bottom: auto
          left: auto
          right: auto
      &--jumble
      .element__photo
        width: 264px
        height: 100%
        background-image: url("../assets/joanna-kosinska-255355-unsplash.jpg")
        background-repeat: no-repeat
        background-size: 380px auto
        background-position: center 0
        @media (max-width: 991.98px)
          width: 243px
          background-size: 350px auto
        @media (max-width: 767.98px)
          width: 350px
          height: 200px
        @media (max-width: 575.98px)
          width: 100%
          background-size: cover
      &--jumble-mystery
      .element__photo
        width: 264px
        height: 100%
        background-image: url("../assets/joanna-kosinska-255355-unsplash.jpg")
        background-repeat: no-repeat
        background-size: 380px auto
        background-position: center 0
        @media (max-width: 991.98px)
          width: 243px
          background-size: 350px auto
        @media (max-width: 767.98px)
          width: 350px
          height: 200px
        @media (max-width: 575.98px)
          width: 100%
          background-size: cover
      &__look
        transition: all 0.2s ease
        display: inline-block
        color: #000000
        padding:
          bottom: 5px
        border-bottom: 1px dashed #e70068
        margin:
          top: 13px
          left: 31px
        &:hover, &:focus
          text-decoration: none
          color: #e70068
        @media (max-width: 1199.98px)
          margin:
            left: 20px
        @media (max-width: 767.98px)
          margin:
            left: 0
      &__name--wrapper
        display: flex
        flex-direction: column
      &__random
        color: rgba(0, 0, 0, 0.5)
        padding:
          left: 32px
        margin:
          top: 20px
          bottom: 0
          left: 31px
        background-image: url("../assets/Icons/gift-box.svg")
        background-repeat: no-repeat
        background-size: contain
        background-position: 0 0
        @media (max-width: 1199.98px)
          margin:
            left: 20px
        @media (max-width: 767.98px)
          margin:
            left: 0
      &__content
        display: flex
        align-items: flex-start
        @media (max-width: 767.98px)
          flex-wrap: wrap
      &__name
        transition: all 0.2s ease
        color: #000000
        line-height: 20px
        margin:
          top: 6px
          left: 31px
          right: auto
        &:hover, &:focus
          text-decoration: none
          color: #e70068
        @media (max-width: 1199.98px)
          margin:
            left: 20px
        @media (max-width: 991.98px)
          margin:
            right: 0
        @media (max-width: 767.98px)
          margin:
            top: 20px
            left: 0
            right: 100px
      &__col
        margin:
          right: 45px
        @media (max-width: 991.98px)
          margin:
            right: 0
        .el-input-number
          width: 152px
        .el-input__inner
          color: #000000
          font-size: 20px
          line-height: 30px
          border: 1px solid #f8f8f8
          width: 152px
          padding:
            top: 9px
            bottom: 14px
            left: 20px
            right: 20px
          height: 50px
        .el-input-number__decrease
          top: 10px
          left: 20px
          background-color: transparent
          border: none
        .el-input-number__increase
          top: 10px
          right: 20px
          background-color: transparent
          border: none
      &__price
        font-size: 18px
        line-height: 24px
        margin:
          right: 74px
          bottom: 0
        @media (max-width: 991.98px)
          margin:
            right: 0
      &__delete
        transition: all 0.2s ease
        color: #000000
        line-height: 20px
        &:hover, &:focus
          text-decoration: none
          color: #e70068
      &__contrlos
        margin:
          top: 9px
          right: 55px
        display: flex
        align-items: center
        @media (max-width: 1199.98px)
          margin:
            right: 0
        @media (max-width: 991.98px)
          width: 350px
          justify-content: space-between
          margin:
            top: 20px
            left: 31px
        @media (max-width: 767.98px)
          margin:
            top: 15px
            left: 0
        @media (max-width: 575.98px)
          width: 100%
    .total
      &__content
        padding:
          top: 70px
          bottom: 50px
        display: flex
        align-items: center
        @media (max-width: 991.98px)
          justify-content: space-between
        @media (max-width: 767.98px)
          flex-wrap: wrap
        @media (max-width: 575.98px)
          flex-direction: column
          align-items: flex-start
          padding:
            top: 40px
      &__button
        &--icon
          display: inline-block
          width: 12px
          height: 12px
          margin:
            left: 5px
          .icon
            margin:
              top: -2px
            fill: #ffffff
        @media (max-width: 767.98px)
          margin:
            top: 20px
      &__promo
        transition: all 0.2s ease
        display: inline-block
        padding:
          bottom: 8.5px
        color: #000000
        border-bottom: 1px dashed #e70068
        margin:
          left: 24px
          right: auto
        &--activated
          display: none
        @media (max-width: 991.98px)
          margin:
            right: 0
            left: 0
        @media (max-width: 575.98px)
          margin:
            bottom: 20px
        &:hover, &:focus
          color: #e70068
          text-decoration: none
      &__promo.activated
        border: none
        color: #e70068
        .total__promo--first
          display: none
        .total__promo--activated
          display: inline-block
      &__price
        font-weight: 700
        font-size: 20px
        line-height: 27px
        margin:
          bottom: 0
          right: 40px
        span
          display: inline-block
          margin:
            left: 12px
        @media (max-width: 991.98px)
          margin:
            right: 0
      &__button
        margin:
          right: 34px
        @media (max-width: 991.98px)
          margin:
            right: 0

    .alerts
      &__element
        display: none
        position: fixed
        z-index: 10000
        top: 0
        left: 0
        right: 0
        margin:
          left: auto
          right: auto
        width: 700px
        background-color: #e70068
        color: #ffffff
        @media (max-width: 767.98px)
          width: calc(100% - 60px)
          margin:
            left: 30px
            right: 30px
        &--basket.show
          display: block
        &--products.show
          display: block
        p
          text-align: center
          line-height: 20px
          padding:
            top: 14px
            bottom: 16px
            left: 10px
            right: 10px
          margin:
            bottom: 0

    .modals
      display: flex
      align-items: center
      .clean
        .el-dialog__header
          display: none
        .el-dialog
          width: 600px
          padding: 0
          @media (max-width: 767.98px)
            width: 500px
          @media (max-width: 575.98px)
            width: 100%
        &__content
          width: 600px
          top: 0
          left: 0
          right: 0
          bottom: 0
          height: 400px
          padding:
            top: 35px
            bottom: 50px
          margin:
            top: auto
            bottom: auto
            left: auto
            right: auto
          background-color: #fff
          @media (max-width: 767.98px)
            width: 500px
          @media (max-width: 575.98px)
            width: calc(100% - 60px)
            padding:
              left: 10px
              right: 10px
        &__title
          font-size: 30px
          line-height: 40px
          font-weight: 700
          text-align: center
          margin:
            bottom: 50px
          @media (max-width: 575.98px)
            font-size: 25px
            line-height: 35px
            margin:
              bottom: 40px
        &__description
          text-align: center
          margin:
            bottom: 90px
          @media (max-width: 575.98px)
            margin:
              bottom: 50px
        &__link
          transition: all 0.2s ease
          color: #000000
          &:hover, &:focus
            text-decoration: none
            color: #e70068
        &__button
          margin:
            right: 50px
          @media (max-width: 575.98px)
            margin:
              right: 0
              bottom: 15px
        &__buttons
          display: flex
          justify-content: center
          align-items: center
          margin:
            left: auto
            right: auto
          @media (max-width: 575.98px)
            flex-direction: column
        &__icon
          width: 50px
          height: 50px
          background-image: url("../assets/Icons/rubbish-bin-delete-button.svg")
          background-repeat: no-repeat
          background-size: cover
          margin:
            left: auto
            right: auto
            bottom: 16px

      .favourite
        .el-dialog__header
          display: none
        .el-dialog
          width: 600px
          @media (max-width: 767.98px)
            width: 500px
          @media (max-width: 575.98px)
            width: 100%
        &__content
          width: 600px
          height: 400px
          padding:
            top: 35px
            bottom: 50px
          margin:
            top: auto
            bottom: auto
            left: auto
            right: auto
          background-color: #fff
          @media (max-width: 767.98px)
            width: 500px
          @media (max-width: 575.98px)
            width: calc(100% - 60px)
            padding:
              left: 10px
              right: 10px
        &__title
          font-size: 30px
          line-height: 40px
          font-weight: 700
          text-align: center
          margin:
            bottom: 50px
          @media (max-width: 575.98px)
            font-size: 25px
            line-height: 35px
            margin:
              bottom: 40px
        &__description
          width: 450px
          text-align: center
          margin:
            left: auto
            right: auto
            bottom: 60px
          @media (max-width: 575.98px)
            width: 100%
            margin:
              bottom: 40px
        &__link
          transition: all 0.2s ease
          color: #000000
          &:hover, &:focus
            text-decoration: none
            color: #e70068
        &__button
          margin:
            right: 50px
          @media (max-width: 575.98px)
            margin:
              right: 0
              bottom: 15px
        &__buttons
          display: flex
          justify-content: center
          align-items: center
          margin:
            left: auto
            right: auto
          @media (max-width: 575.98px)
            flex-direction: column
        &__icon
          width: 55px
          height: 55px
          background-image: url("../assets/Icons/favorite-heart-button.svg")
          background-repeat: no-repeat
          background-size: cover
          margin:
            left: auto
            right: auto
            bottom: 16px

      .sale
        .el-dialog__header
          display: none
        .el-dialog
          width: 600px
          padding: 0
          @media (max-width: 767.98px)
            width: 550px
          @media (max-width: 575.98px)
            width: 100%
        &__content
          width: 600px
          height: 600px
          padding:
            top: 106px
            bottom: 50px
          margin:
            top: auto
            bottom: auto
            left: auto
            right: auto
          background-color: #fff
          @media (max-width: 767.98px)
            width: 550px
            height: 550px
          @media (max-width: 575.98px)
            width: calc(100% - 30px)
            height: 450px
            padding:
              top: 40px
              left: 10px
              right: 10px
        &__close
          width: 15px
          height: 15px
          cursor: pointer
          position: absolute
          top: 54px
          right: 54px
          background-image: url(../assets/Icons/cancel.svg)
          background-size: cover
          background-repeat: no-repeat
          @media (max-width: 575.98px)
            top: 20px
            right: 20px
        &__title
          font-size: 30px
          line-height: 40px
          font-weight: 700
          text-align: center
          margin:
            bottom: 19px
          @media (max-width: 575.98px)
            font-size: 25px
            line-height: 35px
            margin:
              bottom: 15px
        &__wrapper
          padding:
            left: 33px
            right: 33px
        &__promo.el-input
          width: 100%
          .el-input__inner
            padding:
              left: 5px
              bottom: 10px
            border: none
            border-bottom: 1px solid #c4c4c4
            font-size: 15px
            line-height: 20px

            &::placeholder
              font-size: 15px
              line-height: 20px
              color: #DCDCDC
        &__description
          width: 470px
          text-align: center
          margin:
            left: auto
            right: auto
            bottom: 40px
          @media (max-width: 575.98px)
            width: 100%

        &__alert
          transition: all 0.2s ease
          line-height: 20px
          color: #e70068
          margin:
            bottom: 0
          opacity: 0
          margin:
            left: 33px
            top: 43px
          @media (max-width: 575.98px)
            margin:
              top: 30px
        &__alert.show
          opacity: 1
        &__link
          transition: all 0.2s ease
          color: #000000
          margin:
            left: 47px
            right: 44px
          &:hover, &:focus
            text-decoration: none
            color: #e70068
          @media (max-width: 575.98px)
            margin:
              right: 10px
              left: 30px
        &__buttons
          display: flex
          justify-content: flex-end
          align-items: center
          margin:
            top: 124px
          @media (max-width: 767.98px)
            margin:
              top: 90px
          @media (max-width: 575.98px)
            justify-content: center
            margin:
              top: 50px

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
          @media (max-width: 575.98px)
            display: flex
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
