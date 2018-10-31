<template>
  <!--<b-container>-->
  <!--<b-modal class="repeat-modal" :id="id" hide-header hide-footer centered>-->

  <div>
    <!--<el-button type="text" @click="insideModal = true">inside modal</el-button>-->
    <!--<el-button type="text" @click="insideShow = true">inside modal</el-button>-->

    <el-dialog :visible="getInsideShow" :close-on-press-escape="true" class="inside decor" @close="setInsideShow(false)" @open="setInsideShow(true)">
      <b-container>
        <b-row>
          <b-col>
            <div v-if="checkModals" class="inside__content" >
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
                  <el-button @click="setInsideShow(false)">Закрыть подробности</el-button>
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
                    <p class="inner-text__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat blanditiis odio ipsum ipsa, eum magni, expedita mollitia consequatur laudantium placeat alias doloribus quisquam! Similique praesentium enim ducimus! Unde, nihil.</p>
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


  <!--<el-dialog :visible.sync="insideVisible"-->
  <!--class="inside-modal">-->

  <!--<div class="inside-modal__header">-->
  <!--<div class="inside-modal__name">-->
  <!--Jumble Box Light-->
  <!--</div>-->
  <!--<el-radio-group v-model="radioModal" class="inside-modal__radio">-->
  <!--<el-radio-button class="inside-modal__radio-sweets" label="Сладости"></el-radio-button>-->
  <!--<el-radio-button label="Оформление"></el-radio-button>-->
  <!--</el-radio-group>-->
  <!--</div>-->
  <!--<div class="inside-modal__wrapper">-->
  <!--<div class="inside-modal__title title">-->
  <!--Что внутри бокса-->
  <!--</div>-->
  <!--<div class="inside-modal__products">-->
  <!--<div class="inside-modal__element">-->
  <!--<a href="#">-->
  <!--<div class="inside-modal__element-wrapper">-->
  <!--<div class="inside-modal__element-icon">-->
  <!--<img src="../../assets/http___pluspng.com_img-png_snickers-png-file-snickers-wrapped-png-589.png" alt="Батончик Snikers" width="340">-->
  <!--</div>-->
  <!--<div class="inside-modal__element-title">Батончик Snickers</div>-->
  <!--<div class="inside-modal__element-price">60 грн.</div>-->
  <!--<div class="inside-modal__element-place">Занимает место в боксе: 1</div>-->
  <!--</div>-->
  <!--&lt;!&ndash;<div class="inside-modal__hide">&ndash;&gt;-->
  <!--&lt;!&ndash;<p>&ndash;&gt;-->
  <!--&lt;!&ndash;Перейти к наполнению&ndash;&gt;-->
  <!--&lt;!&ndash;</p>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--</a>-->
  <!--</div>-->
  <!--</div>-->

  <!--</div>-->

  <!--</el-dialog>-->

  <!--</b-modal>-->
  <!--</b-container>-->

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'InsideModal',
  components: {},
  // props: {
  //   showDialog: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      checkModals: true,
      radioModal: 'Сладости',
      insideVisible: false,
    };
  },
  computed: {
    ...mapGetters(['getInsideShow']),
    insideModal() {
      return this.getInsideShow;
    },
  },
  methods: {
    ...mapMutations(['setInsideShow']),
  },
};
</script>

<style lang="sass">


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
        background-image: url("../../assets/http___pluspng.com_img-png_snickers-png-file-snickers-wrapped-png-589.png")
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
        .el-button + .el-button
          margin:
            left: 0px
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
        background-image: url("../../assets/white.jpg")
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
        background-image: url(../../assets/Icons/letter.svg)
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
