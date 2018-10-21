<template>
  <div class="cards">

    <div class="products__catalog catalog">
      <div v-for="product in allProducts" :key="product.node.id"
           class="catalog__element">
        <div class="catalog__content">
          <!--<div v-if="product.node.availability.onSale" class="catalog__sale">{{
              getDiscount(product.node.availability.discount.net.amount,
              product.node.price.amount) }}%
            </div>-->
          <div class="catalog__photo">
            <!--<a :href="product.url" @click="router.push(product.url)">-->
            <!--<img :src="product.photo_url" width="125" height="100">-->
            <!--</a>-->
            <router-link :to="product.node.url">
              <img :src="product.node.thumbnailUrl" width="125" height="100">
            </router-link>
          </div>
          <div class="catalog__information">
            <h4 class="catalog__name">
              <router-link :to="product.node.url">{{ product.node.name }}</router-link>
            </h4>
            <p v-if="product.node.availability.onSale" class="catalog__price">{{ product.node.price.amount -
            product.node.availability.discount.net.amount }} грн.</p>
            <p v-else class="catalog__price">{{ product.node.price.amount }} грн.</p>
            <p v-if="product.node.availability.onSale" class="catalog__old-price">{{ product.node.price.amount
            }} грн.</p>
            <div class="catalog__basket">
              <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" x="0px" y="0px"
                   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g><g>
                  <path class="basket" d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z" @click="addProductToCart(product.node)"/>
                </g></g>
              </svg>
            </div>
            <div>
            </div>
            <div class="catalog__like">
              <div v-if="false">
                <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                  <g><g id="favorite"><path class="liked" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g>
                </svg>
              </div>
              <div v-else>
                <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="21.74px" height="20px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"><g><g id="favorite"><path class="like" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { getDiscount as getDiscountBase } from '../utils/priceFuncs';

export default {
  name: 'Cards',
  components: {},
  data() {
    return {
      options: [{
        value: 'name',
        label: 'А-Я',
      }, {
        value: 'price',
        label: 'Цена',
      }],
      sortBy: '',
      activeNames: ['1'],
      filterOpen: false,
      sliderRange: [0, 1000],
      checkList: [],
      productName: '',
    };
  },
  computed: {
    ...mapGetters(['allProducts', 'allCategories', 'allOccasions', 'allManufacturers', 'allNews', 'getCartItems']),
  },
  created() {
    this.loadProducts({});
    this.loadCategories({});
    this.loadManufacturers({});
    this.loadOccasions({});
    this.loadNews({});
  },
  methods: {
    ...mapActions(['loadProducts', 'loadCategories', 'loadOccasions', 'loadManufacturers', 'loadNews']),
    ...mapMutations(['addToCart']),
    addProductToCart(product) {
      this.addToCart({
        id: product.id,
        quantity: 1,
        price: product.availability.discount ? product.price.amount - product.availability.discount.net.amount : product.price.amount,
        photoUrl: product.thumbnailUrl,
        name: product.name,
      });
    },
    getDiscount(reduction, preDiscPrice) {
      return getDiscountBase(reduction, preDiscPrice);
    },
    sortFilterProducts() {
      const priceGte = this.sliderRange[0];
      const priceLte = this.sliderRange[1];
      const filters = { price_Gte: priceGte, price_Lte: priceLte, name_Icontains: this.productName };
      const data = { filters, sortBy: this.sortBy };
      this.loadProducts(data);
    },
  },
};
</script>

<style lang="sass">
.cards
  .catalog
    display: flex
    flex-wrap: wrap
    position: relative
    margin:
      top: 8px
    &__photo
      height: 200px
      display: flex
      justify-content: center
      align-items: center
    &__information
      height: 100px
      display: flex
      flex-wrap: wrap
      align-items: flex-start
      padding:
        top: 16px
        left: 20px
        right: 20px
        bottom: 24px
    &__name
      font-size: 15px
      line-height: 20px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      max-width: 200ch
      width: 100%
      margin:
        bottom: 20px
      a
        transition: all 0.2s ease
        display: inline-block
        font-size: 15px
        line-height: 20px
        color: #000000
        text-decoration: none
        &:hover, &:focus
          color: #e70068
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
    &__content
      box-sizing: content-box
      max-width: 262px
      display: flex
      flex-direction: column
      position: relative
      height: 300px
      background-color: #F8F8F8
    &__element
      max-width: 262px
      margin:
        right: 25px
        bottom: 30px
      @media (max-width: 575.98px)
        width: 294px
        margin:
          left: auto
          right: auto
    &__price
      font-weight: 700
      line-height: 20px
      margin:
        bottom: 0
      &--sale
        color: #e70068
    &__old-price
      font-weight: regular
      line-height: 20px
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
        top: -4px
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
        top: -4px
      .basket
        transition: all 0.3s ease
        fill: #C4C4C4
      &:hover
        .basket
          fill: #E70068
    .liked
      fill: #E70068

</style>
