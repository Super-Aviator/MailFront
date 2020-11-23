<template>
	<div class="main">
		<!-- logo -->
		<img class="login-logo" src="../../assets/login-logo.jpg" />

		<!-- 顶部nav -->
		<div class="box-white-shadow login-nav">
			<router-link class="nav-btn" to="/login/loginPage" :class="$route.path == '/login/loginPage' ? 'nav-btn-active' : ''">登录</router-link>
			<router-link class="nav-btn" to="/login/registerPage" :class="$route.path == '/login/registerPage' ? 'nav-btn-active' : ''">注册</router-link>
		</div>

		<!-- 子路由 -->
		<keep-alive><router-view /></keep-alive>
	</div>
</template>

<script>
export default {
	name: 'index',
	components: {},
	data() {
		return {};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.main {
	background-color: #ffffff;
	.login-logo {
		width: 100%;
		height: auto;
	}

	.login-nav {
		font-size: 0.4rem;
		color: #3f3f3f;
		margin-bottom: 0.88rem;
		.nav-btn {
			display: inline-block;
			height: 1.12rem;
			line-height: 1.12rem;
			width: 50%;
			text-align: center;
			position: relative;
		}
		.nav-btn-active::after {
			content: '';
			position: absolute;
			width: 2.24rem;
			height: 0.08rem;
			bottom: -0.05rem;
			left: 0.75rem;
			background-color: #4a90e2;
		}
	}
}
</style>
