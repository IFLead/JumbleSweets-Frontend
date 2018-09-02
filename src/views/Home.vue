<template>
  <div class="home">
      <main>
        <section class="about-company">
          <b-container>
            <b-row>
              <b-col cols="12" md="8" lg="9" class="about-company__description description">
                <el-carousel :interval="5000" arrow="never" trigger="click">
                  <el-carousel-item>
                    <div class="description__wrapper">
                      <b class="description__title">Вселенские сладости</b>
                      <p class="description__text">
                        Доставляем самые разные сладости и напитки из Европы, Азии и США прямо к Вам домой.
                      </p>
                      <p class="description__text">
                        Мы с удовольствием соберём для Вас стильный бокс сладостей, который станет вкусным и необычным презентом и, несомненно, подарит получателю массу положительных эмоций.
                      </p>
                      <el-button class="description__button">Посмотреть каталог</el-button>
                    </div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <div class="description__wrapper">
                      <b class="description__title">Вселенские сладости 2</b>
                      <p class="description__text">
                        Доставляем самые разные сладости и напитки из Европы, Азии и США прямо к Вам домой.
                      </p>
                      <p class="description__text">
                        Мы с удовольствием соберём для Вас стильный бокс сладостей, который станет вкусным и необычным презентом и, несомненно, подарит получателю массу положительных эмоций.
                      </p>
                      <el-button class="description__button">Посмотреть каталог</el-button>
                    </div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <div class="description__wrapper">
                      <b class="description__title">Вселенские сладости 3</b>
                      <p class="description__text">
                        Доставляем самые разные сладости и напитки из Европы, Азии и США прямо к Вам домой.
                      </p>
                      <p class="description__text">
                        Мы с удовольствием соберём для Вас стильный бокс сладостей, который станет вкусным и необычным презентом и, несомненно, подарит получателю массу положительных эмоций.
                      </p>
                      <el-button class="description__button">Посмотреть каталог</el-button>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </b-col>
              <b-col cols="12" md="4" lg="3" class="about-company__information information">
                <div class="information__news news">
                  <div class="news__actions">
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавле<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                    <p class="news__action">01.08.2018 был добавлен<span>Напиток Coca-Cola.</span></p>
                  </div>
                  <a href="#" class="news__link">Ещё новости</a>
                </div>
                <div class="information__contacts contacts">
                  <p class="contacts__phone">+38(050)-666-66-66</p>
                  <p class="contacts__email">help@jumble-sweets.com.ua</p>
                  <p class="contacts__address">г. Харьков, Героев труда 7,
                  ТРЦ Караван</p>
                  <a href="#" class="contacts__link">Мы в Instagram</a>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </section>

        <section class="category">
          <b-container>
            <b-row>
							<b-col cols="12">
								<h2 class="category__title">Популярные категории товаров</h2>
							</b-col>
              <b-col sm="6" lg="3" class="category__element">
                <a href="#">
                  <div class=" category__element-candybar">
                    <h3 class="category__element-title">Батончики</h3>
                  </div>
                </a>
              </b-col>
              <b-col sm="6" lg="3" class="category__element">
                <a href="#">
                  <div class="category__element-marmalade">
                    <h3 class="category__element-title">Мармелад</h3>
                  </div>
                </a>
              </b-col>
              <b-col sm="6" lg="3" class="category__element">
                <a href="#">
                  <div class="category__element-drinks">
                    <h3 class="category__element-title">Напитки</h3>
                  </div>
                </a>
              </b-col>
              <b-col sm="6" lg="3" class="category__element">
                <a href="#">
                  <div class="category__element-chocolate">
                    <h3 class="category__element-title">Шоколад</h3>
                  </div>
                </a>
              </b-col>
            </b-row>
          </b-container>
        </section>

        <section class="sale">
					<b-container>
						<b-row>
							<b-col>
								<div class="sale__content">
									<div class="sale__wrapper">
										<b class="sale__title">Получи 10% скидку на одну покупку.</b>
										<p class="sale__description">Используй промокод  <span class="special">JUMBLESALE2018</span> при оформлении заказа. Акция действует до <span class="sale__date">31 декабря 2018 года.</span></p>
									</div>	
								</div>
							</b-col>
						</b-row>
					</b-container>  
        </section>


				<section class="products">	
					<b-container>
						<b-row>
							<b-col cols="12" class="products__sort sort">
								<el-input placeholder="Поиск товаров" class="sort__search"></el-input>
								<div class="sort__filters">Фильтры</div>
								<h3 class="sort__title">Сортировка</h3>
								<el-select  v-model="value" placeholder="Сначала новые" class="sort__select">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</b-col>


							<!-- Для показа мобильной добавить класс show -->
							<b-col md="4" lg="3" class="products__filter filter">
								<div class="filter__content">
									<div class="filter__close">
										<svg class="filter__close--icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve"><g><g>
											<path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
												c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
												c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
												L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
												c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
												c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
												c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
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
									</div>
									<h2 class="filter__mobile-title">Фильтр</h2>
									<h3 class="filter__title filter__title--category">Категория товара</h3>
									<ul class="filter__list filter__list--category">
										<li><el-checkbox>Все (101)</el-checkbox></li>
										<li><el-checkbox>Школад (9)</el-checkbox></li>
										<li><el-checkbox>Мармелад (40)</el-checkbox></li>
										<li><el-checkbox>Батончики (1)</el-checkbox></li>
										<li><el-checkbox>Печенье (7)</el-checkbox></li>
										<li><el-checkbox>Жвачки (11)</el-checkbox></li>
										<li><el-checkbox>Напитки (33)</el-checkbox></li>
									</ul>

									<h3 class="filter__title filter__title--manufacturer">Производитель</h3>
									<ul class="filter__list filter__list--manufacture">
										<li><el-checkbox>Все</el-checkbox></li>
										<li><el-checkbox>Европа</el-checkbox></li>
										<li><el-checkbox>США</el-checkbox></li>
										<li><el-checkbox>Азия</el-checkbox></li>
									</ul>

									<h3 class="filter__title filter__title--occasion">Поводы</h3>
									<ul class="filter__list filter__list--occasion">
										<li><el-checkbox>День Рождения</el-checkbox></li>
										<li><el-checkbox>Свадьба</el-checkbox></li>
										<li><el-checkbox>Свидание</el-checkbox></li>
										<li><el-checkbox>Рождение ребенка</el-checkbox></li>
										<li><el-checkbox>Юбилей</el-checkbox></li>
									</ul>

									<h3 class="filter__title filter__title--cost">Цена</h3>
									<el-slider
										range
										:max="3000">
									</el-slider>
									<el-button class="filter__button filter__button--submit">Применить</el-button>
									<el-button class="filter__button filter__button--refresh">Сбросить</el-button>
								</div>
							</b-col>

							<b-col md="8" lg="9" class="products__catalog catalog">
								<b-row class="catalog__list">
									<b-col sm="6" lg="4" class="catalog__element catalog__element--snikers">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/http___pluspng.com_img-png_snickers-png-file-snickers-wrapped-png-589.png" alt="Батончик Snickers" width="190" height="54.52"	>
												</a>
											</div>
											<h4 class="catalog__title"><a href="#">Батончик Snickers</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">60 грн.</p>
												<div class="catalog__basket">
														<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--cola">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/cocacola_PNG22.png" alt="Напиток Coca Cola" width="183px" height="121">
												</a>	
											</div>
											<h4 class="catalog__title"><a href="#">Напиток Coca Cola</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">120 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--milka">
										<div class="catalog__content">
											<div class="catalog__sale">-10%</div>
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/milka.png" alt="Шоколад Milka Молочный" width="157" height="157">
												</a>				
											</div>
											<h4 class="catalog__title"><a href="#">Шоколад Milka Молочный</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">75 грн.</p>
												<p class="catalog__old-price">83 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--kinder">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/12.png" alt="Яйцо Kinder Surprise" width="139" height="139">
												</a>					
											</div>
											<h4 class="catalog__title"><a href="#">Яйцо Kinder Surprise</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">88 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--sprite">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/Sprite.png" alt="Напиток Sprite" width="287" height="130">
												</a>
											</div>
											<h4 class="catalog__title"><a href="#">Напиток Sprite</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">50 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--fanta">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/3.png" alt="Напиток Fanta" width="152" height="119">
												</a>
											</div>
											<h4 class="catalog__title"><a href="#">Напиток Fanta</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">65 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--oreo">
										<div class="catalog__content">
											<div class="catalog__sale">-50%</div>
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/4.png" alt="Печенье Oreo" width="125" height="100">
												</a>
											</div>
											<h4 class="catalog__title"><a href="#">Печенье Oreo</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">90 грн.</p>
												<p class="catalog__old-price">180 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--kitkat">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/5.png" alt="Батончик KitKat Chunk" width="181" height="181">
												</a>
											</div>
											<h4 class="catalog__title"><a href="#">Батончик KitKat Chunky</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">24 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
											</div>
										</div>
									</b-col>
									<b-col sm="6" lg="4" class="catalog__element catalog__element--orbit">
										<div class="catalog__content">
											<div class="catalog__photo">
												<a href="#">
													<img src="../assets/7.png" alt="Батончик KitKat Chunk" width="151" height="80">
												</a>
											</div>
											<h4 class="catalog__title"><a href="#">Жевательная резинка Orbit</a></h4>
											<div class="catalog__information">
												<p class="catalog__price">10 грн.</p>
												<div class="catalog__basket">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
														viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
														<g><g><path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
																	C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
																	c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
																	C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32
																	c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32
																	c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64
																	c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"/>
															</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>
												</div>
												<div class="catalog__like">
													<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
															width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
														<g>
															<g id="favorite">
																<path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
																	C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
													</svg>		
												</div>
											</div>
										</div>
									</b-col>
								</b-row>
							</b-col>

							<b-col md="8" lg="6" offset-md="1" offset-lg="3" >
								<div class="pagination">
									<el-pagination class="pagination__content"
										background
										layout="prev, pager, next"
										pager-count="6"
										:total="200">
									</el-pagination>
								</div>
							</b-col>
							<b-col md="3" class="pages">
								<p class="pages__count">Страница 1 из 20</p>
							</b-col>
						</b-row>
					</b-container>
				</section>

        <section class="jumble">
					<b-container>
						<b-row>
							<b-col>
								<div class="jumble__content">
									<div class="jumble__wrapper">
										<b class="jumble__title">Jumble Box - это всегда позитивные эмоции.</b>
										<p class="jumble__description">У нас можно заказать Jumble Box к любому значимому событию. Он станет отличным подарком для Вашей второй половинки, друга или коллеги по работе.</p>
										<p class="jumble__description">Jumble Box можно заказать в любом оформлении и наполнении. Каждый Jumble Box создаётся в соответствии с Вашими пожеланиями и исключительно в оригинальном стиле.</p>
										<el-button class="jumble__button">Перейти в конструктор</el-button>
									</div>
								</div>
							</b-col>
						</b-row>
					</b-container>
        </section>

        <section class="advantages">
					<b-container>
						<b-row>
							<b-col>
								<div class="advantages__content">
									<h2 class="advantages__title">Наши преимущества</h2>
									<ul class="advantages__list">
										<li class="advantages__element advantages__element--assortment">
											<h3 class="advantages__element-title">Широкий ассортимент</h3>
											<p class="advantages__description">Большой выбор товаров на любой вкус</p>
										</li>
										<li class="advantages__element advantages__element--orders">
											<h3 class="advantages__element-title">Быстрая обработка заказов</h3>
											<p class="advantages__description">Мы ценим Ваше время и понимаем, с каким волнением Вы ждёте товар, поэтому все заказы обрабатываются максимально быстро.</p>
										</li>
										<li class="advantages__element advantages__element--delivery">
											<h3 class="advantages__element-title ">Безопасная доставка и оплата</h3>
											<p class="advantages__description">Если доставка осуществляется по Харькову, Вы платите только при получении товара<br> В случае, если Вы проживаете в другом регионе Украины, доставка происходит Новой почтой посредством предоплаты или наложенного платежа.</p>
										</li>
									</ul>
								</div>
							</b-col>
						</b-row>
					</b-container>  
        </section>

        <section class="delivery">
					<b-container>
						<b-row>
							<b-col>
								<div class="delivery__content">
									<div class="delivery__wrapper">
										<h2 class="delivery__title">Доставка</h2>
										<b class="delivery__order">Заказ можно осуществить в любом регионе Украины</b>
										<ul class="delivery__list">
											<li class="delivery__element">- Бесплатная доставка по г. Харькову</li>
											<li class="delivery__element">- Возможность самовывоза</li>
											<li class="delivery__element">- Доставка Новой почтой по всей Украине</li>
										</ul>
										<p class="delivery__description">Более подробно Вы можете ознакомиться с условиями доставки и оплаты в <a href="#" class="delivery__special">специальном разделе.</a></p>
									</div>
								</div>
							</b-col>
						</b-row>
					</b-container>
        </section>
      </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      options: [{
        value: 'Option1',
        label: 'А-Я',
      }, {
        value: 'Option2',
        label: 'Цена',
      }],
      value: '',
    };
  },
};
</script>

<style lang="sass">
.description
	&__wrapper
		padding:
			left: 70px
			top: 120px
			bottom: 100px
			right: 50px
		position: relative
		z-index: 100
		@media (max-width: 991.98px)
			padding:
				top: 70px
		@media (max-width: 575.98px)
			padding:
				right: 20px
				left: 40px
	&__title
		display: block
		width: 600px
		font-size: 50px
		line-height: 55px
		margin:
			bottom: 35px
		@media (max-width: 991.98px)
			font-size: 30px
			line-height: 35px
			width: 370px
			margin:
				bottom: 30px
		@media (max-width: 767.98px)
			font-size: 25px
			line-height: 30px
			width: 280px
			margin:
				bottom: 25px
		@media (max-width: 575.98px)
			font-size: 20px
			line-height: 25px
			width: 100%
	&__text
		width: 590px
		line-height: 25px
		margin:
			bottom: 32px
		@media (max-width: 991.98px)
			width: 370px
			font-size: 14px
			line-height: 22px
			margin:
				bottom: 25px
		@media (max-width: 767.98px)
			width: 400px
			margin:
				bottom: 15px
		@media (max-width: 575.98px)
			width: 100%

		&:last-of-type
			margin:
				bottom: 42px
			@media (max-width: 991.98px)
				margin:
					bottom: 35px
	.description__button
		background-image: url("../assets/Icons/shopping-purse-icon.svg")
		background-repeat: no-repeat
		background-size: 20px 20px
		background-position: right 30px top 10px
		margin:
			bottom: 45px
		padding:
			right: 60px

	.el-carousel__indicator
		margin:
			bottom: 38px
		.el-carousel__button
			padding: 0
			width: 5px
			height: 5px
			border-radius: 50%
			background-color: #ffffff
			opacity: 0.5

	.el-carousel__indicator.is-active
		.el-carousel__button
			width: 10px
			height: 10px
			opacity: 1

	.el-carousel__indicators
		display: flex
		align-items: center

.el-carousel
	min-height: 600px
	@media (max-width: 991.98px)
		min-height: 545px
	@media (max-width: 767.98px)
		min-height: 475px
	@media (max-width: 575.98px)
		min-height: 500px

.el-carousel__item
	position: relative

	background-size: cover
	background-repeat: no-repeat
	color: #ffffff
	min-height: 600px
	@media (max-width: 991.98px)
		min-height: 545px

	@media (max-width: 767.98px)
		min-height: 475px
	@media (max-width: 575.98px)
		min-height: 500px

	&::before
		z-index: 1
		content: ''
		position: absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		background-color: rgba(0, 0, 0, 0.6)

.el-carousel__item:nth-child(1)
	background-image: url("../assets/churros-2188871_1920.jpg")
	background-position: -10px 0
	@media (max-width: 991.98px)
		background-position: -140px 0

.el-carousel__item:nth-child(2)
	background-image: url("../assets/churros-2188871_1920.jpg")
	background-position: -10px 0
	@media (max-width: 991.98px)
		background-position: -140px 0

.el-carousel__item:nth-child(3)
	background-image: url("../assets/churros-2188871_1920.jpg")
	background-position: -10px 0
	@media (max-width: 991.98px)
		background-position: -140px 0


.information
	@media (max-width: 767.98px)
		margin:
			top: 30px

.news
	position: relative
	background-color: #F8F8F8
	padding:
		left: 20px
		bottom: 15px
	&__actions
		height: 355px
		overflow: auto
		padding:
			top: 18px
		@media (max-width: 991.98px)
			height: 300px
		@media (max-width: 767.98px)
			height: 355px
	span
		display: block
		color: #6a0030
		font-weight: 700
		margin:
			top: -7px
	&__link
		text-decoration: none
		color: #000000
		font-weight: 700
		line-height: 18px
		display: block
		width: 100px
		margin:
			top: 14px
			left: auto
			right: auto
		&:hover, &:focus
			text-decoration: none
			color: #000
	&__action
		margin:
			bottom: 15px
		@media (max-width: 991.98px)
			font-size: 14px
			line-height: 22px
	&:before
		content: ''
		height: 2px
		width: calc(100% - 34px)
		position: absolute
		bottom: 46px
		margin:
			left: auto
			right: auto
		background-color: #dcdcdc

.news__actions::-webkit-scrollbar
	width: 4px
.news__actions::-webkit-scrollbar-button
	background-color: #666
.news__actions::-webkit-scrollbar-track
	background-color: none
.news__actions::-webkit-scrollbar-thumb
	height: 100px
	background-color: #000000
	border-radius: 5px
.news__actions::-webkit-scrollbar-button
    background-color: #F8F8F8


.contacts
	line-height: 18px
	margin:
		top: 24px
	p
		margin:
			bottom: 22px
		@media (max-width: 1199.98px)
			margin:
				bottom: 15px
		@media (max-width: 991.98px)
			font-size: 14px

	&__phone, &__email, &__address
		padding:
			left: 40px
		background-repeat: no-repeat
		background-size: contain
		background-position: left center
		padding:
			top: 2px
			bottom: 2px
	&__address
		padding:
			bottom: 9px
	&__phone
		background-image: url("../assets/Icons/phone-receiver.svg")
		background-size: 20px 20px
	&__email
		background-image: url("../assets/Icons/envelope.svg")
		background-size: 20px auto
	&__address
		background-image: url("../assets/Icons/map.svg")
		background-size: 28px auto
		background-position: -4px 2px
	&__link
		display: block
		margin:
			left: auto
			right: auto
		width: 115px
		text-decoration: none
		color: #000000
		font-weight: 700
		line-height: 18px
		&:hover, &:focus
			text-decoration: none
			color: #000


.category
	margin:
		top: 40px
	a
		text-decoration: none
		&:hover, &:focus
			text-decoration: none
	&__title
		font-size: 30px
		font-weight: 700
		margin:
			bottom: 40px
		width: 700px
		@media (max-width: 1199.98px)
			width: 600px
		@media (max-width: 991.98px)
			margin:
				bottom: 25px
		@media (max-width: 767.98px)
			font-size: 25px
			width: 500px
		@media (max-width: 575.98px)
			width: 100%

	&__element-title
		z-index: 10
		color: #ffffff
		font-size: 18px
		font-weight: 700
		line-height: 22px
		width: 100px
		text-align: center
		margin:
			left: auto
			right: auto
			bottom: 0
	&__element
		margin:
			bottom: 30px
		@media (max-width: 575.98px)
			margin: 
				bottom: 15px
		&-candybar, &-marmalade, &-drinks, &-chocolate
			background-size: cover
			background-repeat: no-repeat
			position: relative
			z-index: 10
			background-color: grey
			min-height: 125px
			display: flex
			justify-content: center
			align-items: center
			&:before
				content: ''
				z-index: 1
				position: absolute
				left: 0
				right: 0
				top: 0
				bottom: 0
				background-color: rgba(0, 0, 0, 0.6)
		&-candybar
			background-image: url("../assets/candy-bar-1735659_1920.jpg")
			background-position: 0 -32px
			@media (max-width: 1199.98px)
				background-position: 0 -10px
		&-marmalade
			background-image: url("../assets/marmalade-1248343_1920.jpg")
			background-position: 0 -35px
			@media (max-width: 1199.98px)
				background-position: 0 -10px

		&-drinks
			background-image: url("../assets/drew-taylor-325456-unsplash.jpg")
			background-position: 0 -35px
			@media (max-width: 1199.98px)
				background-position: 0 -10px
			@media (max-width: 575.98px)
				background-position: 0 -75px
		&-chocolate
			background-image: url("../assets/candies-chocolates-delicious-867464.jpg")
			background-position: 0 -30px
			@media (max-width: 1199.98px)
				background-position: 0 -10px

.sale
	padding:
		top: 20px
	&__wrapper
		position: relative
		z-index: 10
	&__content
		position: relative
		background-image: url("../assets/annie-spratt-96529-unsplash.jpg")
		background-repeat: no-repeat
		background-size: cover
		background-position: 0 -250px
		padding:
			top: 40px
			left: 45px
			right: 45px
			bottom: 60px
		background-color: grey
		@media (max-width: 991.98px)
			background-position: 0 -50px
		@media (max-width: 767.98px)
			padding:
				left: 20px
				right: 20px
		@media (max-width: 575.98px)
			background-position: 0 center
		&::after
			content: ''
			position: absolute
			left: 0
			right: 0
			bottom: 0
			top: 0
			background-color: rgba(0, 0, 0, 0.6)
	&__title
		display: block
		font-size: 30px
		line-height: 37px
		width: 600px
		color: #ffffff
		margin:
			bottom: 12px
		@media (max-width: 767.98px)
			font-size: 25px
			line-height: 30px
			width: 500px
		@media (max-width: 575.98px)
			width: 100%
	&__description
		width: 850px
		color: #E6E6E6
		margin:
			bottom: 30px
		@media (max-width: 991.98px)
			width: 600px
		@media (max-width: 767.98px)
			width: 500px
		@media (max-width: 575.98px)
			width: 100%
	&__date
		color: #FFFAB9
		font-weight: 700
	.special
		display: inline-block
		margin:
			left: 7px
			right: 7px
		color: #FFFAB9
		border-bottom: 2px dotted #FFFAB9
		font-weight: 700


.jumble
	&__wrapper
		position: relative
		z-index: 10
	&__content
		position: relative
		margin:
			top: 66px
		background-color: grey
		background-image: url("../assets/samuel-holt-490207-unsplash.jpg")
		background-repeat: no-repeat
		background-size: cover
		background-position: 0 -130px
		padding:
			left: 70px
			top: 70px
			right: 70px
			bottom: 80px
		color: #E6E6E6
		@media (max-width: 991.98px)
			padding:
				left: 50px
				bottom: 50px
				top: 50px
				right: 50px
			background-position: 0 0
		@media (max-width: 767.98px)
			padding:
				left: 45px
				right: 45px
		@media (max-width: 575.98px)
			padding: 
				left: 20px
				right: 20px
		&::after
			z-index: 10
			content: ''
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: 0
			background-color: rgba(0, 0, 0, 0.7)
	&__title
		display: block
		width: 100%
		font-size: 30px
		line-height: 35px
		color: #ffffff
		margin:
			bottom: 40px
		@media (max-width: 991.98px)
			margin:
				bottom: 20px
		@media (max-width: 767.98px)
			font-size: 25px
			line-height: 30px
	&__description
		width: 695px
		margin:
			bottom: 32px
		&:last-of-type
			margin:
				bottom: 42px
			@media (max-width: 991.98px)
				margin:
					bottom: 30px

		@media (max-width: 991.98px)
			width: 550px
			margin:
				bottom: 20px
		@media (max-width: 767.98px)
			width: 400px
			margin:
				bottom: 15px
		@media (max-width: 575.98px)
			width: 100%
	&__wrapper
		z-index: 100
		position: relative
	.jumble__button
		padding:
			right: 62px
		background-image: url("../assets/Icons/tool.svg")
		background-repeat: no-repeat
		background-size: 18px auto
		background-position: right 30px top 15px
		margin:
			bottom: 28px

.advantages
	margin:
		top: 70px
	&__content
		padding:
			top: 70px
			left: 70px
			right: 50px
			bottom: 1px
		background-color: grey
		background-image: url("../assets/candies-confection-delicious-884509.jpg")
		background-size: cover
		background-position: -25px 0
		@media (max-width: 991.98px)
			background-position: -40px 0
		@media (max-width: 767.98px)
			padding:
				top: 60px
				left: 50px
				right: 30px
			background-position: -120px 0
		@media (max-width: 575.98px)
			padding:
				top: 50px
				left: 20px
				right: 20px
	&__title
		font-weight: 700
		font-size: 50px
		line-height: 61px
		width: 600px
		margin:
			bottom: 80px
		@media (max-width: 991.98px)
			margin:
				bottom: 50px
		@media (max-width: 767.98px)
			font-size: 40px
			line-height: 50px
			width: 450px
			margin:
				bottom: 40px
		@media (max-width: 575.98px)
			font-size: 25px
			line-height: 40px
			width: 100%
			margin:
				bottom: 30px
	&__list
		padding:
			left: 0
		list-style: none
	&__element-title
		font-weight: 700
		font-size: 20px
		line-height: 24px
		margin:
			bottom: 10px
		width: 350px
		@media (max-width: 767.98px)
			width: 300px
		@media (max-width: 575.98px)
			width: 100%
	&__description
		width: 345px
		margin:
			bottom: 0
		@media (max-width: 767.98px)
			width: 300px
		@media (max-width: 575.98px)
			width: 100%
	&__element
		padding:
			left: 100px
			bottom: 10px
		margin:
			bottom: 70px
		background-repeat: no-repeat
		background-position: 0 0
		background-size: 60px auto
		&--assortment
			background-image: url("../assets/Icons/sweet.svg")
		&--orders
			background-image: url("../assets/Icons/fast.svg")
			background-position: 0 -5px
		&--delivery
			background-image: url("../assets/Icons/delivery-box.svg")
		@media (max-width: 991.98px)
			margin:
				bottom: 40px
		@media (max-width: 767.98px)
			background-size: 50px auto
			padding:
				left: 80px
			margin:
				bottom: 30px
		@media (max-width: 575.98px)
			background-size: 40px auto
			padding:
				left: 60px
			margin:
				bottom: 20px


.delivery
	margin:
		top: 70px
	&__wrapper
		position: relative
		z-index: 100
	&__content
		position: relative
		padding:
			top: 65px
			left: 70px
			bottom: 140px
			right: 50px
		background-color: #000000
		color: #ffffff
		background-image: url("../assets/anton-sharov-423618-unsplash.jpg")
		background-repeat: no-repeat
		background-size: cover
		background-position: 0 -120px
		@media (max-width: 991.98px)
			padding:
				bottom: 90px
		@media (max-width: 767.98px)
			padding:
				left: 50px
				bottom: 70px
		@media (max-width: 575.98px)
			padding:
				bottom: 50px
		&::after
			content: ''
			position: absolute
			z-index: 10
			top: 0
			left: 0
			bottom: 0
			right: 0
			background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
			background-color: rgba(0, 0, 0, 0.4)
	&__title
		font-size: 50px
		line-height: 61px
		font-weight: 700
		margin:
			bottom: 80px
		width: 600px
		@media (max-width: 991.98px)
			margin:
				bottom: 50px
		@media (max-width: 767.98px)
			font-size: 35px
			line-height: 40px
			width: 400px
		@media (max-width: 575.98px)
			width: 100%
	&__order
		display: block
		font-size: 20px
		font-weight: 700
		line-height: 25px
		margin:
			bottom: 40px
		width: 700px
		@media (max-width: 991.98px)
			width: 600px
		@media (max-width: 767.98px)
			width: 400px
			margin:
				bottom: 30px
		@media (max-width: 575.98px)
			font-size: 18px
			line-height: 22px
			width: 100%
	&__list
		color: #E6E6E6
		padding:
			left: 0
		list-style: none
		margin:
			bottom: 50px
		width: 700px
		@media (max-width: 991.98px)
			width: 600px
		@media (max-width: 767.98px)
			width: 400px
			margin:
				bottom: 30px
		@media (max-width: 575.98px)
			width: 100%
	&__description
		color: #E6E6E6
		margin:
			bottom: 50px
		width: 900px
		@media (max-width: 991.98px)
			width: 600px
		@media (max-width: 767.98px)
			width: 400px
		@media (max-width: 575.98px)
			width: 100%
	&__special
		display: inline-block
		margin:
			left: 7px
			right: 7px
		color: #FFFAB9
		border-bottom: 2px dotted #FFFAB9
		font-weight: 700
		@media (max-width: 991.98px)
			margin:
				left: 0
		&:hover, &:focus
			color: #FFFAB9
			text-decoration: none
	&__element
		margin:
			top: -4px

.filter
	padding: 
		left: 31px
	@media (max-width: 1199.98px) 
		padding: 
			left: 15px
	@media (max-width: 767.98px)
		display: none
		padding: 
			right: 0
		position: fixed
		z-index: 1000
		background-color: #fff
		width: 300px
		height: 100%
		overflow: auto
		top: 0
		right: 0
		&::before
			content: ''
			z-index: 10
			position: fixed
			top: 0
			left: 0
			bottom: 0
			right: 0
			background-color: rgba(0, 0, 0, 0.6)
		&::after
			content: ''
	&__content
		@media (max-width: 767.98px)
			position: relative
			z-index: 100
			background-color: #fff
			padding: 
				left: 30px
				top: 1px
				bottom: 40px
	.el-checkbox__inner
		border-radius: 0
		border-width: 2px
		border-color: #c4c4c4
	.el-checkbox__label
		color: #000
		padding: 
			left: 15px
	&__close
		display: none
		@media (max-width: 767.98px)
			display: block
			cursor: pointer
			width: 15px
			height: 15px
			position: fixed
			top: 25px
			right: 310px
			.filter__close--icon
				fill: #ffffff
				margin: 
					top: -11px
	&__mobile-title
		display: none
		@media (max-width: 767.98px)
			display: block
			font-weight: 700
			font-size: 20px
			color: #c4c4c4
			text-transform: uppercase
			margin: 
				top: 17px
				bottom: 35px
	&__title
		position: relative
		font-size: 18px
		font-weight: 700
		width: 220px
		cursor: pointer
		margin: 
			bottom: 13px
		&--category, &--manufacturer, &--occasion
			&::after
				content: ''
				position: absolute
				right: 0
				top: 4px
				margin: 
					top: auto
					bottom: auto
				transform: rotate(-90deg)
				display: inline
				width: 10px
				height: 12px
				background-image: url("../assets/Icons/right-arrow.svg")
				background-repeat: no-repeat
				background-size: cover
	&__list
		padding: 
			left: 19px
		list-style: none
	&__button.el-button
		margin: 
			left: 15px
		width: 200px
	&__button--refresh.el-button
			color: #000
			font-weight: 700
			background-color: #fff
			margin: 
				top: 23px
			@media (max-width: 767.98px)
				display: none

	.el-slider
		width: 230px
		margin: 
			bottom: 40px
		@media (max-width: 1199.98px)
			width: 100%
		@media (max-width: 767.98px)
			width: 230px

.filter.show
	display: block



.sort
	padding: 
		top: 38px
		bottom: 33px
		left: 31px
	display: flex
	align-items: baseline
	@media (max-width: 1199.98px) 
		padding: 
			left: 15px
	@media (max-width: 767.98px)
		display: flex
		flex-direction: column
	@media (max-width: 575.98px)
		padding: 
			left: 40px
			right: 40px
	&__title
		font-size: 18px
		font-weight: 700
		margin: 
			bottom: 0
			left: 60px
			right: 67px
		@media (max-width: 767.98px)
			display: none
	&__filters
		display: none
		@media (max-width: 767.98px)
			display: block
			width: 350px
			cursor: pointer
			padding: 
				top: 5px
				bottom: 5px
			margin: 
				top: 23px
			background-image: url("../assets/Icons/filter-tool-black-shape.svg")
			background-repeat: no-repeat
			background-size: 15px auto
			background-position: right center	
		@media (max-width: 575.98px)
			width: 100%						
	&__select
		@media (max-width: 767.98px)
			display: inline-block
			margin: 
				top: 23px
		.el-input__inner
			border: none
			padding: 
				left: 0
			width: 140px
			&::placeholder
				font-size: 15px
				color: #000
			@media (max-width: 767.98px)
				width: 360px
		@media (max-width: 575.98px)
			width: 100%
			
	&__search.el-input
		width: 230px			
		.el-input__inner
			padding: 
				left: 5px
			border: none
			border-bottom: 1px solid #c4c4c4
			&::placeholder
				font-size: 15px
				color: #DCDCDC
		@media (max-width: 767.98px)
			width: 350px
		@media (max-width: 575.98px)
			width: 100%


.filter::-webkit-scrollbar
	width: 4px
.filter::-webkit-scrollbar-button
	background-color: #666
.filter::-webkit-scrollbar-track
	background-color: none
.filter::-webkit-scrollbar-thumb
	height: 100px
	background-color: #000000
	border-radius: 5px
.filter::-webkit-scrollbar-button
    background-color: #F8F8F8



.catalog
	margin: 
		top: 8px
	&__title
		a
			display: block
			font-size: 15px
			color: #000000
			text-decoration: none
			line-height: 18px
			margin: 
				bottom: 22px
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
		&--snikers
			.catalog__photo
				width: 190px
				height: 55px
				margin: 
					top: 71px
					bottom: 91px
					left: auto
					right: auto
		&--cola
			.catalog__photo
				width: 183px
				height: 121px
				margin: 
					top: 49px
					bottom: 47px
					left: auto
					right: auto
		&--milka
			.catalog__photo
				width: 157px
				height: 157px
				margin: 
					top: 21px
					bottom: 39px
					left: auto
					right: auto
		&--kinder
			.catalog__photo
				width: 139px
				height: 139px
				margin: 
					top: 34px
					bottom: 44px
					left: auto
					right: auto
		&--sprite
			.catalog__photo
				width: 224px
				height: 130px
				margin: 
					top: 44px
					bottom: 44px
					left: auto
					right: auto
		&--fanta
			.catalog__photo
				width: 152px
				height: 119px
				margin: 
					top: 49px
					bottom: 51px
					left: auto
					right: auto
		&--oreo
			.catalog__photo
				width: 125px
				height: 100px
				margin: 
					top: 49px
					bottom: 68px
					left: auto
					right: auto
		&--kitkat
			.catalog__photo
				width: 181px
				height: 181px
				margin: 
					top: 9px
					bottom: 27px
					left: auto
					right: auto
		&--orbit
			.catalog__photo
				width: 151px
				height: 80px
				margin: 
					top: 60px
					bottom: 77px
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
			transition: all 0.3s ease
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
			transition: all 0.3s ease
			fill: #C4C4C4
		&:hover
			.basket
				fill: #E70068
	&__information
		display: flex
		margin: 
			top: auto

.pagination
	display: inline-block
	padding: 
		top: 5px
		bottom: 5px
	background-color: #f8f8f8
	&__content
		display: flex
		align-items: center
		.number
			width: 40px
			height: 40px
			padding: 
				top: 5px
			@media (max-width: 575.98px)
				width: 30px
				height: 30px
				padding: 
					top: 2px
		.number.active + .number
			box-shadow: inset 0 0 0px 1px #dcdcdc
		.el-icon-more
			margin: 
				top: 10px
		.el-pager
			display: flex
			align-items: baseline


.pages
	display: flex
	align-items: center
	&__count
		margin: 
			left: auto
			bottom: 0
		@media (max-width: 767.98px)
			margin: 
				left: 0
				top: 20px

</style>
