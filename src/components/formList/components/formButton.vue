<template>
	<div>
		<van-button class="form-button" v-bind="$attrs.props" v-on="$attrs.event" @click.native="formBack">{{ $attrs.label }}</van-button>
	</div>
</template>

<script>
export default {
	name: 'formButton',
	components: {},
	props: {},
	data() {
		return {};
	},
	mounted() {
	},
	methods: {
		formBack() {
			this.$emit('formBack', this.$attrs);
		}
	}
};
</script>

<style lang="scss" scoped>
.form-button {
	display: block;
	width: 5.9rem;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	background-color: #4a90e2;
	margin: 0 auto;
	border-radius: 0.4rem;
	font-size: 0.3rem;
	color: #ffffff;
}
</style>
