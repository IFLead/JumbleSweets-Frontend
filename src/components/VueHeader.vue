<template>
  <div class="header">
		<header class="main-header">
			<b-container>
				<b-row>
					<b-col>
						<div class="main-header__content">
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
.main-header
	&__content
		padding:
			top: 24px
			bottom: 24px
		display: flex
		@media (max-width: 991.98px)
			padding:
				top: 15px
				bottom: 15px
		@media (max-width: 575.98px)
			font-size: 14px
	&__logo-link
		@media (max-width: 991.98px)
				order: 1
	&__logo
		width: 108px
		height: 50px
		background-image: url("../assets/Icons/logo-pink.svg")
		margin:
			right: 51px
		@media (max-width: 575.98px)
			margin:
				left: 10px
	&__menu-list
		position: relative
		display: flex
		flex-direction: row
		list-style: none
		padding: 0
		margin:
			top: 16px
			bottom: 0
		width: 590px
		flex-wrap: wrap
		@media (max-width: 1199.98px)
			width: 540px
		@media (max-width: 991.98px)
			flex-direction: column
			width: 100%
			position: fixed
			top: -17px
			left: 0
			width: 100%
			z-index: 1000
			background: #ffffff
			display: none
	&__menu-list.show
		display: block
	&__hamburger
		margin:
			top: 18px
		position: relative
		width: 30px
		height: 20px
		cursor: pointer
		display: none
		&::before
			content: ''
			position: absolute
			bottom: 0px
			width: 100%
			height: 2px
			background-color: #000000
		&::after
			content: ''
			position: absolute
			top: 0px
			width: 100%
			height: 2px
			background-color: #000000
		&--midleline
			position: absolute
			top: 9px
			width: 100%
			height: 2px
			background-color: #000000
		@media (max-width: 991.98px)
			display: block
		@media (max-width: 575.98px)
			margin:
				right: 10px


	&__menu
		@media (max-width: 991.98px)
			order: 3


	&__menu-element
		margin:
			right: 40px
		@media (max-width: 1199.98px)
			margin:
				right: 20px
		@media (max-width: 991.98px)
			margin:
				right: 0
			border-bottom: 1px solid rgba(0, 0, 0, 0.15)
		&:last-child
			margin:
				right: 0
		a
			padding: 5px
			text-decoration: none
			color: #000000
			font-weight: 700
			@media (max-width: 991.98px)
				display: block
				width: 100%
				padding:
					top: 10px
					bottom: 10px
				text-align: center
	&__close
		cursor: pointer
		position: fixed
		top: 10px
		right: 30px
		z-index: 10000
		width: 3px
		height: 20px
		background-color: #000
		transform: rotate(45deg)
		display: none
		&::after
			content: ''
			position: fixed
			cursor: pointer
			z-index: 10000
			width: 3px
			height: 20px
			background-color: #000
			transform: rotate(-90deg)
	&__close.show
		display: block


	&__user
		margin:
			left: auto
			right: 30px
		@media (max-width: 1199.98px)
			margin:
				right: 10px
		@media (max-width: 991.98px)
				order: 2
	&__user-list
		list-style: none
		display: flex
		margin:
			top: 16px
			bottom: 0
		padding: 0
		@media (max-width: 575.98px)
			display: none
			flex-direction: column
			width: 100%
			position: fixed
			top: 213px
			left: 0
			width: 100%
			z-index: 10000
			background: #ffffff
	&__user-element
		position: relative
		margin:
			right: 40px
		@media (max-width: 1199.98px)
			margin:
				right: 20px
		@media (max-width: 575.98px)
			margin:
				right: 0
			border-bottom: 1px solid rgba(0, 0, 0, 0.15)

		&:last-child
			margin:
				right: 0
		.el-badge.item
			@media (max-width: 575.98px)
				display: block
				margin:
					left: auto
					right: auto
		.el-badge__content
			@media (max-width: 575.98px)
				margin:
					right: calc(50% - 40px)
					top: 10px
		a
			padding: 5px
			text-decoration: none
			color: #000000
			font-weight: 700
			@media (max-width: 575.98px)
				display: block
				width: 100%
				padding:
					top: 10px
					bottom: 10px
				text-align: center


.main-header__user-list.show
	display: block


</style>
