<template>
  <div class="footer"> 
		<footer class="main-footer">
			<b-container>
				<b-row>
					<b-col>
						<div class="main-footer__content">
							<b-row>
								<b-col sm="5" lg="3" offset="1" offset-sm="0" >
									<div class="main-footer__logo">
										<a href="#"></a>
									</div>
								</b-col>
								<b-col sm="7" offset="1" offset-sm="0" lg="3">
									<div class="main-footer__main-information main-information">
										<h3 class="main-information__title">Основная информация</h3>
										<ul class="main-information__list">
											<li class="main-information__element"><a href="">Оплата и доставка</a></li>
											<li class="main-information__element"><a href="">Jumble Box</a></li>
											<li class="main-information__element"><a href="">О нас</a></li>
										</ul>
									</div>
								</b-col>
								<b-col sm="7" offset="1" offset-sm="5"  offset-lg="0" lg="2">
									<div class="main-footer__client client">
										<h3 class="client__title">Клиенту</h3>
										<ul class="client__list">
											<li class="client__element"><a href="#">Личный кабинет</a></li>
											<li class="client__element"><a href="#">Мои заказы</a></li>
											<li class="client__element"><a href="#">Каталог товаров</a></li>
										</ul>
									</div>
								</b-col>
								<b-col sm="7" offset="1" offset-sm="5" offset-lg="0" lg="3">
									<div class="main-footer__feedback feedback">
										<h3 class="feedback__title">Всегда с Вами</h3>
										<ul class="feedback__list">
											<li class="feedback__element"><a href="#">Политика конфиденциальности</a></li>
											<li class="feedback__element"><a href="#">Наш Instagram</a></li>
											<li class="feedback__element"><a href="#">Контакты</a></li>
										</ul>
									</div>
								</b-col>
								<b-col cols="12">
									<p class="main-footer__copyright">Jumble Sweets © 2018</p>
								</b-col>
							</b-row>
						</div>
					</b-col>			
				</b-row>
   	 </b-container>
		</footer>				
  </div>
</template>

<script>
  export default {
    name: 'VueFooter',
    components: {

    },
  };
</script>

<style lang="sass">
.main-footer
	&__content
		padding:
			top: 60px
			bottom: 62px
		background-color: #000000
		color: #ffffff
		@media (max-width: 767.98px)
			padding:
				top: 40px
		@media (max-width: 575.98px)
			padding: 
				bottom: 40px
	&__logo
		a
			display: block
			width: 108px
			height: 50px
			background-image: url("../assets/Icons/logo-yellow.svg")
			background-repeat: no-repeat
			background-size: contain
			margin: 
				left: 70px
			@media (max-width: 575.98px)
				margin: 
					left: 0
					bottom: 20px
	&__copyright
		width: 200px
		text-align: center
		margin:
			bottom: 0
			top: 90px
			left: auto
			right: auto
		@media (max-width: 575.98px)
			margin: 
				top: 60px
.main-information, .client, .feedback
	&__list
		padding:
			left: 0
		list-style: none
	&__title
		font-size: 20px
		font-weight: 700
		margin:
			bottom: 30px
		@media (max-width: 991.98px)
			margin:
				bottom: 20px

	&__element
		margin:
			bottom: 5px
		a
			color: #e6e6e6
			&:hover, &:focus
				color: #e6e6e6
				text-decoration: none
	@media (max-width: 991.98px)
		margin:
			bottom: 30px

</style>
