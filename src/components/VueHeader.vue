<template>
  <div class="header">
		<header class="main-header">
			<b-container>
				<b-row>
					<b-col>
						<div class="main-header__content">
              <router-link to="/" class="main-header__logo"></router-link>
							<a href="#" class="main-header__title">Меню</a>
							<div class="main-header__menu menu">
								<ul class="menu__list">
									<li class="menu__close"></li>
									<li class="menu__element"><router-link to="/">Главная</router-link></li>
									<li class="menu__element"><router-link to="/about">О нас</router-link></li>
									<li class="menu__element"><router-link to="/contacts">Контакты</router-link></li>
									<li class="menu__element"><router-link to="/delivery">Доставка и оплата</router-link></li>
									<li class="menu__element"><router-link to="/jumble_box">Jumble Box</router-link></li>
									<li class="menu__element menu__element--mobile mobile">
                    <router-link to="/profile" class="mobile__login">Личный кабинет</router-link>
                    <router-link to="#" class="mobile__inst">Мы в Instagram</router-link>
										<ul class="mobile__contacts">
											<li class="mobile__element">+38(050)-666-66-66</li>
											<li class="mobile__element">help@jumble-sweets.com.ua</li>
											<li class="mobile__element">г. Харьков, Героев труда 7, ТРЦ Караван</li>
										</ul>
									</li>
								</ul>
							</div>

							<ul class="main-header__user user">
								<li class="user__element user__element--cart">
									<el-badge :value="1">
                    <router-link to="/cart"><span>Корзина</span></router-link>
									</el-badge>
								</li>
								<li class="user__element user__element--login"><router-link to="/profile">Личный кабинет</router-link></li>
							</ul>

						</div>
					</b-col>
				</b-row>
   	 </b-container>
		</header>
  </div>
</template>



<script>

  export default {
    name: 'VueHeader',
    components: {

    },
  };
</script>

<style lang="sass">



</style>
