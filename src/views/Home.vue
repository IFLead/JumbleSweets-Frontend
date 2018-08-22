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

        <!-- <section class="products">
          <div class="products__sort sort">
            <div class="sort__search">
              <input type="text" placeholder="Поиск товаров">
            </div>
            <h3 class="sort__title">Сортировка</h3>
            <select id="" name="" class="sort__new-old">
              <option value="">От новых к старым</option>
            </select>
            <select id="" name="" class="sort__new-old">
              <option value="">От новых к старым</option>
            </select>
            <select id="" name="" class="sort__cheap-expensive">
              <option value="">От дешевых к дорогим</option>
            </select>
            <select id="" name="" class="sort__alphabet">
              <option value="">А-я</option>
            </select>
          </div>

          <div class="products__filter filter">
            <form action="">
              <ul class="filter__list">
                <li class="filter__element">
                  <h3 class="filter__title filter__title--category">Категория товара</h3>
                  <ul class="filter__checkbox filter__checkbox--category">
                    <li><label><input type="checkbox" name="category" >Все (101)</label></li>
                    <li><label><input type="checkbox" name="category" >Шоколад (9)</label></li>
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
          </div>

          <div class="products__catalog catalog">
            <ul class="catalog__list">
              <li class="catalog__element">
                <h4 class="catalog__title">Батончик Snickers</h4>
                <div class="catalog__information">
                  <p class="catalog__price">60 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Напиток Coca Cola</h4>
                <div class="catalog__information">
                  <p class="catalog__price">120 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Шоколад Milka Молочный</h4>
                <div class="catalog__information">
                  <p class="catalog__price">75 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Яйцо Kinder Surprise</h4>
                <div class="catalog__information">
                  <p class="catalog__price">88 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Напиток Sprite</h4>
                <div class="catalog__information">
                  <p class="catalog__price">50 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Напиток Fanta</h4>
                <div class="catalog__information">
                  <p class="catalog__price">65 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Печенье Oreo</h4>
                <div class="catalog__information">
                  <p class="catalog__price">90 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Батончик KitKat Chunky</h4>
                <div class="catalog__information">
                  <p class="catalog__price">24 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
              <li class="catalog__element">
                <h4 class="catalog__title">Жевательная резинка Orbit</h4>
                <div class="catalog__information">
                  <p class="catalog__price">10 грн.</p>
                  <button class="catalog__basket"></button>
                  <button class="catalog__like"></button>
                </div>
              </li>
            </ul>
          </div>


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
        </section> -->

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
            <li class="advantages__element">
              <h3 class="advantages__element-title">Широкий ассортимент</h3>
              <p class="advantages__description">Большой выбор товаров на любой вкус</p>
            </li>
            <li class="advantages__element">
              <h3 class="advantages__element-title">Быстрая обработка заказов</h3>
              <p class="advantages__description">Мы ценим Ваше время и понимаем, с каким волнением Вы ждёте товар, поэтому все заказы обрабатываются максимально быстро.</p>
            </li>
            <li class="advantages__element">
              <h3 class="advantages__element-title">Безопасная доставка и оплата</h3>
              <p class="advantages__description">Если доставка осуществляется по Харькову, Вы платите только при получении товара. В случае, если Вы проживаете в другом регионе Украины, доставка происходит Новой почтой посредством предоплаты или наложенного платежа.</p>
            </li>
          </ul>
        </section>

        <section class="delivery">
          <h2 class="delivery__title">Доставка</h2>
          <b class="delivery__order">Заказ можно осуществить в любом регионе Украины</b>
          <ul class="delivery__list">
            <li class="delivery__element">- Бесплатная доставка по г. Харькову</li>
            <li class="delivery__element">- Возможность самовывоза</li>
            <li class="delivery__element">- Доставка Новой почтой по всей Украине</li>
          </ul>
          <p class="delivery__description">Более подробно Вы можете ознакомиться с условиями доставки и оплаты в <span class="special">специальном разделе.</span></p>
        </section>
      </main>

      <footer class="main-footer">
        <ul class="main-footer__list">
          <li class="main-footer__logo"></li>
          <li class="main-footer__main-information main-information">
            <h3 class="main-information__title">Основная информация</h3>
            <ul class="main-information__list">
              <li class="main-information__element">Оплата и доставка</li>
              <li class="main-information__element">Jumble Box</li>
              <li class="main-information__element">О нас</li>
            </ul>
          </li>


          <li class="main-footer__client client">
            <h3 class="client__title">Клиенту</h3>
            <ul class="client__list">
              <li class="client__element">Личный кабинет</li>
              <li class="client__element">Мои заказы</li>
              <li class="client__element">Каталог товаров</li>
            </ul>
          </li>

          <li class="main-footer__Feedback Feedback">
            <h3 class="Feedback__title">Всегда с Вами</h3>
            <ul class="Feedback__list">
              <li class="Feedback__element">Обратная связь</li>
              <li class="Feedback__element">Наш Instagram</li>
              <li class="Feedback__element">Контакты</li>
            </ul>
          </li>
        </ul>
        <p class="main-footer__copyright">Jumble Sweets  2018</p>
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
