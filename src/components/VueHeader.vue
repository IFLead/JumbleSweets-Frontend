<template>
  <div class="header">
		<header class="main-header">
			<b-container>
				<b-row>
					<b-col>
						<div class="main-header__content">
							<a href="#" class="main-header__logo"></a>
							<a href="#" class="main-header__title">Меню</a>
							<div class="main-header__menu menu">
								<ul class="menu__list">
									<li class="menu__close"></li>
									<li class="menu__element"><a href="#">Главная</a></li>
									<li class="menu__element"><a href="#">О нас</a></li>
									<li class="menu__element"><a href="#">Контакты</a></li>
									<li class="menu__element"><a href="#">Доставка и оплата</a></li>
									<li class="menu__element"><a href="#">Jumble Box</a></li>
									<li class="menu__element menu__element--mobile mobile">
										<a href="#" class="mobile__login">Личный кабинет</a>
										<a href="#" class="mobile__inst">Мы в Instagram</a>
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
										<a href="#"><span>Корзина</span></a>
									</el-badge>
								</li>
								<li class="user__element user__element--login"><a href="#">Личный кабинет</a></li>
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
