<template>
  <div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-else-if="loading" class="loading">
      <!--toDo: добавить отступы сверху и снизу от анимации загрузки. Для постоянного вызова загрузки поставить ! перед loading, который на строку выше-->
      <Loading></Loading>
    </div>
    <div v-else-if="currentProduct" class="Item">
      <section class="characteristics">
        <b-container>

          <b-row>
            <b-col cols="12">
              <router-link to="/">
                <a href="#" class="characteristics__link">
                  <span>
                    <svg id="Layer_1" class="characteristics__link--icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
                      <g>
                        <g>
                          <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <p>Вернуться назад</p>
                </a>
              </router-link>
            </b-col>
            <b-col lg="6" class="characteristics__photo">

              <el-carousel :interval="5000" arrow="never" trigger="click">
                <div v-if="getDiscount !== 100">
                  <div class="characteristics__sale">{{ getDiscount }}%</div>
                </div>
                <!--toDo: картинки обрезаются-->
                <el-carousel-item v-for="item in currentProduct.images.edges" :key="item.node.id">
                  <div class="characteristics__wrapper">
                    <img :alt="item.node.alt"
                         :src="item.node.url">
                  </div>
                </el-carousel-item>
              </el-carousel>
            </b-col>
            <b-col lg="6" class="characteristics__information information">
              <div class="information__content">
                <h3 class="information__title">{{ currentProduct.name }}</h3>

                <vFormat v-if="currentProduct.variants.edges.length > 1" v-model="selectedVariant"
                         :variants="currentProduct.variants.edges | getVariants"></vFormat>

                <div class="prices">
                  <p class="information__price">{{ getSelectedProductPrice.priceDiscounted ? getSelectedProductPrice.priceDiscounted : getSelectedProductPrice.price }} грн.</p>
                  <p v-if="getSelectedProductPrice.priceDiscounted !== null" class="information__price--old">{{ getSelectedProductPrice.price }} грн.</p>
                </div>
                <div class="characteristics__controls controls">
                  <template>
                    <el-input-number v-model="productCount" :min="1" :max="10" @change="handleChange"></el-input-number>
                  </template>
                </div>
                <div class="information__buttons">
                  <el-button class="information__button" @click="cartButtonClick()"><p>Добавить в корзину</p>
                    <span>
                      <svg id="Capa_1" class="information__button--icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                          <g>
                            <path d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                          C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                          c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                          C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
                          c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
                          c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
                          c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </el-button>
                  <a href="#" class="information__link">Добавить в список желани</a>
                </div>
                <p class="information__manufacturer">Производитель: {{ currentProduct.attributes[1].value.name }}</p>
                <p class="information__occasions">Популярные поводы: Свадьба / День рождения / Извинения</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="description-item">
        <b-container>
          <b-row>

            <b-col cols="12">
              <h2 class="description-item__title">Описание товара</h2>
              <div class="description-item__information" v-html="currentProduct.description"></div>
            </b-col>

            <b-col cols="12" class="description-item__item-advantages item-advantages">
              <div class="item-advantages__content">
                <b-row>
                  <b-col md="4" class="item-advantages__element">
                    <div class="item-advantages__photo item-advantages__photo--car">
                      <svg id="Capa_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 355.276 355.276" style="enable-background:new 0 0 355.276 355.276;"
                           xml:space="preserve">
                        <g>
                          <g>
                            <path d="M76.326,235.354c-18.488,0-33.471,14.979-33.471,33.469s14.983,33.467,33.471,33.467
                            c18.495,0,33.473-14.977,33.473-33.467S94.821,235.354,76.326,235.354z M76.326,283.372c-8.037,0-14.549-6.513-14.549-14.55
                            c0-8.041,6.512-14.55,14.549-14.55c8.038,0,14.554,6.509,14.554,14.55C90.88,276.86,84.364,283.372,76.326,283.372z"/>
                            <path d="M252.822,235.354c-18.488,0-33.471,14.979-33.471,33.469s14.982,33.467,33.471,33.467
                            c18.494,0,33.473-14.977,33.473-33.467S271.316,235.354,252.822,235.354z M252.822,283.372c-8.038,0-14.551-6.513-14.551-14.55
                            c0-8.041,6.513-14.55,14.551-14.55c8.037,0,14.554,6.509,14.554,14.55C267.376,276.86,260.859,283.372,252.822,283.372z"/>
                            <path d="M10,195.602h154.313c5.5,0,10-4.5,10-10v-59.505c0-5.5-4.5-10-10-10H10c-5.5,0-10,4.5-10,10v59.505
                            C0,191.102,4.5,195.602,10,195.602z"/>
                            <path d="M118.709,109.854h45.406c5.5,0,10-4.5,10-10V62.987c0-5.5-4.5-10-10-10h-45.406c-5.5,0-10,4.5-10,10v36.867
                            C108.709,105.354,113.209,109.854,118.709,109.854z"/>
                            <path d="M10,109.854h82.183c5.5,0,10-4.5,10-10v-20.69c0-5.5-4.5-10-10-10H10c-5.5,0-10,4.5-10,10v20.69
                            C0,105.354,4.5,109.854,10,109.854z"/>
                            <path d="M318.407,182.44c-12.272-3.191-19.295-5.196-24.115-14.504l-16.114-32.626c-4.82-9.307-17.339-16.922-27.819-16.922
                            H219.35v-9.257c0-5.5-4.5-10-10-10h-18.793c-5.5,0-10,4.5-10,10v86.93c-1.992,4.027-6.135,6.82-10.911,6.82H50.966
                            c-0.284,0-0.64,0.014-1.052,0.037H30.397v-0.033h-8.115c-0.491-0.072-13.002-0.024-13.002-0.024c-5.5,0-9.28,4.403-9.28,9.903
                            v9.406v18.379v7.369v3.641v9.285c0,5.5,4.5,10,10,10h9.286h2.142h11.335c-0.031-0.67-0.051-1.344-0.051-2.021
                            c0-24.048,19.565-43.611,43.615-43.611c24.05,0,43.616,19.563,43.616,43.611c0,0.678-0.021,1.352-0.051,2.021h86.176
                            c1.084,0,2.146-0.102,3.183-0.275c-0.022-0.58-0.044-1.161-0.044-1.746c0-24.048,19.564-43.611,43.615-43.611
                            c24.05,0,43.617,19.563,43.617,43.611c0,0.678-0.021,1.352-0.052,2.021h39.83c10.483,0,19.059-8.576,19.059-19.058v-36.209
                            C355.275,185.086,328.595,185.086,318.407,182.44z M219.352,180.742V169.83v-38.193h24.233c9.326,0,20.464,6.776,24.754,15.057
                            l14.338,29.03c1.049,2.027,2.22,3.66,3.542,5.019L219.352,180.742L219.352,180.742z"/>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h3 class="item-advantages__title">Самовывоз</h3>
                    <div class="item-advantages__description">Работаем с 10:00 - 22:00</div>
                  </b-col>
                  <b-col md="4" class="item-advantages__element">
                    <div class="item-advantages__photo item-advantages__photo--truck">
                      <svg id="Capa_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                        <g>
                          <path d="M21.474,377.522V117.138c0-14.469,11.729-26.199,26.199-26.199h260.25c14.469,0,26.198,11.73,26.198,26.199v260.385
                          c0,4.823-3.909,8.733-8.733,8.733H30.207C25.383,386.256,21.474,382.346,21.474,377.522z M231.634,466.724
                          c0,30.01-24.329,54.338-54.338,54.338c-30.009,0-54.338-24.328-54.338-54.338c0-30.011,24.329-54.338,54.338-54.338
                          C207.305,412.386,231.634,436.713,231.634,466.724z M204.464,466.724c0-15.005-12.164-27.169-27.169-27.169
                          s-27.17,12.164-27.17,27.169s12.165,27.17,27.17,27.17S204.464,481.729,204.464,466.724z M130.495,412.385H8.733
                          c-4.823,0-8.733,3.91-8.733,8.733v26.495c0,4.823,3.91,8.733,8.733,8.733h97.598C108.879,438.862,117.704,423.418,130.495,412.385z
                          M515.938,466.724c0,30.01-24.329,54.338-54.338,54.338c-30.01,0-54.338-24.328-54.338-54.338
                          c0-30.011,24.328-54.338,54.338-54.338C491.609,412.385,515.938,436.713,515.938,466.724z M488.77,466.724
                          c0-15.005-12.165-27.169-27.17-27.169c-15.006,0-27.169,12.164-27.169,27.169s12.164,27.17,27.169,27.17
                          S488.77,481.729,488.77,466.724z M612,421.118v26.495c0,4.823-3.91,8.733-8.733,8.733h-70.704
                          c-5.057-34.683-34.906-61.427-70.961-61.427c-36.062,0-65.912,26.745-70.969,61.427H248.261
                          c-2.549-17.483-11.373-32.928-24.164-43.961h134.994V162.594c0-9.646,7.82-17.466,17.466-17.466h82.445
                          c23.214,0,44.911,11.531,57.9,30.77l53.15,78.721c7.796,11.547,11.962,25.161,11.962,39.094v118.672h21.253
                          C608.09,412.385,612,416.295,612,421.118z M523.408,256.635l-42.501-60.393c-1.636-2.324-4.3-3.707-7.142-3.707H407.47
                          c-4.822,0-8.733,3.91-8.733,8.733v60.393c0,4.824,3.91,8.733,8.733,8.733h108.798C523.342,270.394,527.48,262.421,523.408,256.635z
                          "/>
                        </g>
                      </svg>
                    </div>
                    <h3 class="item-advantages__title">Доставка</h3>
                    <div class="item-advantages__description">К Вам домой или на отделение почты</div>
                  </b-col>
                  <b-col md="4" class="item-advantages__element">
                    <div class="item-advantages__photo item-advantages__photo--speak">
                      <svg id="Capa_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 14 14" style="enable-background:new 0 0 14 14;" xml:space="preserve">
                        <g>
                          <path d="M7,0.935c-3.866,0-7,2.463-7,5.5c0,1.438,0.703,2.749,1.854,3.729
                          c-0.044,0.955-0.242,2.239-0.942,2.901c1.337,0,2.706-0.88,3.518-1.514c0.796,0.248,1.663,0.384,2.57,0.384c3.866,0,7-2.463,7-5.5
                          S10.866,0.935,7,0.935z"/>
                        </g>
                      </svg>
                    </div>
                    <h3 class="item-advantages__title">Остались вопросы?</h3>
                    <div class="item-advantages__description">Ответим по телефону +38(050)-666-66-66</div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="add-jumble">
        <b-container>
          <b-row>
            <b-col cols="12">
              <div class="add-jumble__content">
                <div class="add-jumble__wrapper">
                  <h2 class="add-jumble__title">Добавьте этот товар в Jumble Box</h2>
                  <p class="add-jumble__description">Внешний вид упаковки непосредственно влияет на эмоции человека при
                  получении презента, ведь людям нравятся красивые и необычные вещи. Начните заполнение своего
                  подарочного бокса с этого товара.</p>
                  <el-button class="add-jumble__button"><p>Хочу Jumble Box</p>
                    <span class="add-jumble__button--icon">
                      <svg id="Capa_1" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                          <g>
                            <path d="M361,0c-31.666,0-59.432,16.522-75.478,41.31C277.599,34.36,267.345,30,256,30c-11.345,0-21.599,4.36-29.522,11.31
                            C210.432,16.522,182.666,0,151,0c-33.091,0-60,26.909-60,60c0,10.977,3.177,21.14,8.344,30H151c-16.538,0-30-13.462-30-30
                            s13.462-30,30-30c33.091,0,60,26.909,60,60h90c0-33.091,26.909-60,60-60c16.538,0,30,13.462,30,30s-13.462,30-30,30h51.656
                            C417.823,81.14,421,70.977,421,60C421,26.909,394.091,0,361,0z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect y="120" width="241" height="121"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect x="271" y="120" width="241" height="121"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect x="61" y="271" width="180" height="241"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect x="271" y="271" width="180" height="241"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </el-button>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="similar-products">
        <b-container>
          <b-row>
            <b-col cols="12"><h2 class="similar-products__title--main">Похожие товары</h2></b-col>
            <b-col sm="6" lg="3" class="similar-products__element similar-products__element--kinder">
              <div class="similar-products__content">
                <div class="similar-products__photo">
                  <a href="#">
                    <img src="../assets/12.png" alt="Яйцо Kinder Surprise" width="139" height="139">
                  </a>
                </div>
                <h4 class="similar-products__title"><a href="#">Яйцо Kinder Surprise</a></h4>
                <div class="similar-products__information">
                  <p class="similar-products__price">88 грн.</p>
                  <div class="similar-products__basket">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                            C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                            c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                            C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
                            c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
                            c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
                            c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
                      </g></g>
                    </svg>
                  </div>
                  <div class="similar-products__like">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                      <g>
                        <g id="favorite">
                          <path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                            C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col sm="6" lg="3" class="similar-products__element similar-products__element--sprite">
              <div class="similar-products__content">
                <div class="similar-products__photo">
                  <a href="#">
                    <img src="../assets/Sprite.png" alt="Напиток Sprite" width="287" height="130">
                  </a>
                </div>
                <h4 class="similar-products__title"><a href="#">Напиток Sprite</a></h4>
                <div class="similar-products__information">
                  <p class="similar-products__price">50 грн.</p>
                  <div class="similar-products__basket">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                            C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                            c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                            C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
                            c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
                            c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
                            c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
                      </g></g>
                    </svg>
                  </div>
                  <div class="similar-products__like">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                      <g>
                        <g id="favorite">
                          <path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                            C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col sm="6" lg="3" class="similar-products__element similar-products__element--fanta">
              <div class="similar-products__content">
                <div class="similar-products__photo">
                  <a href="#">
                    <img src="../assets/3.png" alt="Напиток Fanta" width="152" height="119">
                  </a>
                </div>
                <h4 class="similar-products__title"><a href="#">Напиток Fanta</a></h4>
                <div class="similar-products__information">
                  <p class="similar-products__price">65 грн.</p>
                  <div class="similar-products__basket">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                            C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                            c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                            C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
                            c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
                            c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
                            c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
                      </g></g>
                    </svg>
                  </div>
                  <div class="similar-products__like">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                      <g>
                        <g id="favorite">
                          <path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                            C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col sm="6" lg="3" class="similar-products__element similar-products__element--milka">
              <div class="similar-products__content">
                <div class="similar-products__sale">-10%</div>
                <div class="similar-products__photo">
                  <a href="#">
                    <img src="../assets/milka.png" alt="Шоколад Milka Молочный" width="157" height="157">
                  </a>
                </div>
                <h4 class="similar-products__title"><a href="#">Шоколад Milka Молочный</a></h4>
                <div class="similar-products__information">
                  <p class="similar-products__price">75 грн.</p>
                  <p class="similar-products__old-price">83 грн.</p>
                  <div class="similar-products__basket">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                            C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                            c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                            C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
                            c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
                            c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
                            c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
                      </g></g>
                    </svg>
                  </div>
                  <div class="similar-products__like">
                    <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                      <g>
                        <g id="favorite">
                          <path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
                            C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g>
                    </svg>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Format from '../components/Format.vue';
import Loading from '../components/Loading.vue';
import { getDiscount as getDiscountBase } from '../utils/priceFuncs';

export default {
  name: 'Item',
  components: {
    vFormat: Format,
    Loading,
  },
  filters: {
    getVariants(uncutVariants) {
      const newVariants = [];
      for (let index = 0; index < uncutVariants.length; index++) {
        const { id, name } = uncutVariants[index].node;
        newVariants.push({ id, name });
      }
      return newVariants;
    },
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
      error: null,

      productCount: 1,
      selectedVariant: '',
    };
  },
  computed: {
    ...mapGetters(['getCartItems', 'getCurrentProduct']),
    seo() {
      if (this.currentProduct) {
        return {
          title: this.currentProduct.seoTitle,
        };
      }
      return {};
    },
    currentProduct() {
      return this.getCurrentProduct(window.btoa(`Product:${this.id}`));
    },
    getSelectedProductPrice() {
      const productVariant = this.currentProduct.variants.edges;
      for (let i = 0; i < productVariant.length; i++) {
        if (productVariant[i].node.id === this.selectedVariant) {
          const priceDiscounted = productVariant[i].node.availability.priceDiscounted.net.amount;
          const price = productVariant[i].node.price.amount;
          if (price === priceDiscounted) {
            return { price, priceDiscounted: null };
          }
          console.log(productVariant[i].node);
          return { price, priceDiscounted };
        }
      }
      return { price: null, priceDiscounted: null };
    },
    getDiscount() {
      const { price, priceDiscounted } = this.getSelectedProductPrice;
      console.log(price, priceDiscounted);
      return getDiscountBase(price - priceDiscounted, price);
    },
  },
  watch: {
    $route:
      'fetchData',
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(['loadProduct']),
    ...mapMutations(['addToCart']),
    handleChange(value) {
      console.log(value);
    },
    async fetchData() {
      this.error = null;
      this.loading = !this.currentProduct;
      const callback = (err) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.selectedVariant = this.currentProduct.variants.edges[0].node.id;
        }
      };
      this.loadProduct({ cb: callback, id: window.btoa(`Product:${this.id}`) });
    },
    cartButtonClick() {
      this.addToCart({
        id: this.product.id,
        quantity: this.productCount,
        price: this.getSelectedProductPrice.priceDiscounted ? this.getSelectedProductPrice.priceDiscounted : this.getSelectedProductPrice.price,
        photoUrl: this.product.images.edges[0].node.url,
        name: this.product.name,
      });
      this.productCount = 1;
    },
  },
  metaInfo() {
    // // if no subcomponents specify a metaInfo.title, this title will be used
    return {
      title: this.seo.title,
    };

    // // all titles will be injected into this template
    // titleTemplate: '%s | My Awesome Webapp',
  },
};
</script>

<style lang="sass">
  .characteristics
    margin:
      top: 37px
    &__sale
      position: absolute
      font-size: 20px
      font-weight: 700
      line-height: 70px
      text-align: center
      color: #ffffff
      top: 0
      left: 0
      width: 140px
      height: 70px
      z-index: 100
      background-color: #e70068
      @media (max-width: 575.98px)
        width: 100px
        height: 50px
        line-height: 50px
        font-size: 15px
    &__link
      transition: all 0.2s ease
      display: flex
      align-items: center
      width: 150px
      color: #000000
      margin:
        bottom: 40px
      @media (max-width: 767.98px)
        margin:
          bottom: 20px
      p
        font-weight: 700
        margin:
          bottom: 0
      span
        transform: rotate(-180deg)
        display: inline-block
        width: 12px
        height: 12px
        margin:
          top: 13px
          right: 12px
      &:hover, &:focus
        text-decoration: none
        color: #e70068
        .characteristics__link--icon
          fill: #e70068
      &--icon
        transition: all 0.2s ease
        fill: #000000
    &__wrapper
      display: flex
      align-items: flex-start
      justify-content: center
      height: 420px
      overflow: hidden
      /*width: 340px*/
      margin:
        left: auto
        right: auto
      img
        object-fit: cover
      @media (max-width: 991.98px)
        height: 300px


    &__photo
    .el-carousel
      &__container
        position: relative
        height: 500px
        background-color: #f8f8f8
        @media (max-width: 767.98px)
          height: 450px
        @media (max-width: 575.98px)
          height: 400px
      &__item
        background-size: cover
        background-repeat: no-repeat
        color: #ffffff
        height: 500px
        @media (max-width: 767.98px)
          height: 450px
        @media (max-width: 575.98px)
          height: 400px

      .el-carousel__indicator
        margin:
          bottom: 38px
      .el-carousel__button
        padding: 0
        width: 5px
        height: 5px
        border-radius: 50%
        background-color: #000000
        opacity: 0.5

      .el-carousel__indicator.is-active
        .el-carousel__button
          width: 10px
          height: 10px
          opacity: 1

      .el-carousel__indicators
        display: flex
        align-items: center

    .information
      padding:
        left: 60px
      @media (max-width: 1199.98px)
        padding:
          left: 20px
      @media (max-width: 991.98px)
        padding:
          left: 15px
      &__title
        font-size: 30px
        font-weight: 400
        line-height: 40px
        margin:
          top: 10px
          bottom: 25px
        @media (max-width: 1199.98px)
          margin:
            bottom: 15px
        @media (max-width: 991.98px)
          margin:
            top: 40px
        @media (max-width: 767.98px)
          margin:
            top: 10px
            bottom: 20px
      &__price
        display: inline-block
        font-size: 45px
        line-height: 55px
        font-weight: 700
        color: #e70068
        margin-right: 34px
        margin-bottom: 0px
        @media (max-width: 767.98px)
          font-size: 30px
          line-height: 40px
        &--old
          display: inline-block
          font-size: 45px
          line-height: 55px
          font-weight: 400
          color: #c4c4c4
          text-decoration: line-through
          margin:
            bottom: 0
          @media (max-width: 767.98px)
            font-size: 30px
            line-height: 40px
      &__button
        &--icon
          margin:
            top: -4px
          width: 20px
          height: 20px
          fill: #ffffff
        span
          display: inline-block
          margin:
            top: 0px
        p
          display: inline-block
          margin:
            bottom: 0
            right: 13px
      &__buttons
        margin:
          bottom: 48px
        @media (max-width: 1199.98px)
          margin:
            bottom: 30px
        @media (max-width: 767.98px)
          margin:
            bottom: 40px
      &__link
        transition: all 0.2s ease
        display: inline-block
        margin:
          left: 40px
        color: #000000
        &:hover, &:focus
          text-decoration: none
          color: #e70068
        @media (max-width: 1199.98px)
          margin:
            left: 15px
        @media (max-width: 767.98px)
          margin:
            top: 20px
            left: 0
          width: 100%
      &__manufacturer
        margin:
          bottom: 28px
        @media (max-width: 767.98px)
          margin:
            bottom: 15px

  .description-item
    margin:
      top: 56px
    &__title
      font-size: 30px
      line-height: 40px
      font-weight: 700
      margin:
        bottom: 36px
      @media (max-width: 575.98px)
        margin:
          bottom: 20px
    &__information
      margin:
        bottom: 50px

    .item-advantages
      &__content
        position: relative
        padding:
          top: 90px
          bottom: 128px
        background-image: url("../assets/frankie-cordoba-526925-unsplash.jpg")
        background-repeat: no-repeat
        background-size: cover
        background-position: 0 -520px
        @media (max-width: 1199.98px)
          background-position: 0 -400px
        @media (max-width: 991.98px)
          padding:
            bottom: 100px
          background-position: 0 -300px
        @media (max-width: 767.98px)
          background-position: -100px 0
          padding:
            top: 80px
            bottom: 80px
        &::after
          content: ''
          position: absolute
          z-index: 10
          top: 0
          left: 0
          bottom: 0
          right: 0
          background-color: rgba(0, 0, 0, 0.7)
        .row
          position: relative
          z-index: 100
      &__title
        color: #ffffff
        text-align: center
        font-size: 20px
        line-height: 30px
        font-weight: 700
        margin:
          bottom: 14px
      &__element
        @media (max-width: 767.98px)
          margin:
            bottom: 50px
      &__description
        color: #ffffff
        text-align: center
        width: 170px
        margin:
          bottom: 0
          left: auto
          right: auto
      &__photo
        margin:
          left: auto
          right: auto
        &--car
          width: 85px
          height: 60px
          margin:
            bottom: 36px
          .icon
            fill: #fffab9
        &--truck
          width: 85px
          height: 60px
          margin:
            bottom: 36px
          .icon
            fill: #fffab9
        &--speak
          width: 70px
          height: 61px
          margin:
            bottom: 36px
          .icon
            fill: #fffab9

  .add-jumble
    margin:
      top: 50px
    &__content
      position: relative
      background-color: #000000
      color: #ffffff
      padding:
        left: 70px
        top: 46px
        bottom: 104px
      background-image: url("../assets/samuel-holt-490207-unsplash.jpg")
      background-repeat: no-repeat
      background-size: cover
      background-position: 0 -205px
      @media (max-width: 991.98px)
        padding:
          bottom: 80px
        background-position: 0 -100px
      @media (max-width: 767.98px)
        padding:
          top: 60px
          left: 40px
          right: 20px
          bottom: 60px
        background-position: 0 0
      &::after
        content: ''
        position: absolute
        z-index: 10
        left: 0
        top: 0
        right: 0
        bottom: 0
        background-color: rgba(0, 0, 0, 0.6)
    &__wrapper
      position: relative
      z-index: 100
    &__description
      width: 840px
      margin:
        bottom: 30px
      @media (max-width: 991.98px)
        width: 600px
      @media (max-width: 767.98px)
        width: 450px
      @media (max-width: 575.98px)
        width: 100%
    &__title
      font-size: 30px
      font-weight: 700
      line-height: 40px
      margin:
        bottom: 21px
      @media (max-width: 767.98px)
        font-size: 25px
        line-height: 35px
    &__button
      p
        display: inline-block
        margin:
          bottom: 0
          right: 13px
      &--icon

        display: inline-block
        width: 20px
        height: 20px
        fill: #ffffff
        .icon
          margin:
            top: -4

  .similar-products
    position: relative
    margin:
      top: 46px
      bottom: 20px
    &__title
      a
        display: block
        font-size: 15px
        color: #000000
        text-decoration: none
        line-height: 18px
        margin:
          bottom: 22px
      &--main
        font-size: 30px
        line-height: 40px
        font-weight: 700
        margin:
          bottom: 41px
    &__sale
      position: absolute
      width: 70px
      height: 35px
      text-align: center
      background-color: #E70068
      color: #ffffff
      line-height: 35px
      font-weight: 700
      text-align: center
      top: 0
      left: 0
    &__photo
      margin:
        left: auto
        right: auto
    &__content
      overflow:
      display: flex
      flex-direction: column
      position: relative
      height: 100%
      background-color: #F8F8F8
      padding:
        top: 1px
        left: 20px
        right: 20px
        bottom: 24px
    &__element
      margin:
        bottom: 30px
      &--kinder
      .similar-products__photo
        width: 139px
        height: 139px
        margin:
          top: 34px
          bottom: 44px
          left: auto
          right: auto
      &--sprite
      .similar-products__photo
        width: 224px
        height: 130px
        margin:
          top: 44px
          bottom: 44px
          left: auto
          right: auto
      &--fanta
      .similar-products__photo
        width: 152px
        height: 119px
        margin:
          top: 49px
          bottom: 51px
          left: auto
          right: auto
      &--milka
      .similar-products__photo
        width: 157px
        height: 157px
        margin:
          top: 21px
          bottom: 39px
          left: auto
          right: auto
    &__price
      font-weight: 700
      line-height: 18px
      margin:
        bottom: 0
    &__old-price
      font-weight: regular
      line-height: 18px
      color: #c4c4c4
      text-decoration: line-through
      margin:
        left: 9px
        bottom: 0
    &__like
      cursor: pointer
      width: 22px
      height: 20px
      margin:
        left: 10px
        top: -5px
      .like
        transition: all 0.2s ease
        fill: #C4C4C4
      &:hover
        .like
          fill: #E70068

    &__basket
      cursor: pointer
      width: 15px
      height: 20px
      margin:
        left: auto
        top: -5px
      .basket
        transition: all 0.2s ease
        fill: #C4C4C4
      &:hover
        .basket
          fill: #E70068
    &__information
      display: flex
      margin:
        top: auto

  .controls
    margin:
      top: 15px
      bottom: 20px
    .el-input-number
      width: 152px
    .el-input__inner
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

  .prices
    margin-top: 30px


</style>
