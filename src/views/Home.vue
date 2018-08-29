<template>
  <div class="home">
    <b-container>
      <header class="main-header">
        <a href="#" class="main-header__logo-link"><div class="main-header__logo"></div></a>
        <nav class="main-header__menu">
          <div class="main-header__hamburger">
            <div class="main-header__hamburger--midleline"></div>
          </div>
          <div class="main-header__close "></div> <!--Чтобы появился крестик добавить класс .show -->
          <ul class="main-header__menu-list "> <!--Чтобы появилось меню добавить класс .show -->
            <li class="main-header__menu-element">
              <a href="#">Главная</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">О нас</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">Контакты</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">Доставка и оплата</a>
            </li>
            <li class="main-header__menu-element">
              <a href="#">Jumble box</a>
            </li>
          </ul>
        </nav>
        <div class="main-header__user">
          <ul class="main-header__user-list "><!--Чтобы появилось меню добавить класс .show -->
            <li class="main-header__user-element">
              <el-badge :value="1" class="item">
                <a href="#">Корзина</a>
              </el-badge>
            </li>
            <li class="main-header__user-element"><a href="#">Личный кабинет</a></li>
          </ul>
        </div>
      </header>
      <!-- <main>
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
          <h2 class="category__title">Популярные категории товаров</h2>
          <b-container>
            <b-row>
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
          <div class="sale__wrapper">
            <b class="sale__title">Получи 10% скидку на одну покупку.</b>
            <p class="sale__description">Используй промокод  <span class="special">JUMBLESALE2018</span> при оформлении заказа. Акция действует до <span class="sale__date">31 декабря 2018 года.</span></p>
          </div>
        </section>

        <section class="products">
            <div class="products__search">
              <el-autocomplete
							class="inline-input products__search--input"
							v-model="state1"
							:fetch-suggestions="querySearch"
							placeholder="Поиск товаров"
							@select="handleSelect"
							></el-autocomplete>
            </div>
            <h3 class="products__title">Сортировка</h3> 
						<el-select v-model="value" placeholder="Сначала новые">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>   

					<b-container>
						<b-row>
							<b-col cols="3" class="products__filter filter">
								<form action="">
									<ul class="filter__list">
										<li class="filter__element">
											<h3 class="filter__title filter__title--category">Категория товара</h3>
											<ul class="filter__checkbox filter__checkbox--category">
												<li><label><el-checkbox v-model="checked" >Все (101)</el-checkbox></label></li>
												<li><label><input type="checkbox" name="category"  >Шоколад (9)</label></li>
												<li><label><input type="checkbox" name="category" >Мармелад (40)</label></li>
												<li><label><input type="checkbox" name="category" >Батончики (1)</label></li>
												<li><label><input type="checkbox" name="category" >Печенье (7)</label></li>
												<li><label><input type="checkbox" name="category" >Жвачки (11)</label></li>
												<li><label><input type="checkbox" name="category" >Напитки (33)</label></li>
											</ul>
										</li>
										<li class="filter__element">
											<h3 class="filter__title filter__title--manufacturer">Производитель</h3>occasion
											<ul class="filter__checkbox filter__checkbox--manufacture">
												<li><label><input type="checkbox" name="manufacture" >Все</label></li>
												<li><label><input type="checkbox" name="manufacture" >Европа</label></li>
												<li><label><input type="checkbox" name="manufacture" >США</label></li>
												<li><label><input type="checkbox" name="manufacture" >Азия</label></li>
											</ul>
										</li>
										<li class="filter__element">
											<h3 class="filter__title filter__title--occasion">Поводы</h3>
											<ul class="filter__checkbox filter__checkbox--occasion">
												<li><label><input type="checkbox" name="occasion" >День рождения</label></li>
												<li><label><input type="checkbox" name="occasion" >Свадьба</label></li>
												<li><label><input type="checkbox" name="occasion" >Свидание</label></li>
												<li><label><input type="checkbox" name="occasion" >Рождение ребенка</label></li>
												<li><label><input type="checkbox" name="occasion" >Юбилей</label></li>
											</ul>
										</li>
										<li class="filter__element">
											<h3 class="filter__title filter__title--cost">Цена</h3>
										</li>
									</ul>
									<input type="submit" value="Применить">
									<input type="reset" value="Сбросить">
								</form>
							</b-col>

							<b-col cols="9" class="products__catalog catalog">
								<ul class="catalog__list">
									<li class="catalog__element catalog__element--snikers">
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
									</li>
									<li class="catalog__element catalog__element--cola">
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
									</li>
									<li class="catalog__element catalog__element--milka">
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
									</li>
									<li class="catalog__element catalog__element--kinder">
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
									</li>
									<li class="catalog__element catalog__element--sprite">
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
									</li>
									<li class="catalog__element catalog__element--fanta">
										<div class="catalog__photo">
											<a href="#">
												<img src="../assets/3.png" alt="Напиток Fanta" width="152" height="114">
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
									</li>
									<li class="catalog__element catalog__element--oreo">
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
									</li>
									<li class="catalog__element catalog__element--kitkat">
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
									</li>
									<li class="catalog__element catalog__element--orbit">
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
									</li>
								</ul>
							</b-col>
						</b-row>
					</b-container>       


          <div class="products__navigation navigation">
            <ul class="navigation__pages">
              <li class="navigation__page"><a href="#">1</a></li>
              <li class="navigation__page"><a href="#">2</a></li>
              <li class="navigation__page"><a href="#">3</a></li>
              <li class="navigation__page"><a href="#">4</a></li>
              <li class="navigation__page"><a href="#">5</a></li>
              <li class="navigation__page"><a href="#">...</a></li>
              <li class="navigation__page"><a href="#">20</a></li>
              <li class="navigation__page"><a href="#"></a></li>
            </ul>
            <p class="navigation__information">Страница 1 из 20</p>
          </div>
        </section>

        <section class="jumble">
          <div class="jumble__wrapper">
            <b class="jumble__title">Jumble Box - это всегда позитивные эмоции.</b>
            <p class="jumble__description">У нас можно заказать Jumble Box к любому значимому событию. Он станет отличным подарком для Вашей второй половинки, друга или коллеги по работе.</p>
            <p class="jumble__description">Jumble Box можно заказать в любом оформлении и наполнении. Каждый Jumble Box создаётся в соответствии с Вашими пожеланиями и исключительно в оригинальном стиле.</p>
            <el-button class="jumble__button">Перейти в конструктор</el-button>
          </div>
        </section>

        <section class="advantages">
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
        </section>

        <section class="delivery">
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
        </section>
      </main> -->
			<main>
				<section class="jumble-box">
					<div class="jumble-box__wrapper">
						<h2 class="jumble-box__title">Что такое Jumble Box</h2>
						<p class="jumble-box__description">
							Jumble Box - это универсальная подарочная коробка, которую Вы можете наполнить любыми сладостями на выбор.
						</p>
						<p class="jumble-box__description">
							При создании Jumble Box Вы сможете выбрать необходимый размер, а после - изменить внешнее оформление и, при желании, добавить открытку с поздравлениями для Ваших друзей и близких.
						</p>
						<h2 class="jumble-box__title">Jumble Mystery</h2>
						<p class="jumble-box__description">
							Если Вы не можете определиться с выбором или любите неожиданности, Jumble Mystery - то, что Вам нужно! Подарочная коробка - сюрпри со случайными сладостями, стоимость которой меньше, чем стоимость её содержимого. Выгодно и интересно, не правда ли?
						</p>
					</div>		
				</section>

				<section class="steps">
					<h2 class="steps__title">Хочу себе бокс, что нужно сделать?</h2>
					<b-container class="steps__container">
						<b-row align-h="center" align-v="auto">
							<b-col sm="6" md="4" class="steps__element">
								<div class="steps__content  steps__content--first">
									<p class="steps__number">Первый шаг</p>
									<b class="steps__element-title">Выберите размер бокса</b>
								</div>		
							</b-col>
							<b-col sm="6" md="4" class="steps__element">
								<div class="steps__content  steps__content--second">
									<p class="steps__number">Второй шаг</p>
									<b class="steps__element-title">Измените внешнее оформление</b>
								</div>		
							</b-col>
							<b-col sm="6" md="4" class="steps__element">
								<div class="steps__content  steps__content--third">
									<p class="steps__number">Третий шаг</p>
									<b class="steps__element-title">Заполните бокс товарами</b>
								</div>
							</b-col>
							<b-col sm="6" md="4" class="steps__element">
								<div class="steps__content  steps__content--four">
									<p class="steps__number">Четвертый шаг</p>
									<b class="steps__element-title">Добавьте открытку</b>
								</div>	
							</b-col>
							<b-col sm="6" md="4" class="steps__element">
								<div class="steps__content steps__content--fifth">
									<p class="steps__number">Пятый шаг</p>
									<b class="steps__element-title">Добавьте бокс в корзину</b>
								</div>	
							</b-col>
						</b-row>
					</b-container>
				</section>

				<section class="jumble-size">
					<h2 class="jumble-size__title">Создайте свой Jumble Box</h2>
					<b-container class="jumble-size__container">
						<b-row>
							<b-col lg="4" class="jumble-size__element">
								<a href="#">
									<div class="jumble-size__content">
										<h3 class="jumble-size__element-title">Jumble Small</h3>
										<p class="jumble-size__description">Вместимость: 5 слотов</p>
									</div>
									<div class="jumble-size__hide">
										<p>
											Перейти к наполнению
										</p>	
									</div>
								</a>
							</b-col>
							<b-col lg="4" class="jumble-size__element">
								<a href="#">
									<div class="jumble-size__content">
										<h3 class="jumble-size__element-title">Jumble Medium</h3>
										<p class="jumble-size__description">Вместимость: 10 слотов</p>
									</div>
									<div class="jumble-size__hide">
										<p>
											Перейти к наполнению
										</p>	
									</div>
								</a>
							</b-col>
							<b-col lg="4" class="jumble-size__element">
								<a href="#">
									<div class="jumble-size__content">
										<h3 class="jumble-size__element-title">Jumble Heavy</h3>
										<p class="jumble-size__description">Вместимость: 15 слотов</p>
									</div>
									<div class="jumble-size__hide">
										<p>
											Перейти к наполнению
										</p>	
									</div>
								</a>
							</b-col>
						</b-row>
					</b-container>
				</section>

				<section class="surprise">
					<h2 class="surprise__title">Любите сюрпризы?</h2>
					<p class="surprise__subtitle">Junble Mystery - решение для тех, кто любит загадки и неожиданности</p>
					<b-container class="surprise__container">
						<b-row>
							<b-col lg="4" class="surprise__element">
								<a href="#">
									<div class="surprise__content">
										<h3 class="surprise__element-title">Mystery Small</h3>
										<p class="surprise__description">Вместимость: 5 слотов</p>
										<p class="surprise__description">Стоимость содержимого: 500грн.</p>
										<b class="surprise__price">400 грн.</b>
									</div>
									<div class="surprise__hide">
										<p>
											Добавить в корзину
										</p>	
									</div>
								</a>							
							</b-col>
							<b-col lg="4" class="surprise__element">
								<a href="#">
									<div class="surprise__content">
										<h3 class="surprise__element-title">Mystery Medium</h3>
										<p class="surprise__description">Вместимость: 10 слотов</p>
										<p class="surprise__description">Стоимость содержимого: 600грн.</p>
										<b class="surprise__price">550 грн.</b>
									</div>
									<div class="surprise__hide">
										<p>
											Добавить в корзину
										</p>	
									</div>
								</a>							
							</b-col>
							<b-col lg="4" class="surprise__element">
								<a href="#">
									<div class="surprise__content">
										<h3 class="surprise__element-title">Mystery Small</h3>
										<p class="surprise__description">Вместимость: 15 слотов</p>
										<p class="surprise__description">Стоимость содержимого: 1000грн.</p>
										<b class="surprise__price">900 грн.</b>
									</div>
									<div class="surprise__hide">
										<p>
											Добавить в корзину
										</p>	
									</div>
								</a>							
							</b-col>
						</b-row>
					</b-container>
				</section>

				<section class="what-choose">
					<div class="what-choose__content">
						<h2 class="what-choose__title">Не знаете, что выбрать?</h2>
						<p class="what-choose__description">Не пропустите лучшие предложения в нашем каталоге товаров</p>
						<el-button class="what-choose__button">Вернуться в каталог 
							<span class="what-choose__button-icon">
								<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									width="20px" height="20px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
								<g>
									<g>
										<g>
											<path style="fill:#ffffff;" d="M15.733,20.125c1.104,0,2-0.896,2-2v-7.8C17.733,6.838,20.57,4,24.058,4c3.487,0,6.325,2.838,6.325,6.325v7.8
												c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2v-7.8C34.383,4.632,29.751,0,24.058,0c-5.692,0-10.324,4.632-10.324,10.325v7.8
												C13.733,19.229,14.629,20.125,15.733,20.125z"/>
											<path style="fill:#ffffff;" d="M47,15.631H36.383v2.494c0,2.206-1.794,4-4,4c-2.205,0-4-1.794-4-4v-2.494h-8.649v2.494c0,2.206-1.794,4-4,4
												s-4-1.794-4-4v-2.494H1c-0.552,0-0.893,0.435-0.762,0.971L7.235,45.1C7.658,46.702,9.343,48,11,48h26
												c1.658,0,3.342-1.299,3.767-2.9l6.996-28.498C47.893,16.065,47.553,15.631,47,15.631z"/>
										</g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
									</span>
						</el-button>
					</div>
				</section>
			</main>

      <footer class="main-footer">
        <ul class="main-footer__list">
          <li class="main-footer__logo"><a href="#"></a></li>
          <li class="main-footer__main-information main-information">
            <h3 class="main-information__title">Основная информация</h3>
            <ul class="main-information__list">
              <li class="main-information__element"><a href="">Оплата и доставка</a></li>
              <li class="main-information__element"><a href="">Jumble Box</a></li>
              <li class="main-information__element"><a href="">О нас</a></li>
            </ul>
          </li>


          <li class="main-footer__client client">
            <h3 class="client__title">Клиенту</h3>
            <ul class="client__list">
              <li class="client__element"><a href="#">Личный кабинет</a></li>
              <li class="client__element"><a href="#">Мои заказы</a></li>
              <li class="client__element"><a href="#">Каталог товаров</a></li>
            </ul>
          </li>

          <li class="main-footer__feedback feedback">
            <h3 class="feedback__title">Всегда с Вами</h3>
            <ul class="feedback__list">
              <li class="feedback__element"><a href="#">Обратная связь</a></li>
              <li class="feedback__element"><a href="#">Наш Instagram</a></li>
              <li class="feedback__element"><a href="#">Контакты</a></li>
            </ul>
          </li>
        </ul>
        <p class="main-footer__copyright">Jumble Sweets © 2018</p>
      </footer>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
};
</script>

<style lang="sass">


</style>
