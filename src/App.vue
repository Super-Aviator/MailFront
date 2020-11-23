<template>
	<div id="app">
		<transition :name="transition">
			<keep-alive><router-view /></keep-alive>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transition: ''
		};
	},
	components: {},
	created() {},
	watch: {
		$route(to, from) {
			if (!from.meta.index) {
				this.transition = 'slide-left';
			} else {
				if (to.meta.index > from.meta.index) {
					this.transition = 'slide-left';
				} else {
					this.transition = 'slide-right';
				}
			}
			window.document.title = to.name;
		}
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 0.16rem;
}
.dim {
	-webkit-filter: blur(3px);
	-moz-filter: blur(3px);
	-o-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	will-change: transform;
	transition: all 500ms;
	position: absolute;
	width: 100%;
	height: 100%;
}
.slide-right-enter {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
</style>
