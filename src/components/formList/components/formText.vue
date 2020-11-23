<template>
	<div>
		<div class="form-div" v-bind="$attrs.props" v-on="$attrs.event">{{$attrs.label}}</div>
	</div>
</template>

<script>
export default {
	name: 'formDiv',
	components: {},
	props: {
	},
	data() {
		return {};
	},
	created() {},
	mounted() {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.form-div {
	text-align: center;
	font-size: .27rem;
	color: #4a90e2;
}
</style>
